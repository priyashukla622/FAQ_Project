
const accordians = document.querySelectorAll(".accordian");
accordians.forEach(accordian => {
document.body.addEventListener("click", (event) => {
    const accordion = event.target.closest(".accordian");
    if (accordion) {
        const icon = accordion.querySelector(".icon");
        const answer = accordion.querySelector(".answer");

        icon.classList.toggle("active");

        if (icon.classList.contains("active")) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    }
});


});















