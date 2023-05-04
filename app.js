
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

    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
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

