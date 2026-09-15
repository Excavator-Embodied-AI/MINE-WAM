(() => {
  const modal = document.querySelector('.resource-modal');
  const backdrop = document.querySelector('[data-modal-backdrop]');
  const modalTitle = document.querySelector('#modal-title');
  const modalMessage = document.querySelector('#modal-message');
  const closeButton = document.querySelector('.modal-close');
  const resourceButtons = document.querySelectorAll('[data-resource]');
  const autoplayVideos = document.querySelectorAll('[data-autoplay-video]');
  let previousFocus = null;

  const openModal = (button) => {
    previousFocus = button;
    modalTitle.textContent = `${button.dataset.resource} coming soon`;
    modalMessage.textContent = button.dataset.message;
    modal.hidden = false;
    backdrop.hidden = false;
    document.body.classList.add('modal-open');
    closeButton.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    backdrop.hidden = true;
    document.body.classList.remove('modal-open');
    previousFocus?.focus();
  };

  resourceButtons.forEach((button) => {
    button.addEventListener('click', () => openModal(button));
  });

  closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Tab') {
      event.preventDefault();
      closeButton.focus();
    }
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionPreference = () => {
    if (reducedMotion.matches) {
      autoplayVideos.forEach((video) => {
        video.pause();
        video.removeAttribute('autoplay');
        video.controls = true;
      });
    }
  };

  applyMotionPreference();
  reducedMotion.addEventListener?.('change', applyMotionPreference);

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => { video.controls = true; });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.2 });
    autoplayVideos.forEach((video) => observer.observe(video));
  }
})();
