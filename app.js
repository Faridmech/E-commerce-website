
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


// open cart
cartIcon.addEventListener("click", () =>{
    cart.classList.add("active")
})

// close cart
closeCart.addEventListener("click", () =>{
    cart.classList.remove("active")
})


// Cart working
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready();
}

function ready(){
    var removeCartButtons = document.querySelectorAll(".cart-remove")
    console.log(removeCartButtons)
       for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem)
    }

    // Quantity change 
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    //Add to cart
    var addCart = document.querySelectorAll(".add-cart")
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

}

// Add Cart
function addCartClicked(e){
    var button = e.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src
    addProductToCart(title, price, productImg);
    updateTotal();
}

function removeCartItem(e){
    var buttonClicked = e.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}


function quantityChanged(e){
    var input = e.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div")
    cartShopBox.classList.add("cart-box")
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

    for (var i = 0; i < cartItemsNames.length; i++){
        alert("You have already add this Item")
        return
    }
    
}

var cartBoxContent = `
                       <img src="Image/bag.jpg" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">Back pack</div>
                            <div class="cart-price">$50.21</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class='bx bx-trash cart-remove'></i>`

cartShopBox.innerHTMl = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);


function updateTotal() {
    //var cartContent = document.getElementsByClassName(".cart-content")[0];
    var cartBoxes = document.querySelectorAll(".cart-box");
    
    var total =0;
    for(var i =0; i< cartBoxes.length; i++){
        var cartbox = cartBoxes[i];
        var priceElement = cartbox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        total = Math.round(total * 100) / 100
        document.getElementsByClassName("total-price")[0].innerText = "$" +total

    }
}

