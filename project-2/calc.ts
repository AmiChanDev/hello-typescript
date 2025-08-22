let newExpression = false;

const numButtons = document.querySelectorAll<HTMLButtonElement>(
  "button:not(.equals):not(.operator):not(.clear):not(.clearOne):not(.decimal)"
);
const operatorButtons =
  document.querySelectorAll<HTMLButtonElement>("button.operator");
const decimalButton = document.getElementById("decBtn") as HTMLButtonElement;
const operatorsArray = ["+", "−", "×", "÷"];

const clearAllButton = document.getElementById("clearBtn") as HTMLButtonElement;
const clearOneButton = document.getElementById(
  "clearOneBtn"
) as HTMLButtonElement;
const equalButton = document.getElementById("eqBtn") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLInputElement;

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (newExpression || display.value === "Syntax Error") {
      display.value = "";
      newExpression = false;
    }
    display.value += button.textContent ?? "";
  });
});

operatorButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    if (display.value === "" || display.value === "Syntax Error") return;

    const lastChar = display.value.slice(-1);

    if (operatorsArray.includes(lastChar) || lastChar === ".") {
      display.value = "Syntax Error";
      return;
    }

    display.value += opButton.textContent ?? "";
    newExpression = false;
  });
});

decimalButton.addEventListener("click", () => {
  if (display.value === "Syntax Error") return;

  const lastChar = display.value.slice(-1);
  const segments = display.value.split(/[+\−×÷]/);
  const lastSegment = segments[segments.length - 1];

  if (!lastSegment.includes(".") && !operatorsArray.includes(lastChar)) {
    display.value += decimalButton.textContent;
    newExpression = false;
  }
});

clearOneButton.addEventListener("click", () => clear(false));
clearAllButton.addEventListener("click", () => clear(true));

equalButton.addEventListener("click", () => {
  const currentText = display.value;
  if (currentText === "" || currentText === "Syntax Error") return;

  try {
    const expression = currentText
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");

    const result = eval(expression);
    display.value = result.toString();
    newExpression = true;
  } catch {
    display.value = "Syntax Error";
  }
});

function clear(allText: boolean): void {
  display.value = allText ? "" : display.value.slice(0, -1);
}
