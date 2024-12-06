let stage = 1;

const mainText = document.getElementById("main-text");
const nextButton = document.getElementById("next-button");
const finalContainer = document.getElementById("final-container");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

nextButton.addEventListener("click", () => {
    if (stage === 1) {
        mainText.innerText = "Closer";
    } else if (stage === 2) {
        mainText.innerText = "Get closer, don't be shy";
    } else if (stage === 3) {
        document.getElementById("text-container").classList.add("hidden");
        finalContainer.classList.remove("hidden");
    }
    stage++;
});

noButton.addEventListener("click", () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    window.location.href = ""; // Replace with your desired URL
});
