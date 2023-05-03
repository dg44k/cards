let cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length) {
  cart.forEach((element) => {
    const { linkImg, name, price, articul } = element;
    const newCard = document.createElement("div");
    newCard.classList.add("card-in-cart");
    newCard.articul = articul;
    newCard.innerHTML = `<img src = ${linkImg} class = "img-cart"><h3>${name}</h3><p>${price}</p><button class = 'btn-remove'>Delete</button>`;
    wrapper.appendChild(newCard);
  });
}

wrapper.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const card = event.target.closest("div");
  const articul = card.articul;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].articul == articul) {
      cart.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      card.remove();
      break;
    }
  }
});

