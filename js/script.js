// Функции 
// Задача 1.1 - Конвертер температуры
// Создай функцию convertTemperature(celsius, toFahrenheit), которая:
// Если toFahrenheit = true, переводит Цельсий в Фаренгейт: (C × 9/5) + 32
// Если toFahrenheit = false, переводит Фаренгейт в Цельсий: (F - 32) × 5/9
// Протестируй функцию с несколькими значениями

function convertTemperature(celsius, toFahrenheit) {
    if (toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return (celsius - 32) * 5 / 9;
    }
}

console.log(convertTemperature(25, true));
console.log(convertTemperature(77, false));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задача 1.2 - Проверка пароля
// Напиши функцию validatePassword(password), которая:
// Проверяет, что пароль длиннее 8 символов
// Содержит хотя бы одну букву
// Содержит хотя бы одну цифру
// Возвращает true если все условия выполнены, иначе false

const porolpassword = "hello1223"

function validatePassword(password) {
    if(password.length > 8 && 
        /[a-zA-Z]/.test(password) &&
        /[0-9]/.test(password)
    ){
        return true
    }else {
        return false
    }

}
console.log(validatePassword(porolpassword))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задача 1.3 - Калькулятор с операциями
// Создай функцию calculate(a, b, operation), где operation это строка ("+", "-", "*", "/"). 
// Функция должна выполнить операцию и вернуть результат. Протестируй с разными операциями.
 
const calculate = (a, b, operation) => {
    if(operation === "+") {
        return a + b;
    }else if (operation === "-") {
        return a - b;
    }else if (operation === "*") {
        return a * b;
    }else if(operation === "/") {
        return a / b;
    }else {
        return "Неизвестная операция";
    }
}

console.log(calculate(10, 5, "+")); // 15 
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM
// Задача 2 - Интерактивный калькулятор
// Создай HTML страницу с:
// Двумя полями ввода для чисел (id="num1", id="num2")
// Четырьмя кнопками для операций (+, -, ×, ÷) с классом "operation-btn"
// Элементом для результата (id="result")

function calculatee(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    }
}

// Находим все кнопки
const buttons = document.querySelectorAll(".operation-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const a = Number(document.getElementById("num1").value);
        const b = Number(document.getElementById("num2").value);

        const operation = button.dataset.operation;

        const result = calculatee(a, b, operation);

        document.getElementById("result").textContent = result;
    });
});