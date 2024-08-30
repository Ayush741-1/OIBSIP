let screen = document.getElementById("screen");

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function appendNumber(number) {
    screen.value += number;
}

function appendOperator(operator) {
    screen.value += operator;
}

function appendDot() {
    if (!screen.value.includes(".")) {
        screen.value += ".";
    }
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}
