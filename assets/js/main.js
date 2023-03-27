//variables

const menuMobile = document.querySelector(".menu-hbg--img");
const menuNav = document.querySelector(".nav");
const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll(".faq-answer");


//functions

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

questions.forEach((question, index) => {
    question.addEventListener("click", ()=>{
        shownAnswer(index);
    })
})