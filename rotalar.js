// Akıllı Gezi Rehberi - Tüm Şehir Rotaları Veri Seti
const ROTALAR_DATA = [
    {
        id: "istanbul",
        title: "İstanbul Gezi Rehberi",
        category: "Metropol & Tarih",
        badgeColor: "bg-slate-900/80",
        btnColor: "bg-slate-900 hover:bg-indigo-600",
        description: "Ayasofya'dan Yerebatan'a, Boğaziçi'nden tarihi saraylara uzanan eşsiz iki kıta rotası.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-istanbul/"
    },
    {
        id: "ankara",
        title: "Ankara Gezi Rehberi",
        category: "Başkent & Kültür",
        badgeColor: "bg-amber-700/80",
        btnColor: "bg-amber-600 hover:bg-amber-700",
        description: "Anıtkabir, Ankara Kalesi ve Anadolu Medeniyetleri Müzesi ile başkent rotası.",
        image: "https://images.unsplash.com/photo-1589030343991-69ea1433b941?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-ankara/"
    },
    {
        id: "izmir",
        title: "İzmir Gezi Rehberi",
        category: "Ege & Deniz",
        badgeColor: "bg-sky-600/80",
        btnColor: "bg-sky-600 hover:bg-sky-700",
        description: "Kordon'dan Efes Antik Kenti'ne, Alaçatı'dan Şirince'ye Ege'nin incisi.",
        image: "https://images.unsplash.com/photo-1589030343991-69ea1433b941?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-izmir/"
    },
    {
        id: "antalya",
        title: "Antalya Gezi Rehberi",
        category: "Akdeniz & Plaj",
        badgeColor: "bg-teal-600/80",
        btnColor: "bg-teal-600 hover:bg-teal-700",
        description: "Kaleiçi, Düden Şelalesi ve turkuaz sularıyla Türk Rivierası rotası.",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-antalya/"
    },
    {
        id: "samsun",
        title: "Samsun Gezi Rehberi",
        category: "Karadeniz & Tarih",
        badgeColor: "bg-indigo-600/80",
        btnColor: "bg-indigo-600 hover:bg-indigo-700",
        description: "Bandırma Vapuru Müzesi ve Şahinkaya Kanyonu ile kurtuluş şehri.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-samsun/"
    },
    {
        id: "bolu",
        title: "Bolu Gezi Rehberi",
        category: "Doğa & Orman",
        badgeColor: "bg-emerald-600/80",
        btnColor: "bg-emerald-600 hover:bg-emerald-700",
        description: "Yedigöller Milli Parkı, Abant ve Gölcük ile huzurlu doğa rotası.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-bolu/"
    },
    {
        id: "mugla",
        title: "Muğla Gezi Rehberi",
        category: "Koylar & Tatil",
        badgeColor: "bg-cyan-600/80",
        btnColor: "bg-cyan-600 hover:bg-cyan-700",
        description: "Bodrum, Fethiye Ölüdeniz ve eşsiz turkuaz koylar.",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-mugla/"
    },
    {
        id: "gaziantep",
        title: "Gaziantep Gezi Rehberi",
        category: "Gastronomi & Tarih",
        badgeColor: "bg-amber-600/80",
        btnColor: "bg-amber-600 hover:bg-amber-700",
        description: "Zeugma Mozaik Müzesi ve dünya tescilli Antep mutfağı.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-gaziantep/"
    },
    {
        id: "hatay",
        title: "Hatay Gezi Rehberi",
        category: "Medeniyet & Lezzet",
        badgeColor: "bg-orange-600/80",
        btnColor: "bg-orange-600 hover:bg-orange-700",
        description: "St. Pierre Kilisesi, mozaikler ve meşhur Antakya künefesi.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80&fm=webp",
        url: "https://dogamanzara243-hue.github.io/gezi-rotasi-hatay/"
    }
];

if (typeof window !== 'undefined') {
    window.ROTALAR_DATA = ROTALAR_DATA;
}
