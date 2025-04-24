// Giris 
function toggleModal() {
  const modal = document.getElementById("signin-modal");
  modal.classList.toggle("hidden");
}
 // Modalın fonuna kliklədikdə bağlansın
 document.addEventListener("click", function (event) {
  const modal = document.getElementById("signin-modal");
  const modalContent = modal.querySelector(".bg-white");

  if (!modal.classList.contains("hidden") && !modalContent.contains(event.target) && modal.contains(event.target)) {
    toggleModal();
  }
});

// Kitab siyahisi
const books = [
  {
    title: "Miss Marplın sonuncu işi",
    author: "Agatha Cristie",
    genre: "dedektiv",
    language: "xarici",
    rating: 4,
    price: 9,
    image: "https://static.insales-cdn.com/r/06sZagA35C4/rs:fit:1140:1140:1/q:80/plain/images/products/1/3993/794111897/MARPLIN_SONUNCU_ISHI_qapaq_.jpg@webp",
    description: "Unikal qadın xəfiyyə miss Marpl indiyə qədər bir çox mürəkkəb cinayət işlərinin üstünü açıb...",
    newRelease: true // add this property
  },
  {
    title: "Parisdəki bütün çiçəklər",
    author: "Sarah Jio",
    genre: "sevgi romanı",
    language: "azərbaycan",
    rating: 5,
    price: 15,
    image: "https://static.insales-cdn.com/r/m0JlNWm8K6A/rs:fit:1140:1140:1/q:80/plain/images/products/1/1587/638092851/PARISDEKI_BUTUN_CICEKLER_qapaq.jpg@webp",
    description: "Bu kitabı yazarkən personajlarımın ardınca Parisin gözəl mənzərələrinə səyahət etdim..."
  },
  {
    title: "Lady Susan",
    author: "Jane Austen",
    genre: "klasikler",
    language: "türk",
    rating: 4,
    price: 11,
    image: "https://static.insales-cdn.com/r/g9NvqyEWfSg/rs:fit:1140:1140:1/q:80/plain/images/products/1/449/970736065/0002017366001-1.jpg@webp",
    description: "Seni korkularından yola çıkarak değil, izanından ve sevginden yola çıkarak kazanmak istiyorum."
  },
  {
    title: "Bir ömrün sonbaharı",
    author: "Burcu Yılmaz",
    genre: "məcara",
    language: "türk",
    rating: 4,
    price: 6,
    image: "https://i.dr.com.tr/cache/600x600-0/originals/0000000633265-1.jpg",
    description: "Ömrüm ömrüne emanet demiştin bana.Ve giderken yarım kalan ömrünü bırakmıştın hayatıma.",
    newRelease: true
  },
  {
    title: "Qırmızı damlı malikanədə qətl",
    author: "Natiq Əliyev",
    genre: "dedektiv",
    language: "azərbaycan",
    rating: 4,
    price: 8.20,
    image: "https://www.qanun.az/images/news/compressed/290x420/2024-06-19-15-59-041718798344.jpg?v=1",
    description: "Romanın qəhrəmanı, çoxsaylı intriqaların episentrinə qeyri-ixtiyari düşən iki sevən gəncin taleyinə biganə qala bilmir."
  },
  {
    title: "Ali ve Nino",
    author: "Kurban Said",
    genre: "sevgi romanı",
    language: "türk",
    rating: 4,
    price: 7,
    image: "https://static.insales-cdn.com/r/uFnfdLSzzC8/rs:fit:1140:1140:1/q:80/plain/images/products/1/957/191161277/Qurban_Seid_Ali_Nino_TURK_Esas.png@webp",
    description: "Bir ülkede yaşayan Müslüman Ali ile Gürcü Hıristiyan güzel Nino’nun dünyayı sarsan hikâyesi."
  },



  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "sevgi romanı",
    language: "xarici",
    rating: 4,
    price: 14,
    image: "https://files.legimi.com/images/58dcf09cd985c49deb457ee1993f573f/cover.jpg",
    description: "Anna Karenina is one of the most loved and memorable heroines of literature."
  },
  {
    title: "Məktubdakı qadın",
    author: "Mürşüd Mehdi",
    genre: "dedektiv",
    language: "azərbaycan",
    rating: 4,
    price: 8.70,
    image: "https://static.insales-cdn.com/r/hHWmurGCgYA/rs:fit:1140:1140:1/q:80/plain/images/products/1/7663/936410607/MEKTUBDAKI_QADIN_qapaq__1_.jpg@webp",
    description: "On yaşlı Alenanın yaşından böyük macəraları ilə yaxından tanış olun. Bu kitabda dostluq, ailə dəyərləri, valideyn sevgisi, xeyirxahlıq və bol məktub var… Yaş həddi olmayan kitab."
  },
  {
    title: "4 Günlük səyahət",
    author: "Rəsul Ali",
    genre: "məcara",
    language: "azərbaycan",
    rating: 4,
    price: 9,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLUWC3I1_trm9jlbRqqkkDPjHHZxHDsBk0AdYFZL911LRvh306",
    description: "Pandemiya səbəbindən Hindistanda uzun müddət qalan gənc qızın macəraları..."
  },

  {
    title: "Cinayət və cəza",
    author: "Fyodor Dostoyevski",
    genre: "məcara",
    language: "azərbaycan",
    rating: 4,
    price: 11.90,
    image: "https://www.qanun.az/images/news/compressed/290x420/2024-03-16-11-56-211710575781.jpg?v=1",
    description: "Gənc tələbə çalışqan və qabiliyyətli olsa da, maddi imkansızlıq ucbatından hüquq fakültəsini yarıda buraxır. O, var-dövlətin yaramaz, parazit və mənəviyyatsız insanların əlində cəmləşdiyini düşünür."
  },

  {
    title: "Yüz ilin tənhalığı",
    author: "Qabriel Qarsiya Markes",
    genre: "klasikler",
    language: "azərbaycan",
    rating: 4,
    price: 12.70,
    image: "https://www.qanun.az/images/news/compressed/260x400/2025-02-04-11-36-381738654598.jpg?v=1",
    description: "Qabriel Qarsia Markesin “Yüz ilin tənhalığı” əsəri dünya ədəbiyyatının ən böyük şah əsərlərindən biri hesab olunur. Bu roman təkcə müəllifin deyil, bütövlükdə Latın Amerikası ədəbiyyatının ən təsirli nümunələrindən biridir."
  },

  {
    title: "Səmada görüş",
    author: "Sabina Nasif",
    genre: "klasikler",
    language: "azərbaycan",
    rating: 4,
    price: 10,
    image: "https://www.qanun.az/images/news/compressed/240x370/2025-04-19-10-25-111745043911.jpg?v=1",
    description: "Gənc ana olan Səda övladına daha yaxşı valideyn ola bilmək üçün uzun bir yolçuluğa yollanır. Yol boyunca illər ərzində üzərinə geyindiyi müxtəlif kimlikləri bir-bir soyunaraq, içindəki uşaqla üz-üzə gəlir."
  },


];

let currentPage = 1;
const itemsPerPage = 6;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentFilteredBooks = [];

const modal = document.getElementById("modal");

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cart-count");
  const totalAmount = document.getElementById("totalAmount");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border-b pb-1";
    li.innerHTML = `
      <span>${item.title} - ${item.price} ₼</span>
      <button onclick="removeFromCart(${index})" class="text-red-500 text-lg">
        <i class="fas fa-trash"></i>
      </button>`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  totalAmount.textContent = `${total} ₼`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(title) {
  const book = books.find(b => b.title === title);
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("hidden");
}

function confirmCart() {
  if (cart.length === 0) {
    alert("Səbətdə heç bir kitab yoxdur.");
    return;
  }
  alert("Sifarişiniz uğurla qeydə alındı!");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  document.getElementById("basket-panel").classList.add("hidden");
}

function filterBooks() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const selectedGenre = document.getElementById("genreSelect")?.value.toLowerCase() || "";
  const selectedLang = document.getElementById("languageSelect")?.value.toLowerCase() || "";

  return books.filter(book =>
    (book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword)) &&
    book.price >= minPrice &&
    book.price <= maxPrice &&
    (selectedGenre === "" || book.genre.toLowerCase() === selectedGenre) &&
    (selectedLang === "" || book.language.toLowerCase() === selectedLang)
  );
}

function renderBooks(filtered = null) {
  const filteredBooks = filtered || currentFilteredBooks || books;
  currentFilteredBooks = filteredBooks;

  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredBooks.slice(start, start + itemsPerPage);

  if (paginated.length === 0) {
    bookList.innerHTML = "<p class='text-gray-500'>Nəticə tapılmadı.</p>";
    renderPagination(0);
    return;
  }

  paginated.forEach(book => {
    const div = document.createElement("div");
    div.className = "bg-white p-6 rounded-2xl shadow-lg fade-in mb-6";

    div.innerHTML = `
      <div class="flex items-center gap-4 border shadow-lg rounded-lg p-2 bg-white">
        <div class="flex flex-col items-center w-40">
          <div class="w-full h-60 relative rounded overflow-hidden shadow-md border">
            <img src="${book.image}" alt="${book.title}" class="w-full h-full object-cover" />
            ${book.newRelease ? `<span class="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-sm rounded-br-lg">Yeni</span>` : ""}
          </div>
          <button onclick='openModal("${book.title}")' class="text-blue-500 text-sm mt-2 flex items-center gap-1">
            <i class="fas fa-eye text-gray-400"></i> Ətraflı bax
          </button>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-semibold mb-1">${book.title}</h3>
          <p class="text-gray-700">Müəllif: ${book.author}</p>
          <p class="text-gray-700">Janr: ${book.genre}</p>
          <p class="text-gray-700">Dil: ${book.language}</p>
          <p class="text-blue-700">Qiymət: ${book.price} ₼</p>
          <div class="mt-4">
            <button onclick="addToCart('${book.title}')" class="bg-blue-500 text-white px-3 py-2 rounded hover:bg-gray-400 inline-block ">
              Səbətə əlavə et
            </button>
          </div>
        </div>
      </div>
    `;
    bookList.appendChild(div);
  });

  renderPagination(filteredBooks.length);
}

function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.className = `page-btn ${i === currentPage ? "active-page" : ""}`;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderBooks(currentFilteredBooks);
    });
    pagination.appendChild(btn);
  }
}

function performSearch() {
  currentPage = 1;
  const filtered = filterBooks();
  renderBooks(filtered);
}

function openModal(title) {
  const book = books.find(b => b.title === title);
  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalAuthor").textContent = "Müəllif: " + book.author;
  document.getElementById("modalGenre").textContent = "Janr: " + book.genre;
  document.getElementById("modalLang").textContent = "Dil: " + book.language;
  document.getElementById("modalRating").textContent = "Reytinq: " + book.rating + "⭐";
  document.getElementById("modalPrice").textContent = "Qiymət: " + book.price + " ₼";
  document.getElementById("modalDescription").textContent = book.description || "Kitab haqqında əlavə məlumat yoxdur.";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
}

// Event listeners və ilk yükləmə
document.addEventListener("DOMContentLoaded", () => {
  renderBooks();
  updateCartUI();

  // Axtarış inputları
  document.getElementById("searchBtn").addEventListener("click", performSearch);
  document.getElementById("searchInput").addEventListener("keydown", e => {
    if (e.key === "Enter") performSearch();
  });
  document.getElementById("minPrice").addEventListener("input", performSearch);
  document.getElementById("maxPrice").addEventListener("input", performSearch);
  document.getElementById("genreSelect").addEventListener("change", performSearch);
  document.getElementById("languageSelect").addEventListener("change", performSearch);
  document.getElementById("confirmCartBtn")?.addEventListener("click", confirmCart);

  // Kitab seçimi üçün dropdown
  const bookSelect = document.getElementById("bookSelect");
  books.forEach(book => {
    const option = document.createElement("option");
    option.value = book.title;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  });

  const sampleReviews = [
    {
      name: "Aysel Məmmədova",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      book: "Cinayət və Cəza",
      rating: 5,
      text: "Möhtəşəm klassik! Raskolnikovun daxili mübarizəsi çox təsir edicidir."
    },
    {
      name: "Elvin Quliyev",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      book: "Yüz İlin Tənhalığı",
      rating: 4,
      text: "Qabriel Qarsia Markesin dili və təsvirləri heyranedicidir."
    }
  ];
  
  const reviewsContainer = document.getElementById("reviewsContainer");
  sampleReviews.forEach((review) => {
    const div = document.createElement("div");
    div.className = "review-card";
    
    div.innerHTML = `
      <div class="flex items-center gap-4">
        <img src="${review.image}" alt="${review.name}" class="w-14 h-14 rounded-full object-cover border shadow-md">
        <p class="font-semibold">${review.name}</p>
      </div>
      <div class="mt-4">
        <p><strong>Kitab:</strong> ${review.book}</p>
        <p><strong>Rating:</strong> ${"⭐".repeat(review.rating)}</p>
        <p><strong>Rəy:</strong> ${review.text}</p>
      </div>
    `;
    
    reviewsContainer.appendChild(div);
  });
// Ulduz reytinqi hissəsini ayrıca düzəldək
const starRating = document.getElementById("starRating");
let selectedRating = 0;

// Ulduzları dinamik yaratmaq (5 ulduz)
for (let i = 1; i <= 5; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.dataset.value = i;
  star.innerHTML = "⭐";
  starRating.appendChild(star);
}

// Ulduzlara tıklama funksiyası
starRating.addEventListener("click", (event) => {
  if (event.target.classList.contains("star")) {
    selectedRating = parseInt(event.target.dataset.value);
    const stars = starRating.querySelectorAll(".star");
    stars.forEach((star, index) => {
      star.classList.toggle("selected", index < selectedRating);
    });
  }
});

document.getElementById("submitReview").addEventListener("click", () => {
  const reviewText = document.getElementById("reviewText").value;
  const selectedBook = document.getElementById("bookSelect").value;

  // Avtomatik ad və şəkil
  const randomNames = ["Elvin Quliyev", "Nigar Məmmədova", "Kamran Həsənov", "Aytac Əliyeva", "Tamerlan Hüseynov"];
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  const randomName = randomNames[randomIndex];
  const randomImage = `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`;

  if (reviewText && selectedRating > 0 && selectedBook) {
    const review = document.createElement("div");
    review.className = "border-b pb-4 mb-4";

    review.innerHTML = `
      <div class="flex gap-4 items-start">
        <img src="${randomImage}" alt="${randomName}" class="w-14 h-14 rounded-full object-cover shadow-md border">
        <div>
          <p class="font-semibold">${randomName}</p>
          <p><strong>Kitab: </strong>${selectedBook}</p>
          <p><strong>Rating: </strong>${"⭐".repeat(selectedRating)}</p>
          <p><strong>Rəy: </strong>${reviewText}</p>
        </div>
      </div>
    `;

    document.getElementById("reviewsContainer").appendChild(review);

    // Formu sıfırla
    document.getElementById("reviewText").value = "";
    document.getElementById("bookSelect").value = "";
    selectedRating = 0;
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => star.classList.remove("selected"));
  } else {
    alert("Zəhmət olmasa, kitab, rəy və qiymətləndirmə verin.");
  }
});
})

const reviewsContainer = document.getElementById("reviewsContainer");
const starRating = document.getElementById("starRating");
let selectedRating = 0;

// Random ad və gender listi
const names = [
  { name: "Elvin Məmmədov", gender: "male" },
  { name: "Aysel Əliyeva", gender: "female" },
  { name: "Kamran Hüseynov", gender: "male" },
  { name: "Nigar Rəhimova", gender: "female" },
  { name: "Lale Quliyeva", gender: "female" },
  { name: "Murad İsmayılov", gender: "male" }
];

// Random user gətir
function getRandomUser() {
  const user = names[Math.floor(Math.random() * names.length)];
  const image = user.gender === "male"
    ? `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 90)}.jpg`
    : `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 90)}.jpg`;
  return { ...user, image };
}


const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const bookList = document.querySelector('.book-list');

leftArrow.addEventListener('click', () => {
  bookList.scrollBy({ left: -220, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  bookList.scrollBy({ left: 220, behavior: 'smooth' });
});
document.querySelector('.left-arrow').addEventListener('click', () => {
  bookList.scrollBy({ left: -220, behavior: 'smooth' });
});
document.querySelector('.right-arrow').addEventListener('click', () => {
  bookList.scrollBy({ left: 220, behavior: 'smooth' });
});
function goToPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderBooks(currentFilteredBooks);
  }
}

function goToNextPage() {
  const totalPages = Math.ceil(currentFilteredBooks.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderBooks(currentFilteredBooks);
  }
}

// Faq
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');

    // Başqa açıq olanı bağla
    document.querySelectorAll('.faq-content').forEach(faq => {
      if (faq !== content) faq.classList.add('hidden');
    });
    document.querySelectorAll('.faq-toggle svg').forEach(svg => {
      if (svg !== icon) svg.classList.remove('rotate-180');
    });

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});
