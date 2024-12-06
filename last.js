const iceCreamButton = document.getElementById("ice-cream");
const drinksButton = document.getElementById("drinks");
const foodButton = document.getElementById("food");

const iceCreamOptions = document.getElementById("ice-cream-options");
const drinksOptions = document.getElementById("drinks-options");
const foodOptions = document.getElementById("food-options");
const finalMessage = document.getElementById("final-message");

iceCreamButton.addEventListener("click", () => {
    iceCreamOptions.classList.remove("hidden");
    drinksOptions.classList.add("hidden");
    foodOptions.classList.add("hidden");
    showFinalMessage();
});

drinksButton.addEventListener("click", () => {
    drinksOptions.classList.remove("hidden");
    iceCreamOptions.classList.add("hidden");
    foodOptions.classList.add("hidden");
    showFinalMessage();
});

foodButton.addEventListener("click", () => {
    foodOptions.classList.remove("hidden");
    iceCreamOptions.classList.add("hidden");
    drinksOptions.classList.add("hidden");
    showFinalMessage();
});

function showFinalMessage() {
    setTimeout(() => {
        finalMessage.classList.remove("hidden");
    }, 1000); // Delay to make it more interactive
}
