const switcherBtn = document.querySelector(".switcher-btn");
const round = document.querySelector(".round");
const basicPrice = document.querySelector(".basic-wrapper .price span");
const professionalPrice = document.querySelector(".professional-wrapper .price span");
const masterPrice = document.querySelector(".master-wrapper .price span");

switcherBtn.addEventListener("click", ()=> {
    round.classList.toggle("monthly-active");
    if(round.classList.contains("monthly-active")) {
        basicPrice.textContent = 19.99;
        professionalPrice.textContent = 24.99;
        masterPrice.textContent = 39.99;
    } else {
        basicPrice.textContent = 199.99;
        professionalPrice.textContent = 249.99;
        masterPrice.textContent = 399.99;
    }
});