
// primero declaramos las (const) a trabajar,
// luego con (forEach) le decimos que recorra todo el (array) q en este caso son los botones de la calculadora representados por (botton)
// como primera instruccion le decimos con (item.onclick) que al al momento de hacer click que verifique si esta seleccionado o cliquiado (clear) y de ser asi que limpie o borre la pantalla (display) con (innerText)
// despues le decimos que si esta cliquiado el id (backspace) encones delacramos una varable  con (let string) y luego q convierta en cadane de texto con (toString) despues que sustraiga el ultimo caracter y lo elimine con (substr) 
// y que de lo contrario q si es diferente a ("") y igual a (equal) que busque en (display) si hay alguna operacion aritmetica y q la ejecute con (aval)
// y si en (display) no hay nada y esta cliquiado (equal) que marque en pantalla (Null) con un tiempo de de 0.2s con (setTimeout)
// de lo contrario que se muestre el texto interno del id

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick = () => {
        if (item.id == "clear"){
            display.innerText = "";
        } else if (item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1);
        } else if (display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Null";
            setTimeout(()=> (display.innerText = ""), 500);
        
        } else {
            display.innerText+=item.id;
        }
    };
});

// tema dark                          
// const themeToggleBtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator");

// let isDark = true;
// themeToggleBtn.onclick = () => {
//     calculator.classList.toggle("dark");
//     themeToggleBtn.classList.toggle("active");
//     isDark = !isDark;
// };

const themeToggleBtn = document.querySelector(".theme-toggler");
const themeToggleIcon = document.querySelector(".material-symbols-outlined");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleIcon.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};



