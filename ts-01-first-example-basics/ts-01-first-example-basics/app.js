"use strict";
//// 1
// class User {
//   //we need to define the types of the variable that we will add
//   name: string;
//   private age: number;//access t oit only from inside the class
//2
class User {
    //now we cant delete the name because Greetable has it
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } //this is similar to the above one but shorter!
}
class Admin extends User {
    //thats how to extends a class with TS while keeping the shorcut:
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User('habeeb', 20);
console.log(user.name);
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
//// 1
// function printResult(result: string | number, printMode: 'console' | 'alert') {
//   //the type that I'm allowing (could be also specific text)
//   if (printMode === 'console') {
//     console.log(result);
//   } else if (printMode === 'alert') {
//     alert(result);
//   }
// }
//2
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, printMode) {
    //the type that I'm allowing (could be also specific text)
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
// type Calculations = CalculationContainer[]; //thats how we use it
// new CalculationContainer//error
// type Calculations = { res: number; print: () => void }[]; //define our own type
// 1
const results = []; //telling that I'm making an array of objects that hass these two elements
// 2
// const results: Calculations = [];//using generic
//generic usage:
//1
// const results: Array<any> = [];//using
//2
// const results: Array<CalculationContainer> = [];//using generic
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        },
    };
    // printResult(resultContainer.res);
    results.push(resultContainer);
    // printResult(result);
    // results[0].print();
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
    // printResult(result,"window");//will give an error
});
//create your own generic:
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho('hi there').split(' '); //now we defined the function type, which allows us to use the type's methods!
