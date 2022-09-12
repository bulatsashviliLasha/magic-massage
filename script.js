/*Swiper for reviews*/
const productContainers = document.querySelector('.customers-section-cards-box'),
    left = document.querySelector('.left'),
    center = document.querySelector('.center'),
    right = document.querySelector('.right');

const groupBtn = [left, center, right];

function swiperBtnActive(item) {
    item.classList.add("active-slider")
    for (let i = 0; i < groupBtn.length; i++) {
        if (groupBtn[i] !== item) {
            groupBtn[i].classList.remove("active-slider")
        }
    }
}

if (left) {
    left.addEventListener('click', () => {
        productContainers.scrollLeft = -200;
        swiperBtnActive(left);
    })
}

if (center) {
    center.addEventListener('click', () => {
        productContainers.scrollLeft = 300;
        swiperBtnActive(center);
    })
}

if (right) {
    right.addEventListener('click', () => {
        productContainers.scrollLeft = 900;
        swiperBtnActive(right);
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
});

/*Change nav link active state*/

const whyMagicMassageClass = document.querySelector(".why-magic-massage"),
    featuresClass = document.querySelector(".features"),
    reviewsClass = document.querySelector(".reviews"),
    faqQuestionsClass = document.querySelector(".faq-questions"),
    activeLinksClass = [whyMagicMassageClass, featuresClass, reviewsClass, faqQuestionsClass];



const whyMagicMassageId = document.querySelector("#why-magic-massage"),
    featuresId = document.querySelector("#features"),
    reviewsId = document.querySelector("#reviews"),
    faqQuestionsId = document.querySelector("#faq-questions"),
    activeLinksId = [whyMagicMassageId, featuresId, reviewsId, faqQuestionsId];



window.onscroll = () => {
    let current = "";

    setTimeout(() => {
        activeLinksId.forEach((item) => {
            const sectionTop = item.offsetTop;
            if (pageYOffset >= sectionTop - 160) {
                current = item.getAttribute("id"); }
        });

        activeLinksClass.forEach((item) => {
            item.classList.remove("active-link");
            if (item.classList.contains(current)) {
                item.classList.add("active-link");
            }
        });
    }, 500)
};

/*Extra questions*/
const extraQuestionBtn = document.querySelector("#extraQuestionBtn"),
    extraQuestion = document.querySelector("#extraQuestion"),
    lastQuestionSvg = document.querySelector(".rotate-180");

extraQuestionBtn.addEventListener("click", () => {
    extraQuestion.classList.toggle("showLastQuestion");
    extraQuestion.classList.toggle("border-none");
    lastQuestionSvg.classList.toggle("rotate-180");
});
