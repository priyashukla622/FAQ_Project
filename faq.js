// const accordians= document.querySelectorAll(".accordian");
// accordians.forEach(accordian =>{
//     const icon = accordian.querySelector(".icon");
//     const answer=accordian.querySelector(".answer");

//     accordian.addEventListener("click",() => {
//         icon.classList.toggle("active");
//         // answer.classList.toggle("active");
//         if (icon.classList.contains("active")){
//             icon.classList.remove("active");
//             answer.style.maxHeight = null;

//         }else{
//             icon.classList.add("active");
//             answer.style.maxHeight = answer.scrollHeight +"px";

//         }

//     })
// })
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















