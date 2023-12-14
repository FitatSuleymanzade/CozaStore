const productsList = document.getElementById("productsList");

function getCart () {
    productsList.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "cardBox";
        card.innerHTML = `
                  <img src="${item.image}" alt="">
                  <div class="cardTextBox">
                      <p>${item.name}</p>
                      <p>${item.price} $</p>
                  </div>
                  <button onclick="removeItem(${index})">Sil</button>
              `;
              productsList.appendChild(card);
      });
}
getCart()

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
    getProducts()
}