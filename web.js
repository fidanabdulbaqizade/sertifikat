// Kitab siyahısı
const books = [
  {
    title: "Qırmızı damlı malikanədə qətl",
    price: 9,
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

// Axtarış inputuna qulaq as
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCartCount();
  renderBooks(books);



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

// Bestseller progress bars
const sales = document.querySelectorAll('.sales-count');
const bars = document.querySelectorAll('.progress-bar');
sales.forEach((el, i) => {
  const val = parseInt(el.innerText);
  bars[i].style.width = `${Math.min(val, 100)}%`;
});

function trackOrder() {
  const orderId = document.getElementById("orderId").value;
  const status = document.getElementById("orderStatus");
  if (orderId === "") {
    status.innerText = "Zəhmət olmasa, sifariş nömrəsini daxil edin.";
  } else {
    status.innerText = `Sifariş #${orderId} işlənir. Tezliklə çatdırılacaq.`;
  }
}

function changeLanguage(select) {
  const lang = select.value;
  alert(`Dil dəyişdirildi: ${lang}`);
  // Burada yönləndirmə və ya lokalizasiya əlavə edə bilərsən
}

function calculatePoints() {
  const amount = parseFloat(document.getElementById("purchaseAmount").value);
  const result = document.getElementById("bonusResult");

  if (!amount || amount <= 0) {
    result.innerText = "Zəhmət olmasa, keçərli məbləğ daxil et.";
    return;
  }

  const points = Math.floor(amount); // 1 AZN = 1 xal
  result.innerText = `Təbriklər! Siz ${points} bonus xal qazandınız 🎉`;
}

function submitContactForm(event) {
  event.preventDefault();
  alert("Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.");
  // Backend bağlantısı əlavə oluna bilər (form data göndərmək üçün)
}