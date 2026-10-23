const array = [
  {
    id: 1,
    title: "BESTSELLER",
    Image: "./png/shakek1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 2,
    title: "BESTSELLER",
    Image: "./png/shakek1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 3,
    title: "BESTSELLER",
    Image: "./png/shakek1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 4,
    title: "BESTSELLER",
    Image: "./png/shakek1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
];

const products = document.querySelector(".products");

if (products) {
  products.innerHTML = array
    .map(
      (item) => `
        <div class="cart">
          <img src="${item.Image}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <h4>${item.prise}$</h4>
          <button type="button" onclick="addcart(${item.id})">
            Discover now
          </button>
        </div>
      `
    )
    .join("");
}

// ==========================================
// GOLD PRODUCTS
// ==========================================

const num = [
  {
    id: 1,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 2,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 3,
    title: "123gold",
    Image: "./png/gool.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 4,
    title: "123gold",
    Image: "./png/gool.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 5,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 6,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 7,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 8,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 9,
    title: "123gold",
    Image: "./png/gool.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
  {
    id: 10,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si € 365,-",
  },
];

const gold = document.querySelector(".gold");

if (gold) {
  gold.innerHTML = num
    .map(
      (data) => `
        <div class="cart">
          <img src="${data.Image}" alt="${data.title}" />
          <h3>${data.title.toUpperCase()}</h3>
          <p>${data.desc}</p>
        </div>
      `
    )
    .join("");
}

// ==========================================
// SHOPPING CART ELEMENTS
// ==========================================

const openbtn = document.getElementById("open");
const modal = document.querySelector(".modal");
const closeCart = document.getElementById("close");
const count = document.querySelector(".count");
const modalmain = document.querySelector(".modal-main");

// ==========================================
// CART DATA (saved in localStorage)
// ==========================================

// Жаңы ачкыч: эски форматтагы маалымат менен чаташпашы үчүн.
const STORAGE_KEY = "shopCart";

// Сактагычтан корзинаны окуу. Ката болсо, бош массив кайтарат.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

// Корзинаны сактагычка жазуу.
function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
}

// Корзина: массив. Бет ачылганда сактагычтан толтурулат.
let basket = loadCart();

// Ар бир товардын уникалдуу номери (cartId). Эң чоңунан кийинки номерден башталат.
let nextCartId =
  basket.reduce((max, item) => Math.max(max, item.cartId || 0), 0) + 1;

// ==========================================
// OPEN CART
// ==========================================

if (openbtn && modal) {
  openbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    modal.style.display = "block";
  });
}

// ==========================================
// CLOSE CART BUTTON
// ==========================================

if (closeCart && modal) {
  closeCart.addEventListener("click", function (event) {
    event.stopPropagation();
    modal.style.display = "none";
  });
}

// ==========================================
// KEEP CLICKS INSIDE THE MODAL
// ==========================================

if (modal) {
  modal.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

// ==========================================
// CLOSE CART WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function (event) {
  if (!modal || !openbtn) return;

  if (
    modal.style.display === "block" &&
    !modal.contains(event.target) &&
    !openbtn.contains(event.target)
  ) {
    modal.style.display = "none";
  }
});

// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addcart(id) {
  const product = array.find((item) => item.id === id);

  if (!product) return;

  basket.push({
    ...product,
    cartId: nextCartId++,
  });

  saveCart();
  counter();
  showcart();
}

// ==========================================
// UPDATE CART COUNTER
// ==========================================

function counter() {
  if (count) {
    count.textContent = basket.length;
  }
}

// ==========================================
// DISPLAY CART PRODUCTS
// ==========================================

function showcart() {
  if (!modalmain) return;

  if (basket.length === 0) {
    modalmain.innerHTML = "<p>Корзина пуста</p>";
    return;
  }

  modalmain.innerHTML = basket
    .map(
      (item) => `
        <div class="mcart">
          <img src="${item.Image}" alt="${item.title}" />

          <div>
            <span>${item.title}</span>
            <p>${item.prise}$</p>

            <button
              type="button"
              data-cart-id="${item.cartId}"
            >
              Remove
            </button>
          </div>
        </div>
      `
    )
    .join("");
}

// ==========================================
// REMOVE ONE PRODUCT
// ==========================================

if (modalmain) {
  modalmain.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-cart-id]");

    if (!button) return;

    const cartId = Number(button.dataset.cartId);

    basket = basket.filter((item) => item.cartId !== cartId);

    saveCart();
    counter();
    showcart();

    // Keep the cart modal open after removing a product.
    if (modal) {
      modal.style.display = "block";
    }
  });
}

// ==========================================
// INITIAL CART STATE
// ==========================================

// Бет ачылганда сакталган корзинаны экранга чыгарабыз.
counter();
showcart();