const order_btn = document.querySelectorAll(".order-btn");
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
    inputElement.addEventListener("input", updatePrice);
});
