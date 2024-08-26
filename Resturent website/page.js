// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
}

// Function to update the cart total
function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = 'Total: $' + total.toFixed(2);
}

// Function to load cart items on the cart page
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerText = item.name + ' - $' + item.price.toFixed(2);
        cartContainer.appendChild(itemElement);
    });
    updateCartTotal();
}

// Call this function to load cart items when the cart page loads
if (document.getElementById('cart-items')) {
    loadCartItems();
}
// navbar js
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function click(){
    alert("click ho gaya");
  }

  let addtocart = 
