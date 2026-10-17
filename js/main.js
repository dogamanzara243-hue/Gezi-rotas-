/* ==========================================================================
   GEZGİN REHBERİ - INTERAKTİF JAVASCRIPT MANTIĞI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobil Menü Toggle Mantığı
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Arama Girdisi Dinleyicisi
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', filterDestinations);
  }
});

// Global Kategori Durumu
let activeCategory = 'all';

// Kategori Seçme Fonksiyonu
function setCategory(category) {
  activeCategory = category;

  // Buton aktiflik stillerini güncelleme
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-md', 'shadow-emerald-600/20');
    btn.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
  });

  if (event && event.target) {
    event.target.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
    event.target.classList.add('bg-emerald-600', 'text-white', 'shadow-md', 'shadow-emerald-600/20');
  }

  filterDestinations();
}

// Filtreleme ve Arama Algoritması
function filterDestinations() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const cards = document.querySelectorAll('.destination-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    const title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : '';

    const matchesCategory = (activeCategory === 'all' || category === activeCategory);
    const matchesQuery = (title.includes(query) || query === '');

    if (matchesCategory && matchesQuery) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const countBadge = document.getElementById('result-count');
  if (countBadge) {
    countBadge.innerText = `${visibleCount} Mekan Listeleniyor`;
  }
}

// Favori Ekleme Uyarısı (İleride LocalStorage'a bağlanabilir)
function toggleFavorite(event) {
  event.preventDefault();
  event.stopPropagation();
  alert('Bu rota favorilerinize eklendi!');
}
