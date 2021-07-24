
const crange = document.querySelector(".crange--input");
const moneyL = document.querySelector(".crange--money");

crange.addEventListener("input", (e) => {
    // Printing Range Value
    let donation = e.target.value;
    moneyL.classList.add("animate");
    donation == 0
        ? (moneyL.innerHTML = `Fiyat. 0`)
        : (moneyL.innerHTML = `Fiyat: ` + `${e.target.value}`);

    // Removing Animation
    const removeAnim = () => {
        moneyL.classList.remove("animate");
    };
    moneyL.addEventListener("webkitAnimationEnd", removeAnim);
    moneyL.addEventListener("animationend", removeAnim);

    // Range-Bar BGColor Fill
    const percent =
        (100 * (e.target.value - e.target.min)) / (e.target.max - e.target.min);
    const fill = `#36f ${percent}%, #e7e8ec ${percent + 0.1}%`;
    e.target.style.background = `linear-gradient(90deg, ${fill})`;
});