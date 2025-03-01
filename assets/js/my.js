const order_btn = document.querySelectorAll(".order-btn");
const order_btn_ = document.querySelectorAll(".order-btn_");
const order_btn_side = document.querySelectorAll(".order-btn_side");
let foodName;
let foodPrice;

order_btn.forEach(button => {
    button.addEventListener("click", () => {

        //parent class
        const foodMenuItem = button.closest(".food-menu__item");

        foodName = foodMenuItem.querySelector(".title").getAttribute("data-name");
        foodPrice = foodMenuItem.querySelector(".price").getAttribute("data-price");

        localStorage.setItem("foodName", foodName);
        localStorage.setItem("foodPrice", foodPrice);
    
        // Redirect to another page
        window.location.href = 'shop-details.html';

    })
})


document.addEventListener("DOMContentLoaded", () => {
    const foodName = localStorage.getItem("foodName");
    const foodPrice = parseFloat(localStorage.getItem("foodPrice")); // Convert to number
  
    const itemDetail = document.querySelector(".shop-details__info");

    const foodTitle = itemDetail.querySelector(".title");
    const foodPrice_ = itemDetail.querySelector(".price");

    let inputElement = document.querySelector(".qty"); // Correct selector for the quantity input

    // Function to update price dynamically
    function updatePrice() {
        let quantity = parseFloat(inputElement.value) || 1; // Ensure it's an integer, default to 1
        foodPrice_.innerText = `₵${(foodPrice * quantity).toFixed(2)}`;
    }

    // Set initial values
    foodTitle.innerText = `${foodName}`;
    updatePrice();

    // Listen for quantity input changes
    inputElement.addEventListener("change", updatePrice);    
});

document.addEventListener("DOMContentLoaded", () => {
    let quantityInput = document.querySelector(".input-text.qty"); // The input field
    let plusButton = document.querySelector(".plus"); // Plus button
    let minusButton = document.querySelector(".minus"); // Minus button

    // Function to update the total price
    function updatePrice() {
        let foodPrice = parseFloat(localStorage.getItem("foodPrice")) || 0;
        let quantity = parseInt(quantityInput.value) || 1;
        let totalPrice = (foodPrice * quantity).toFixed(2);

        document.querySelector(".price").innerText = `₵${totalPrice}`;
    }

    // Increase quantity when clicking "+"
    plusButton.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput.value) || 1;
        let maxQuantity = parseInt(quantityInput.getAttribute("max")) || 100;

        if (currentQuantity < maxQuantity) {
            quantityInput.value = currentQuantity + 1;
            updatePrice();
        }
    });

    // Decrease quantity when clicking "-"
    minusButton.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput.value) || 1;
        let minQuantity = parseInt(quantityInput.getAttribute("min")) || 1;

        if (currentQuantity > minQuantity) {
            quantityInput.value = currentQuantity - 1;
            updatePrice();
        }
    });

    // Update price when input value changes
    quantityInput.addEventListener("input", updatePrice);
});

order_btn_.forEach(button => {
    button.addEventListener("click", () => {

        //parent class
        const foodMenuItem = button.closest(".reservation-2__item");

        foodName = foodMenuItem.querySelector(".title").getAttribute("data-name");
        foodPrice = foodMenuItem.querySelector(".price").getAttribute("data-price");

        localStorage.setItem("foodName", foodName);
        localStorage.setItem("foodPrice", foodPrice);
    
        // Redirect to another page
        window.location.href = 'shop-details.html';
        

    })
})

order_btn_side.forEach(button => {
    button.addEventListener("click", () => {

        //parent class
        const foodMenuItem = button.closest(".side_list");

        foodName = foodMenuItem.querySelector(".title").getAttribute("data-name");
        foodPrice = foodMenuItem.querySelector(".price").getAttribute("data-price");

        localStorage.setItem("foodName", foodName);
        localStorage.setItem("foodPrice", foodPrice);
    
        // Redirect to another page
        window.location.href = 'shop-details.html';

        
        

    })
})


if (window.location.pathname.includes("shop-details.html")) {
        // Retrieve from localStorage
        const foodName = localStorage.getItem("foodName");
        const foodPrice = document.querySelector(".price")
        const order_button = document.querySelector(".rr-btn-solid");
        const foodQuantity = document.querySelector(".input-text");

        document.querySelector(".img-fluid").setAttribute("src", `./assets/imgs/shop-details/${foodName}.jpg`);

        

        order_button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

          
            // Construct the WhatsApp message with the image URL as a clickable link
            const message = `Hello, I would like to make the following order:\n\nFood Name: ${foodName}\nQuantity: ${foodQuantity.value}\nPrice: ₵${foodPrice.innerText}\nImage: https://raw.githubusercontent.com/yello-lab/lawgeescloset/refs/heads/main/`;

            // Encode the message for the URL
            const encodedMessage = encodeURIComponent(message);

            // Open WhatsApp with the pre-filled message
            const whatsappUrl = `https://wa.me/+233549031201?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
        })
    }


