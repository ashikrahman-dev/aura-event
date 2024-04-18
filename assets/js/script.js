//Invention slider
document.addEventListener("DOMContentLoaded", function () {
    const eventSlider = document.querySelectorAll("#eventSlider");

    eventSlider.forEach(function (element) {
        const splide = new Splide(element, {
            perPage: 2,
            perMove: 1,
            gap: "30px",
            pagination: false,
            arrows: false,
            padding: "350px",
            trimSpace: false,
            focus: -0.19,
            breakpoints: {
                1890: {
                    perPage: 3,
                    focus: -0.08,
                },
                1690: {
                    perPage: 3,
                    padding: "10px",
                    focus: 0.18,
                    gap: "30px",
                },
                1390: {
                    perPage: 2,
                    padding: "180px",
                    focus: 0.05,
                    gap: "20px",
                },
                1180: {
                    perPage: 2,
                    padding: "80px",
                    focus: 0.05,
                    gap: "20px",
                },
                880: {
                    perPage: 1,
                    padding: "180px",
                    focus: -0.3,
                    gap: "20px",
                },
                768: {
                    perPage: 1,
                    padding: "90px",
                    focus: -0.11,
                    gap: "15px",
                },
                576: {
                    perPage: 1,
                    padding: "70px",
                    focus: -0.13,
                    gap: "15px",
                },
                370: {
                    perPage: 1,
                    padding: "40px",
                    focus: -0.09,
                    gap: "15px",
                },
            },
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

// Range Slider

// New Range Slider
const slider = document.querySelector("#myRange");
const output = document.querySelector("#sliderValue");
const maxVal = parseInt(slider.max);

function sliderPrice() {
    let progress = (slider.value / maxVal) * 100;
    slider.style.background = `linear-gradient(to right, #FAFF00 ${progress}%, rgba(153, 153, 153, 0.3) ${progress}%)`;
}

window.onload = function () {
    sliderPrice();
};


// New Range Slider
