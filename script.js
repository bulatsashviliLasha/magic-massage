/*Swiper for reviews*/
const productContainers = document.querySelector('.customers-section-cards-box');
const left = document.querySelector('.left');
const center = document.querySelector('.center');
const right = document.querySelector('.right');

if (left) {
    left.addEventListener('click', () => {
        productContainers.scrollLeft = -200;
        left.classList.add("active-slider");
        center.classList.remove("active-slider")
        right.classList.remove("active-slider")
        console.log(productContainers.scrollLeft)
    })
}

if (center) {
    center.addEventListener('click', () => {
        productContainers.scrollLeft = 300;
        center.classList.add("active-slider");
        left.classList.remove("active-slider")
        right.classList.remove("active-slider")
        console.log(productContainers.scrollLeft)
    })
}

if (right) {
    right.addEventListener('click', () => {
        productContainers.scrollLeft = 900;
        right.classList.add("active-slider");
        left.classList.remove("active-slider")
        center.classList.remove("active-slider")
        console.log(productContainers.scrollLeft)
    })
}

/* scrollTop */

const scrollTop = document.querySelector(".scroll_top");

const btnVisibility = () => {
    if (window.scrollY > 150) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = "1"
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = "0";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/*Check answers*/

const questionAndAnswers = document.querySelectorAll(".question-and-answer");

questionAndAnswers.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})

/*Navigation*/
const whyMagicMassage = document.querySelector(".why-magic-massage");
const features = document.querySelector(".features");
const reviews = document.querySelector(".reviews");
const faqQuestions = document.querySelector(".faq-questions");
const activeLinks = [whyMagicMassage, features, reviews, faqQuestions]

function mainLink(item) {
    item.classList.add("active-link")
    for (let i = 0; i < activeLinks.length; i++) {
        if (activeLinks[i] !== item) {
            activeLinks[i].classList.remove("active-link")
        }
    }
}

activeLinks.forEach(item => {
    item.addEventListener("click", () => {
        mainLink(item)
    })
})

/*Hmmm*/
const extraQuestionBtn = document.querySelector("#extraQuestionBtn");
const extraQuestion = document.querySelector("#extraQuestion");
const lastQuestionSvg = document.querySelector(".rotate-180")

extraQuestionBtn.addEventListener("click", () => {
    extraQuestion.classList.toggle("showLastQuestion");
    extraQuestion.classList.toggle("border-none");
    lastQuestionSvg.classList.toggle("rotate-180");
})