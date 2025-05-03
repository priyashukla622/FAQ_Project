const accordians = document.querySelectorAll(".accordian");
accordians.forEach(accordian => {
    accordian.addEventListener("click", (event) => {
        const icon = accordian.querySelector(".icon");
        const answer = accordian.querySelector(".answer");

        icon.classList.toggle("active");

        if (icon.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px"; 
        } else {
            answer.style.maxHeight = null;
        }
    });
});











