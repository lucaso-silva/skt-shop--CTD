const menuMobile = document.querySelector(".menu-hbg--img");
const menuNav = document.querySelector(".nav");
const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll(".faq-answer");


//functions
function shownAnswer(index) {
    const answerSelected = answers[index];
    const questionSelected = questions[index];

    answerSelected.classList.toggle("hide");
    questionSelected.classList.toggle("selected");
}


//events

menuMobile.addEventListener("click", ()=>{
    menuNav.classList.toggle("nav-mobile");
})

questions.forEach((question, index) => {
    question.addEventListener("click", ()=>{
        shownAnswer(index);
    })
})