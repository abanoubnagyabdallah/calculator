document.title = "calculator";
const inputBtn = document.querySelectorAll(".button__input");
const submitBtn = document.querySelector(".button__submit");
const clearBtn = document.querySelector(".button__clear");
const screen = document.querySelector(".calc-typed");

let equation = "";
inputBtn.forEach(Btn => {
    Btn.addEventListener("click", () => {
        const input = Btn.textContent;
        equation += input;
        screen.textContent = equation;
    })
});

clearBtn.addEventListener("click", () => {
    equation = "";
    screen.textContent = equation;
})

submitBtn.addEventListener("click", () => {
    try {
        equation = eval(equation.replaceAll('x', '*'));
        screen.textContent = equation;
    }
    catch (error){
        equation="";
        screen.textContent="Math Error"
    }
})