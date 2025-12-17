let cart = [
  { name: "Product 1", price: 300 },
  { name: "Product 2", price: 450 }
];

function renderCart() {
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ${item.price} EGP</span>
        <button onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

renderCart();
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
}