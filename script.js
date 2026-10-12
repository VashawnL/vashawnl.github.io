const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

// Only show a video player once its file can be loaded. Until then, the page
// displays a simple note telling you exactly where to put your recording.
document.querySelectorAll('[data-video-container]').forEach((container) => {
  const video = container.querySelector('video');
  if (!video) return;

  const showVideo = () => container.classList.add('has-video');
  video.addEventListener('loadedmetadata', showVideo, { once: true });
  video.addEventListener('error', () => container.classList.remove('has-video'));
  video.load();
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
