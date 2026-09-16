document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Gallery data ---------- */
const GALLERY = [
  { src: 'assets/img/cerimonia-1.jpg', cat: 'cerimonia', label: 'Cerimônia', w: 1350, h: 1800 },
  { src: 'assets/img/detalhe-buque.jpg', cat: 'detalhes', label: 'Detalhes', w: 1500, h: 2000 },
  { src: 'assets/img/doces-2.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/ambientado-1.jpg', cat: 'ambientado', label: 'Ambientação', w: 1799, h: 1800 },
  { src: 'assets/img/festa-2.jpg', cat: 'festa', label: 'Festa', w: 1321, h: 1800 },
  { src: 'assets/img/detalhe-bolo.jpg', cat: 'detalhes', label: 'Detalhes', w: 1500, h: 2000 },
  { src: 'assets/img/convidados-1.jpg', cat: 'convidados', label: 'Convidados', w: 1350, h: 1800 },
  { src: 'assets/img/bar-3.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/lembrancinhas-1.jpg', cat: 'detalhes', label: 'Detalhes', w: 1398, h: 1800 },
  { src: 'assets/img/cerimonia-2.jpg', cat: 'cerimonia', label: 'Cerimônia', w: 1350, h: 1800 },
  { src: 'assets/img/festa-1.jpg', cat: 'festa', label: 'Festa', w: 1350, h: 1800 },
  { src: 'assets/img/externo-1.jpg', cat: 'ambientado', label: 'Ambientação', w: 1350, h: 1800 },
  { src: 'assets/img/quitutes-1.jpg', cat: 'detalhes', label: 'Detalhes', w: 1438, h: 1438 },
  { src: 'assets/img/convidados-2.jpg', cat: 'convidados', label: 'Convidados', w: 1800, h: 1800 },
  { src: 'assets/img/doces-1.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/bar-2.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/ambientado-3.jpg', cat: 'ambientado', label: 'Ambientação', w: 1502, h: 1800 },
  { src: 'assets/img/festa-3.jpg', cat: 'festa', label: 'Festa', w: 1350, h: 1800 },
  { src: 'assets/img/cerimonia-4.jpg', cat: 'cerimonia', label: 'Cerimônia', w: 1350, h: 1800 },
  { src: 'assets/img/externo-3.jpg', cat: 'ambientado', label: 'Ambientação', w: 1350, h: 1800 },
  { src: 'assets/img/lembrancinhas-2.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/convidados-3.jpg', cat: 'convidados', label: 'Convidados', w: 1350, h: 1800 },
  { src: 'assets/img/doces-3.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/quitutes-2.jpg', cat: 'detalhes', label: 'Detalhes', w: 1350, h: 1800 },
  { src: 'assets/img/festa-4.jpg', cat: 'festa', label: 'Festa', w: 1350, h: 1800 },
];

const galleryEl = document.getElementById('gallery');
GALLERY.forEach((item, i) => {
  const fig = document.createElement('div');
  fig.className = 'gallery-item';
  fig.dataset.cat = item.cat;
  fig.innerHTML = `<img src="${item.src}" alt="${item.label}, casamento" width="${item.w}" height="${item.h}" loading="lazy"><span class="tag">${item.label}</span>`;
  fig.addEventListener('click', () => openLightbox(i));
  galleryEl.appendChild(fig);
});

/* ---------- Filters ---------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = () => Array.from(galleryEl.querySelectorAll('.gallery-item'));

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    galleryItems().forEach(el => {
      const show = f === 'all' || el.dataset.cat === f;
      el.classList.toggle('hidden-item', !show);
    });
    requestAnimationFrame(revealVisible);
  });
});

/* ---------- Reveal on scroll ---------- */
const revealables = document.querySelectorAll('.reveal, .gallery-item');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealables.forEach(el => io.observe(el));

function revealVisible() {
  galleryItems().forEach(el => {
    if (!el.classList.contains('hidden-item')) io.observe(el);
  });
}

/* ---------- Header scroll state ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentIndex = 0;

function visibleIndices() {
  const activeCat = document.querySelector('.filter-btn.active').dataset.filter;
  return GALLERY.map((item, i) => i).filter(i => activeCat === 'all' || GALLERY[i].cat === activeCat);
}

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = GALLERY[index].src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
function stepLightbox(dir) {
  const idxs = visibleIndices();
  let pos = idxs.indexOf(currentIndex);
  pos = (pos + dir + idxs.length) % idxs.length;
  currentIndex = idxs[pos];
  lightboxImg.src = GALLERY[currentIndex].src;
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lightboxNext').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') stepLightbox(1);
  if (e.key === 'ArrowLeft') stepLightbox(-1);
});

/* ---------- Video hover play + modal ---------- */
document.querySelectorAll('.video-card').forEach(card => {
  const vid = card.querySelector('video');
  card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
  card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  card.addEventListener('click', () => openVideoModal(card.dataset.video));
});

const videoModal = document.getElementById('videoModal');
const videoModalPlayer = document.getElementById('videoModalPlayer');
function openVideoModal(src) {
  videoModalPlayer.src = src;
  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  videoModalPlayer.play().catch(() => {});
}
function closeVideoModal() {
  videoModal.classList.remove('open');
  videoModalPlayer.pause();
  videoModalPlayer.removeAttribute('src');
  videoModalPlayer.load();
  document.body.style.overflow = '';
}
document.getElementById('videoModalClose').addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
});
