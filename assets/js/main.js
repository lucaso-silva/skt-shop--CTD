//variables

const menuMobile = document.querySelector(".menu-hbg--img");
const menuNav = document.querySelector(".nav");
const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll(".faq-answer");
const buyBtns = document.querySelectorAll(".btn-buy");
const testimonialsBtns = document.querySelectorAll(".nav-bar");
const allTestimonials = document.querySelectorAll(".testimonial");
let numItens = 0


//functions

function addItemToCart(numItens) {
    const counterDisplay = document.querySelector(".counter");

    counterDisplay.classList.remove("hide");
    counterDisplay.textContent = numItens;
}

function showTestimonial(index) {
    const testimonialActive = allTestimonials[index]
    const arrayTestimonials = Array.from(allTestimonials)
    
    const divTestimonialShow = arrayTestimonials.splice(index, 1)
    

    testimonialActive.classList.remove("hide");
    arrayTestimonials.forEach(arrayTestimonial => arrayTestimonial.classList.add("hide"))

    console.log(testimonialActive);
    console.log(arrayTestimonials);
    console.log(divTestimonialShow);

}

function shownAnswer(index) {
    const answerSelected = answers[index];
    const questionSelected = questions[index];
    const arrayAnswers = Array.from(answers);
    const arrayQuestions = Array.from(questions);

    const removeAnswerSelected = arrayAnswers.splice(index, 1);
    const removeQuestionSelected = arrayQuestions.splice(index, 1);

    answerSelected.classList.toggle("hide");
    questionSelected.classList.toggle("selected");

    arrayAnswers.forEach(answer => answer.classList.add("hide"))
    arrayQuestions.forEach(question => question.classList.remove("selected"))
}


//events

menuMobile.addEventListener("click", ()=>{
    menuNav.classList.toggle("nav-mobile");
})

buyBtns.forEach(btn =>{
    btn.addEventListener("click", ()=> {
        numItens++
        addItemToCart(numItens);
    })
})

questions.forEach((question, index) => {
    question.addEventListener("click", ()=>{
        shownAnswer(index);
    })
})

testimonialsBtns.forEach((testimonialBtn, index) => {
    testimonialBtn.addEventListener("click", ()=> {
        showTestimonial(index)
    })
})

