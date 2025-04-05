// Kitab siyahısı
const books = [
  {
    title: "Qırmızı damlı malikanədə qətl",
    price: 12,
    image: "https://static.insales-cdn.com/images/products/1/5383/954561799/IMG_6696.jpeg",
    category: "azerbaycan",
    description: "Göygöl rayonunun mərkəzində yerləşən estetikliyi ilə hər kəsi məftun edən böyük və əzəmətli malikanəyə camaat “Qırmızı damlı malikanə” deyirdi. Malikanə qədər onun sakinləri də daim maraq dairəsində olur, həyat tərzləri insanların dilindən düşmürdü."
  },
  {
    title: "Məktubdakı qadın",
    price: 12,
    image: "https://bakubookcenter.az/ru/get-product-image?fileId=89628",
    category: "azerbaycan",
    description: "Toy ərəfəsində olan gənc Nərminlə nişanlısı Fərhadın qəfil ayrılığı silsilə qətllərlə müşayiət olunur. Əvvəlcə Fərhadın özünün qəzaya düşərək ölməsi xəbəri yayılır..."
  },
  {
    title: "Möcüzə evi",
    price: 12,
    image: "https://1001kitab.az/product-images/6718ceccd473b.png",
    category: "azerbaycan",
    description: "14 yaşlı Jasmin zəngin xəyal dünyasının sayəsində möcüzəli bir hadisə ilə qarşılaşır..."
  },
  {
    title: "4 Günlük səyahət",
    price: 12,
    image: "https://novella.az/wp-content/uploads/2024/06/WhatsApp-S%C9%99kil-2024-06-13-saat-13.42.12_0a7386cc.jpg",
    category: "azerbaycan",
    description: "Pandemiya səbəbindən Hindistanda uzun müddət qalan gənc qızın macəraları..."
  },
  {
    title: "Nildə ölüm",
    price: 12,
    image: "https://m.media-amazon.com/images/I/819Q--0puzL._AC_UY654_QL65_.jpg",
    category: "turk",
    description: "Agatha Christie'nin məşhur əsəri – Hercule Poirot'un Nildə sirli qətli araşdırması."
  },
  {
    title: "Fillerde hatırlar",
    price: 12,
    image: "https://cdn.dsmcdn.com/ty1447/product/media/images/prod/QC/20240728/21/cf4a427f-f5c0-3892-b2b6-7b116e51f3bf/1_org_zoom.jpg",
    category: "turk",
    description: "Fillerin yaddaş və beyin gücünə işarə edən maraqlı əsər."
  },
  {
    title: "Doğu ekspresinde cinayet",
    price: 12,
    image: "https://i.pinimg.com/originals/05/7d/88/057d8828bf7b6833f447619edb995771.jpg",
    category: "turk",
    description: "Agatha Christie'nin qətl dolu, klassik əsəri."
  },
  {
    title: "Noel'de cinayet",
    price: 12,
    image: "https://www.altinkitaplar.com.tr/static/img/2022/06/noel'de_cinayet-m.jpg",
    category: "turk",
    description: "Stephen'in istasyonda başlayan cinayət sirri."
  },
  {
    title: "The Little Prince",
    price: 12,
    image: "https://images.thalia.media/07/-/993d4f27281741159b0c91b5d5986604/the-little-prince-epub-antoine-de-saint-exupery.jpeg",
    category: "xarici",
    description: "A timeless story of love, loss, and imagination from another planet."
  }
];

// Kitabların ekrana verilməsi
function renderBooks(bookList) {
  const container = document.getElementById("book-list");
  container.innerHTML = "";
  bookList.forEach(book => {
    const card = document.createElement("div");
    card.className = "border p-4 rounded shadow bg-white max-w-xs text-center";
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="w-40 h-60 object-cover mx-auto mb-3 rounded cursor-pointer hover:scale-105 transition" onclick="showImageModal('${book.image}', '${book.title}', \`${book.description || ''}\`)"/>
      <h3 class="text-lg font-semibold">${book.title}</h3>
      <p class="text-gray-600 my-1">${book.price} ₼</p>
      <button onclick="addToCart('${book.title}', ${book.price})" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Səbətə əlavə et</button>
    `;
    container.appendChild(card);
  });
}

// Kateqoriyaya görə filtr
function filterBooks(category, element) {
  const filtered = books.filter(book => book.category === category);
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

window.onload = function () {
  renderBooks(books);
  loadCart();
  updateCartCount();
};

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

// Bestseller progress bars
const sales = document.querySelectorAll('.sales-count');
const bars = document.querySelectorAll('.progress-bar');
sales.forEach((el, i) => {
  const val = parseInt(el.innerText);
  bars[i].style.width = `${Math.min(val, 100)}%`;
});
