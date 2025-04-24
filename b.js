// Tovsiyye
const form = document.getElementById("quizForm");
const result = document.getElementById("result");
const modal = document.getElementById("bookModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

const recommendations = {
  motivasiya: {
    title: "📘 Sən Öz Taleyini Dəyişə Bilərsən",
    desc: "Uğur və motivasiya axtaranlar üçün ideal seçim.",
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80"
  },
  dinc: {
    title: "📗 Sakitlik Sənəti",
    desc: "Rahat bir gün üçün sakit, dərin kitab.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  mace: {
    title: "📙 Əfsanənin İzində",
    desc: "Macəra və kəşf dolu bir roman.",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80"
  },
  romantik: {
    title: "📕 Sevgi Hekayəsi",
    desc: "Duyğularla dolu romantik səyahət.",
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80"
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const mood = form.mood.value;

  if (recommendations[mood]) {
    const rec = recommendations[mood];
    result.innerHTML = `
      <div class="max-w-xl mx-auto bg-blue-50 rounded-2xl shadow-lg p-6 mt-6 transition-all duration-500 ease-in-out transform hover:scale-105">
        <img src="${rec.img}" alt="${rec.title}" class="w-full h-64 object-cover rounded-xl mb-4">
        <h3 class="text-2xl font-bold text-blue-800 mb-2">${rec.title}</h3>
        <p class="text-gray-700 text-lg mb-4">${rec.desc}</p>
        <div class="flex justify-center gap-4 flex-wrap">
          <button onclick="openModal('${rec.img}', \`${rec.title}\`, \`${rec.desc}\`)" 
                  class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-xl">
            Ətraflı bax
          </button>
          <button onclick="addToCart('${rec.title}')" 
                  class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
            Səbətə əlavə et
          </button>
        </div>
      </div>
    `;
    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth" });
  } else {
    result.innerHTML = `<p class="text-red-600">Zəhmət olmasa seçim et 🙏</p>`;
    result.classList.remove("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("bookModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Modal aç
  window.openModal = function (img, title, desc) {
    document.getElementById("modalImage").src = img;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;
    modal.classList.remove("hidden");
  }

  // Modal bağla
  function closeModal() {
    modal.classList.add("hidden");
  }

  // X düyməsi ilə bağla
  closeModalBtn.addEventListener("click", closeModal);

  // Arxa fon kliklənəndə bağla
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Səbətə əlavə
  window.addToCart = function (bookName) {
    alert(`📚 "${bookName}" səbətə əlavə edildi!`);
  }
});
















// Kitab siyahısı
const books = [
  {
    title: "Qırmızı damlı malikanədə qətl",
    price: 9,
    author: "Qurban Səid",
    genre: "azerbaycan",
    image: "https://static.insales-cdn.com/images/products/1/5383/954561799/IMG_6696.jpeg",
    rating: 5,
    category: "azerbaycan",
    description: "Göygöl rayonunun mərkəzində yerləşən estetikliyi ilə hər kəsi məftun edən böyük və əzəmətli malikanəyə camaat “Qırmızı damlı malikanə” deyirdi. Malikanə qədər onun sakinləri də daim maraq dairəsində olur, həyat tərzləri insanların dilindən düşmürdü."
  },


  {
    title: "Məktubdakı qadın",
    price: 12,
    author: "Qurban Səid",
    genre: "azerbaycan",
    image: "https://bakubookcenter.az/ru/get-product-image?fileId=89628",
    category: "azerbaycan",
    description: "Toy ərəfəsində olan gənc Nərminlə nişanlısı Fərhadın qəfil ayrılığı silsilə qətllərlə müşayiət olunur. Əvvəlcə Fərhadın özünün qəzaya düşərək ölməsi xəbəri yayılır..."
  },


  {
    title: "Məktubunuz var",
    price: 10,
    image: "https://static.insales-cdn.com/r/XrUOMgbQdt0/rs:fit:1140:1140:1/q:80/plain/images/products/1/5315/889181379/get-product-image.@webp",
    category: "azerbaycan",
    description: "On yaşlı Alenanın yaşından böyük macəraları ilə yaxından tanış olun. Bu kitabda dostluq, ailə dəyərləri, valideyn sevgisi, xeyirxahlıq və bol məktub var… Yaş həddi olmayan kitab."
  },


  {
    title: "Möcüzə evi",
    price: 5,
    image: "https://1001kitab.az/product-images/6718ceccd473b.png",
    category: "azerbaycan",
    description: "14 yaşlı Jasmin zəngin xəyal dünyasının sayəsində möcüzəli bir hadisə ilə qarşılaşır..."
  },
  {
    title: "4 Günlük səyahət",
    price: 7,
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLUWC3I1_trm9jlbRqqkkDPjHHZxHDsBk0AdYFZL911LRvh306",
    category: "azerbaycan",
    description: "Pandemiya səbəbindən Hindistanda uzun müddət qalan gənc qızın macəraları..."
  },
  {
    title: "Nildə ölüm",
    price: 11,
    image: "https://m.media-amazon.com/images/I/819Q--0puzL._AC_UY654_QL65_.jpg",
    category: "turk",
    description: "Agatha Christie'nin məşhur əsəri – Hercule Poirot'un Nildə sirli qətli araşdırması."
  },
  {
    title: "Fillerde hatırlar",
    price: 10,
    image: "https://cdn.dsmcdn.com/ty1447/product/media/images/prod/QC/20240728/21/cf4a427f-f5c0-3892-b2b6-7b116e51f3bf/1_org_zoom.jpg",
    category: "turk",
    description: "Fillerin yaddaş və beyin gücünə işarə edən maraqlı əsər."
  },
  {
    title: "Doğu ekspresinde cinayet",
    price: 11,
    image: "https://i.pinimg.com/originals/05/7d/88/057d8828bf7b6833f447619edb995771.jpg",
    category: "turk",
    description: "Agatha Christie'nin qətl dolu, klassik əsəri."
  },
  {
    title: "Noel'de cinayet",
    price: 10,
    image: "https://www.altinkitaplar.com.tr/static/img/2022/06/noel'de_cinayet-m.jpg",
    category: "turk",
    description: "Stephen'in istasyonda başlayan cinayət sirri."
  },
  {
    title: "The Little Prince",
    price: 8,
    image: "https://images.thalia.media/07/-/993d4f27281741159b0c91b5d5986604/the-little-prince-epub-antoine-de-saint-exupery.jpeg",
    category: "xarici",
    description: "A timeless story of love, loss, and imagination from another planet."
  }
];




function renderBookCard(book) {
  const container = document.getElementById("book-card");
  container.innerHTML = `
  `;
}

function decreaseQty() {
  const qtyElem = document.getElementById("qty");
  let qty = parseInt(qtyElem.innerText);
  if (qty > 1) qtyElem.innerText = qty - 1;
}

function increaseQty() {
  const qtyElem = document.getElementById("qty");
  let qty = parseInt(qtyElem.innerText);
  qtyElem.innerText = qty + 1;
}

function addToCart(title, price) {
  const qty = parseInt(document.getElementById("qty").innerText);
  alert(`${title} kitabından ${qty} ədəd səbətə əlavə olundu. Cəmi qiymət: ${(qty * price).toFixed(2)} ₼`);
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.add("inline-block", "hover:text-blue-600", "hover:bg-gray-200", "rounded-lg", "px-3", "py-1", "transition-all", "duration-300", "ease-in-out");

    if (link.getAttribute("href") === currentPath) {
      link.classList.add(
        "text-blue-600",
        "font-semibold",
        "bg-gray-100"
      );
    }
  });
});



// // Yüklənəndə göstər
// document.addEventListener("DOMContentLoaded", () => {
//   renderBookCard(books[0]);
// });




// Kateqoriyaya görə filtr
function filterBooks(genre, element) {
  const filtered = books.filter(book => book.genre === category);
  renderBooks(filtered);
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('bg-blue-100', 'font-semibold', 'text-blue-700');
  });
  element.classList.add('bg-blue-100', 'font-semibold', 'text-blue-700');
}
// Səbət funksiyaları
function addToCart(title, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ title, quantity: 1, price });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  document.getElementById('basket-panel').classList.remove('hidden');
  loadCart();
}

// Axtarış inputuna qulaq as
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCartCount();
  renderBooks(books);


let cart = [];

function renderBooks(list) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  list.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "bg-white border rounded-lg p-4 shadow";

    bookCard.innerHTML = `
      <img src="${book.image}" class="w-full h-64 object-cover rounded mb-4 cursor-pointer" onclick="showModal(${index})">
      <h3 class="text-lg font-bold">${book.title}</h3>
      <p class="text-sm text-gray-600">${book.author}</p>
      <p class="text-sm text-gray-600 mb-2">Qiymət: ${book.price} ₼</p>
      <button onclick="addToCart(${index})" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Səbətə at</button>
    `;

    bookList.appendChild(bookCard);
  });
}

function filterBooks(genre) {
  const filtered = books.filter(book => book.genre === genre);
  renderBooks(filtered);
}

function searchBooks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const result = books.filter(book => book.title.toLowerCase().includes(query));
  renderBooks(result);
}

function toggleModal() {
  document.getElementById("signin-modal").classList.toggle("hidden");
}

function showModal(index) {
  const book = books[index];
  document.getElementById("modal-img").src = book.image;
  document.getElementById("modal-title").textContent = book.title;
  document.getElementById("modal-desc").textContent = book.description;
  document.getElementById("image-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("image-modal").classList.add("hidden");
}

function toggleCart() {
  document.getElementById("basket-panel").classList.toggle("hidden");
}

function addToCart(index) {
  cart.push(books[index]);
  updateCart();
}

function updateCart() {
  const itemsDiv = document.getElementById("basket-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  itemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, idx) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "flex justify-between items-center";
    div.innerHTML = `
      <span>${item.title}</span>
      <button onclick="removeFromCart(${idx})" class="text-red-500">✖</button>
    `;
    itemsDiv.appendChild(div);
  });

  totalPrice.textContent = `${total} ₼`;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Səbət boşdur.");
    return;
  }
  alert("Sifarişiniz qəbul edildi!");
  cart = [];
  updateCart();
  toggleCart();
}














  
  const searchInput = document.querySelector("input[type='text']");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchBooks(e.target.value);
    });
  }
});
// Axtarış
function searchBooks(term) {
  const results = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()));
  renderBooks(results);
}
function changeQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  loadCart();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  loadCart();
}

function loadCart() {
  const basket = document.getElementById('basket-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  if (cart.length > 0) {
    basket.innerHTML = cart.map((item, index) => {
      total += item.price * item.quantity;
      return `
        <div class="flex justify-between items-center border-b pb-2">
          <div>
            <div class="font-semibold">${item.title}</div>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="changeQuantity(${index}, -1)" class="bg-gray-200 px-2 rounded">−</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${index}, 1)" class="bg-gray-200 px-2 rounded">+</button>
            </div>
          </div>
          <div class="text-right">
            <div>${item.price * item.quantity} ₼</div>
            <button onclick="removeFromCart(${index})" class="text-red-500 text-sm">🗑️</button>
          </div>
        </div>
      `;
    }).join('');
  } else {
    basket.innerHTML = '<p class="text-gray-500">Səbət boşdur.</p>';
  }
  document.getElementById('total-price').innerText = total + ' ₼';
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').innerText = count;
}

function checkout() {
  alert("Sifarişiniz qeydə alındı! 🎉");
  localStorage.removeItem('cart');
  updateCartCount();
  loadCart();
}

function toggleModal() {
  document.getElementById('signin-modal').classList.toggle('hidden');
}

function showImageModal(src, title, description) {
  document.getElementById('modal-img').src = src;
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-desc').innerText = description;
  document.getElementById('image-modal').classList.remove('hidden');
}


function closeModal() {
  document.getElementById('image-modal').classList.add('hidden');
}

document.getElementById('image-modal').addEventListener('click', function () {
  this.classList.add('hidden');
});

new Swiper(".bookSwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

