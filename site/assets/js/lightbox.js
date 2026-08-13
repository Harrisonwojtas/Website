// Shared lightbox for all gallery pages.
// Any <img class="gallery-img"> automatically opens in the lightbox on click -
// no inline onclick= needed on individual images.

document.addEventListener('click', (e) => {
  const img = e.target.closest('.gallery-img');
  if (img) {
    openLightbox(img.src, img.alt);
  }
});

document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

function openLightbox(src, alt) {
  const existing = document.getElementById('lightbox');
  if (existing) existing.remove();

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'lightbox-overlay';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';

  lightbox.addEventListener('click', () => lightbox.remove());
  document.addEventListener('keydown', function escClose(ev) {
    if (ev.key === 'Escape') {
      lightbox.remove();
      document.removeEventListener('keydown', escClose);
    }
  });

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);
}
