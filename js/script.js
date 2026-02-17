document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect & Logo Swap
    const header = document.getElementById('main-header');
    const headerLogo = document.getElementById('header-logo');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
            headerLogo.src = headerLogo.dataset.blue;
        } else {
            header.classList.remove('header-scrolled');
            headerLogo.src = headerLogo.dataset.white;
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // 3. Slider Functionality (Infinite Loop)
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const originalCards = document.querySelectorAll('.testimonial-card');

    if (sliderTrack && originalCards.length > 0) {
        const firstClones = [];
        const lastClones = [];
        const clonesCount = Math.min(originalCards.length, 3); // Use at most 3 clones, or fewer if not enough cards

        // Create clones
        for (let i = 0; i < clonesCount; i++) {
            firstClones.push(originalCards[i].cloneNode(true));
            lastClones.push(originalCards[originalCards.length - 1 - i].cloneNode(true));
        }

        // Append and prepend clones
        firstClones.forEach(clone => sliderTrack.appendChild(clone));
        lastClones.reverse().forEach(clone => sliderTrack.insertBefore(clone, sliderTrack.firstChild));

        const allCards = document.querySelectorAll('.testimonial-card');
        let currentIndex = clonesCount;
        let isTransitioning = false;

        const getCardsPerView = () => {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        };

        const updateSlider = (withTransition = true) => {
            const cardWidth = originalCards[0].offsetWidth;
            const gap = parseFloat(getComputedStyle(sliderTrack).gap);
            const moveWidth = cardWidth + gap;

            if (withTransition) {
                sliderTrack.style.transition = 'transform 0.5s ease-in-out';
            } else {
                sliderTrack.style.transition = 'none';
            }

            sliderTrack.style.transform = `translateX(-${currentIndex * moveWidth}px)`;
        };

        const handleTransitionEnd = () => {
            isTransitioning = false;
            if (currentIndex >= allCards.length - clonesCount) {
                currentIndex = clonesCount;
                updateSlider(false);
            } else if (currentIndex < clonesCount) {
                currentIndex = allCards.length - clonesCount * 2 + currentIndex;
                // Wait, if currentIndex is e.g. 2 (one less than clonesCount), 
                // and original cards are at 3,4,5. Total cards 3+3+3 = 9.
                // currentIndex 2 is clone of 5. Jump to 5.
                // correct logic: currentIndex = (originalCards.length) + currentIndex - clonesCount;
                // Let's re-verify:
                // index 0,1,2 (clones of 3,4,5) | 3,4,5 (originals) | 6,7,8 (clones of 3,4,5)
                // if we are at 2, we should jump to 5.
                // currentIndex = originalCards.length + (currentIndex - clonesCount);
                // 3 + (2 - 3) = 2. No.
                // If currentIndex is clonesCount - 1 (e.g. 2), it's the last original card.
                // The originals are from index 3 to 3 + originalCards.length - 1.
                // So if we are at 2, jump to 3 + originalCards.length - 1 = 5.
                currentIndex = originalCards.length + currentIndex;
                updateSlider(false);
            }
        };

        // Fix the jump logic for index
        const jumpToEdges = () => {
            if (currentIndex >= originalCards.length + clonesCount) {
                currentIndex = clonesCount;
                updateSlider(false);
            } else if (currentIndex < clonesCount) {
                currentIndex = originalCards.length + currentIndex;
                updateSlider(false);
            }
        }

        sliderTrack.addEventListener('transitionend', () => {
            isTransitioning = false;
            jumpToEdges();
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (isTransitioning) return;
                isTransitioning = true;
                currentIndex++;
                updateSlider(true);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (isTransitioning) return;
                isTransitioning = true;
                currentIndex--;
                updateSlider(true);
            });
        }

        window.addEventListener('resize', () => {
            updateSlider(false);
        });

        // Initial setup
        updateSlider(false);

        // Re-init expansion for clones and originals
        const initExpansion = () => {
            document.querySelectorAll('.expand-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const testimonialText = btn.closest('.testimonial-text');
                    const fullText = testimonialText.nextElementSibling;
                    btn.classList.toggle('active');
                    fullText.classList.toggle('active');
                });
            });
        };
        initExpansion();
    }

    // 4. Fetch Events from Notion (via PHP proxy)
    const eventsContainer = document.getElementById('events-container');

    const loadEvents = async () => {
        if (!eventsContainer) return;

        // Loading state
        eventsContainer.innerHTML = '<p style="text-align: center; font-size: 1.2rem; font-weight: 500;">Načítám aktuální akce...</p>';

        try {
            const response = await fetch('api/events.php');
            if (!response.ok) throw new Error('Chyba při načítání dat');

            const data = await response.json();

            if (!data.events || data.events.length === 0) {
                eventsContainer.innerHTML = '<p style="text-align: center; font-size: 1.2rem; font-weight: 500;">Aktuálně nemám naplánované žádné akce.</p>';
                return;
            }

            eventsContainer.innerHTML = '';
            data.events.forEach(event => {
                // Formatting date (handles Notion format or ISO)
                let formattedDate = event.date;
                try {
                    const eventDate = new Date(event.date);
                    if (!isNaN(eventDate.getTime())) {
                        formattedDate = new Intl.DateTimeFormat('cs-CZ', {
                            day: 'numeric',
                            month: 'numeric',
                            year: 'numeric'
                        }).format(eventDate).replace(/\s/g, '&nbsp;'); // Non-breaking spaces per instructions
                    }
                } catch (e) { console.error("Date error", e); }

                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';

                // Construct HTML based on whether image exists
                let imageHtml = '';
                if (event.image && event.image.trim() !== '') {
                    imageHtml = `
                        <div class="event-image">
                            <img src="${event.image}" alt="${event.name}" loading="lazy">
                        </div>
                    `;
                }

                eventCard.innerHTML = `
                    ${imageHtml}
                    <div class="event-card-content">
                        <div class="event-card-header">
                            <span class="event-date">${formattedDate}</span>
                            <span class="event-place">📍 ${event.place}</span>
                        </div>
                        <h3>${event.name}</h3>
                        <p class="event-desc">${event.description || ''}</p>
                        ${event.link ? `
                            <div class="event-card-footer">
                                <a href="${event.link}" class="btn btn-primary" target="_blank">${event.button || 'Více informací'}</a>
                            </div>
                        ` : ''}
                    </div>
                `;
                eventsContainer.appendChild(eventCard);
            });

        } catch (error) {
            console.error('Chyba při načítání akcí:', error);
            eventsContainer.innerHTML = '<p style="text-align: center; font-weight: 500; color: #d93025;">Chyba při načítání dat. Zkuste to prosím později.</p>';
        }
    };

    loadEvents();

    // 6. Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href.startsWith('#')) return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 7. Video Modal Functionality
    const videoModal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const videoClose = document.querySelector('.video-modal-close');
    const videoOverlay = document.querySelector('.video-modal-overlay');
    const videoItems = document.querySelectorAll('.media-item[data-video-id]');

    const openVideoModal = (videoId) => {
        if (!videoModal || !videoIframe) return;
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeVideoModal = () => {
        if (!videoModal || !videoIframe) return;
        videoModal.classList.remove('active');
        videoIframe.src = ''; // Stop video
        document.body.style.overflow = ''; // Restore scrolling
    };

    videoItems.forEach(item => {
        const videoId = item.getAttribute('data-video-id');
        const playBtn = item.querySelector('.play-video-btn');
        const thumb = item.querySelector('.video-thumb');

        // Click on thumbnail or button opens modal
        if (thumb) {
            thumb.addEventListener('click', () => openVideoModal(videoId));
        }
        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openVideoModal(videoId);
            });
        }
    });

    if (videoClose) videoClose.addEventListener('click', closeVideoModal);
    if (videoOverlay) videoOverlay.addEventListener('click', closeVideoModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

});
