const wrapper = document.querySelector(".wrapper");
let basket = [];

class Product {
  constructor(name, price, linkImg) {
    this.name = name;
    this.price = price;
    this.linkImg = linkImg;
  }

  getCurrency() {
    const USD_BYN = 2.8;
    const BYN_RUB = 27.71;
    const USD_RUB = 80.41;

    switch (this.currentCurrency) {
      case "USD":
        if (this.changeCurrency === "BYN") return +this.price * USD_BYN;
        if (this.changeCurrency === "RUB") return +this.price * USD_RUB;
      case "BYN":
        if (this.changeCurrency === "USD") return +this.price / USD_BYN;
        if (this.changeCurrency === "RUB") return +this.price * BYN_RUB;
      case "RUB":
        if (this.changeCurrency === "USD") return +this.price / USD_RUB;
        if (this.changeCurrency === "BYN") return +this.price / BYN_RUB;
    }
  }

  renderCard() {
    const card = document.createElement("div");
    card.classList.add("product");
    this.articul = Math.ceil(Math.random() * 200 + 101);

    const imageProduct = document.createElement("img");
    imageProduct.setAttribute(`src`, `${this.linkImg}`);
    card.appendChild(imageProduct);
    imageProduct.classList.add("image-product");

    const nameProduct = document.createElement("h3");
    nameProduct.textContent = this.name;
    card.appendChild(nameProduct);

    const parentPrice = document.createElement("div");
    card.appendChild(parentPrice);
    parentPrice.classList.add("parent-price");

    const priceProduct = document.createElement("p");
    priceProduct.textContent = this.price;
    parentPrice.appendChild(priceProduct);

    const form = document.createElement("form");
    parentPrice.appendChild(form);

    const select = document.createElement("select");
    form.appendChild(select);
    
    const optionUSD = document.createElement("option");
    optionUSD.setAttribute("value", "USD");
    optionUSD.textContent = "USD";
    select.appendChild(optionUSD);

    const optionBYN = document.createElement("option");
    optionBYN.setAttribute("value", "BYN");
    optionBYN.textContent = "BYN";
    select.appendChild(optionBYN);

    const optionRUB = document.createElement("option");
    optionRUB.setAttribute("value", "RUB");
    optionRUB.textContent = "RUB";
    select.appendChild(optionRUB);

    this.currentCurrency = 'USD';
    select.addEventListener("change", () => {

      this.changeCurrency = select.value;
      this.price = this.getCurrency().toFixed(2);
      priceProduct.textContent = this.price;
      this.currentCurrency = select.value;
    });

    return card;
  }
}

class Button {
  constructor(label, onClick) {
    this.label = label;
    this.onClick = onClick;
  }

  renderButton() {
    const btn = document.createElement("button");
    btn.textContent = this.label;
    btn.addEventListener("click", () => this.onClick(this));

    btn.style.backgroundColor = "#007dd7";
    btn.style.fontSize = "1.8rem";

    return btn;
  }
}

function addProductToBasket(product){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingProduct = cart.find((item) => item.articul === product.articul);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

}

//Создание объектов продуктов
const product1 = new Product(
  "MacBook 13",
  1500,
  "https://pngimg.com/uploads/laptop/laptop_PNG5941.png"
);
const button1 = new Button("В корзину", () => {
  addProductToBasket(product1);
});

const product2 = new Product(
  "HP Pavilion",
  1000,
  "https://pngimg.com/uploads/laptop/laptop_PNG5941.png"
);
const button2 = new Button("В корзину", () => {
  addProductToBasket(product2);
});
const product3 = new Product(
  "Lenovo",
  700,
  "https://pngimg.com/uploads/laptop/laptop_PNG5941.png"
);
const button3 = new Button("В корзину", () => {
  addProductToBasket(product3);
});
const product4 = new Product(
  "Xiaomi",
  1200,
  "https://pngimg.com/uploads/laptop/laptop_PNG5941.png"
);
const button4 = new Button("В корзину", () => {
  addProductToBasket(product4);
});
// Создание карточек
const card1 = wrapper.appendChild(
  product1.renderCard()
);
card1.appendChild(button1.renderButton());
const card2 = wrapper.appendChild(
  product2.renderCard()
);
card2.appendChild(button2.renderButton());
const card3 = wrapper.appendChild(
  product3.renderCard()
);
card3.appendChild(button3.renderButton());
const card4 = wrapper.appendChild(
  product4.renderCard()
);
card4.appendChild(button4.renderButton());

//Корзина
const basketLink = new Button("Корзина", () => {
  window.location.href = "../html/basket.html";
});
const btnBasket = document.body.insertBefore(
  basketLink.renderButton(),
  wrapper
);
btnBasket.classList.add("button-basket");
