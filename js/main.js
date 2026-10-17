/* ==========================================================================
   GEZGİN REHBERİ - DİNAMİK KART VE FİLTRELEME MANTIĞI (GÜVENLİ SÜRÜM)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobil Menü Mantığı
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Kartları Yükle (rotalar tanımlı mı kontrol et)
  if (typeof rotalar !== 'undefined' && Array.isArray(rotalar)) {
    renderCards(rotalar);
  } else {
    console.error("rotalar.js dosyası bulunamadı veya 'rotalar' dizisi tanımlanmadı!");
  }

  // Arama Dinleyicisi
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', filterDestinations);
  }
});

let activeCategory = 'all';

// Kartları Ekrana Basan Fonksiyon
function renderCards(dataList) {
  const container = document.getElementById('cards-grid');
  if (!container) return;

  container.innerHTML = '';

  dataList.forEach(item => {
    const cardHTML = `
      <div class="destination-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg" 
           data-category="${item.kategori}" 
           data-title="${item.aramaKelimeleri}">
          <div class="relative h-52">
              <img src="${item.gorsel}" alt="${item.baslik}" loading="lazy" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 bg-white/90 text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">${item.kategoriEtiket}</span>
          </div>
          <div class="p-5">
              <h3 class="text-lg font-bold text-slate-900">${item.baslik}</h3>
              <p class="text-xs text-slate-500 mt-1"><i class="fa-solid fa-location-dot"></i> ${item.konum}</p>
              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-xs text-slate-500">Sezon: <strong>${item.sezon}</strong></span>
                  <a href="${item.link}" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">Detayları Gör <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
              </div>
          </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  updateCount(dataList.length);
}

// Kategori Filtreleme
function setCategory(category) {
  activeCategory = category;

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

// Canlı Arama ve Filtreleme
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

  updateCount(visibleCount);
}

function updateCount(count) {
  const countBadge = document.getElementById('result-count');
  if (countBadge) {
    countBadge.innerText = `${count} Mekan Listeleniyor`;
  }
}
