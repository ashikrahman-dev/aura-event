//Invention slider
document.addEventListener("DOMContentLoaded", function () {
    const eventSlider = document.querySelectorAll("#eventSlider");

    eventSlider.forEach(function (element) {
        const splide = new Splide(element, {
            perPage: 3,
            perMove: 1,
            gap: "30px",
            pagination: false,
            arrows: false,
            padding: "190px",
            trimSpace: false,
            focus: 0.38,
        });

        document
            .querySelector(".splide_next")
            .addEventListener("click", (e) => {
                splide.go("+1");
            });

        document
            .querySelector(".splide_prev")
            .addEventListener("click", (e) => {
                splide.go("-1");
            });

        const bar = splide.root.querySelector(".event-slider-progress-bar");
        splide.on("mounted move", function () {
            const count =
                window.innerWidth > 1200 ? 3 : window.innerWidth > 767 ? 2 : 1;
            const end = splide.Components.Controller.getEnd() + count;
            const rate = Math.min((splide.index + 1) / end, 1);
            bar.style.width = String(100 * rate) + "%";
        });

        splide.mount();
    });
});
// dev js start

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
let experienceNum = 1;

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("active") &&
            formStep.classList.remove("active");
    });
    formSteps[formStepsNum].classList.add("active");
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step.active");
    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

nextBtns.forEach((common_btn) => {
    common_btn.addEventListener("click", function () {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
        console.log("kk");
    });
});

prevBtns.forEach((common_btn) => {
    common_btn.addEventListener("click", function () {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
        console.log("kk");
    });
});
