console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

let a = 50;
let b = 100;
// это можно выразить в виде объекта, который далее видится
let globalScope = {
    a: 50,
    b: 100,
    f: 'Function'
}
a = 500; // переопределения значения а

function f(arg: number) {
    let param = 5;
    let secondParam = 10;
    console.log(param + secondParam);
    const result = param + secondParam + arg;
    arg += result;  // arg = arg + result
    console.log(a + b); // 600
    return () => {
        console.log(arg + a); // 215
        console.log(arg + b); // 315
    };
}

f(100)();

// Scope F
let scopeF = {
    outerScope: globalScope,
    a: 0,
    arg: 215,
    param: 5,
    secondParam: 10,
    result: 155
}
____________________________

let globalScope = {
    outerScope: null,
    a: 10,
    f: 'Function'
}
let a = 10;
let b = 50; // f: 50
function f() {
    console.log(b);
}

f();
var b = 50; // ok
let b = 50; // f: udefined


_____________________________

// Recursion

function f() {
    return f()
}

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 +
...
+2 + 1 = 5050

function sumTo(n: number) {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i;
    }
    return result;
}

// recursion metod

function sumTo(n: number): number {
    if (n === 1) return n;
    return n + sumTo(n - 1);
}


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(n: number) {
    return function (n2: number) {
        return n + n2;
    }
}

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    }
}


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter(startCount: number) {
    return {
        increase: () => ++startCount,
        decrease() {
            return --startCount
        },
        reset: () => {
            startCount = 0;
            return startCount;
        },
        set: (newCount: number) => {
            startCount = newCount;
            return startCount;
        },
        getCount: () => startCount;
    };
}


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number) {
    if (n <= 0) return 0;  // без отрицательных чисел
    if (n === 1) return (n: number) => n;
    let _argument: number[] = [];

    function helper(...args: number[]) {
        _argument = [..._argument, ...args] // пререзаписываем 1 и сохраняем в ...arg
        if (_argument.length >= n) {
            _argument.length = n;
            return _argument.reduce((acc, num) => acc + num);
        } else {
            return helper
        }
    }
    return helper;
}


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};