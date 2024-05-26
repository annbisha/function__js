// function temperatureFunction(temperature) {
//   temperature = parseInt(temperature);
//   temperature = (temperature * 9) / 5 + 32;
//   return temperature;
// }

// let fahrenheitValue = temperatureFunction(20);
// console.log(fahrenheitValue);
// function rgb(r, g, b) {
//   function toHex(value) {
//     const hex = Math.floor(value).toString(16);
//     return hex.length === 1 ? "0" + hex : hex;
//   }

//   return "#" + toHex(r) + toHex(g) + toHex(b);
// }

// console.log(rgb(10, 11, 12)); // #0a0b0c
// console.log(rgb(255, 255, 255)); // #ffffff
// console.log(rgb(0, 0, 0)); // #000000

//   console.log(obj);
//   return obj;
// }

// function userFlats(number) {
//   let floors = 15;
//   let porches = 3;
//   let flat = 4;
//   const obj = {};
//   let numberFlat = Math.ceil(number / flat);
//   let floor = Math.ceil(numberFlat / floors);
//   numberFlat -= (floor - 1) * floors;
//   obj.numberFlat = numberFlat;
//   obj.floor = floor;
//   console.log(obj);
// }
// userFlats(prompt("Give me a number :)"));

// function getFoolName() {
//   let surname = prompt("Введіть прізвище");
//   let name = prompt("Введіть ім'я");
//   let firstName = prompt("Введіть по батькові");
//   surname = surname.trim();
//   name = name.trim();
//   firstName = firstName.trim();

//   surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
//   name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   firstName =
//     firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//   const obj = {};
//   obj.surname = surname;
//   obj.nme = name;
//   obj.firstName = firstName;
//   obj.foolNAme = surname + " " + name + " " + firstName;
//   console.log(obj);
// }
// getFoolName();

// function string(userInput) {
//   userInput = userInput.split("\\n").join("\n");
//   console.log(userInput);
// }
// string(
//   prompt("Введіть рядок з можливістю використання \\n як маркер нового рядка:")
// );

// function useAge(age) {
//   let result = age || alert("сталася помилка");
//   if (result) {
//     let birthOfYear = 2024 - result;
//     console.log(birthOfYear);
//   }
// }

// useAge(prompt("Введіть вік"));

// function userLogin(login, password) {
//   const login2 = "admin";
//   const password2 = "qwerty";
//   if (login === login2 && password === password2) {
//     alert("Вітаю");
//   } else {
//     alert("Сталася помилка");
//   }
// }
// let login = prompt("Введіть логін");
// let password = prompt("Введіть пароль ");
// userLogin(login, password);

// function table(arr) {
//   let str = "<table>";
//   for (let number of arr.keys()) {
//     if (number % 2 == 0) {
//       str += "<tr style='background-color: Tomato;'>";
//     } else {
//       str += "<tr style='background-color: DodgerBlue;'>";
//     }
//     for (let numbers of arr[number]) {
//       str +=
//         `<td style="text-align: center; border: 1px solid; width: 25px; height: 25px;">` +
//         `${numbers}` +
//         `</td>`;
//     }
//     str += "</tr>";
//   }
//   str += "</table>";
//   return document.write(str);
// }
// let arr = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];
// table(arr);

// function corecctWord(strFilter, arr) {
//   let result = strFilter
//     .filter((item) => !arr.includes(item.toLowerCase()))
//     .join(" ");
//   alert(result);
// }
// let strFilter = prompt("Give a sentense").split(" ");
// let arr = ["lox", "net", "who"];
// corecctWord(strFilter, arr);

// function form(car) {
//   const form = document.createElement("form");

//   for (const key in car) {
//     if (Object.hasOwnProperty.call(car, key)) {
//       const label = document.createElement("label");
//       label.textContent = key;

//       const input = document.createElement("input");
//       input.type = "text";
//       input.name = key;
//       input.value = car[key];

//       form.appendChild(label);
//       form.appendChild(input);

//       form.appendChild(document.createElement("br"));
//     }
//   }
//   document.body.appendChild(form);
// }

// function performCalculations(a, b) {
//   if (b === 0) {
//     return "Ділення на нуль неможливе";
//   }
//   const sum = a + b;
//   const difference = a - b;
//   const product = a * b;
//   const quotient = a / b;
//   return {
//     sum: sum,
//     difference: difference,
//     product: product,
//     quotient: quotient,
//   };
// }

// const results = performCalculations(10, 2);
// console.log(results);

// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };

// form(car);

// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };
// function str(car) {
//   const formContainer = document.createElement("form");
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
//     }
//   }
// }

// let persons = [
//   { name: "Іван", age: 17 },
//   { name: "Марія", age: 35 },
//   { name: "Олексій", age: 73 },
//   { name: "Яків", age: 12 },
// ];

// function sorted(persons) {
//   if (persons) {
//     persons.sort((a, b) => a.age - b.age);
//   } else {
//     persons.sort((a, b) => b.age - a.age);
//   }
//   return persons;
// }
// console.log(sorted(persons));

// let enterNumber = prompt("Введіть число");
// let enterNumber2 = prompt("Введіть число");
// let culc = Math.floor(enterNumber / enterNumber2);
// console.log(culc);

// const calcResult = () => {
//   const num1 = parseFloat(firstNumber.value);
//   const num2 = parseFloat(secondNumber.value);

//   if (!isNaN(num1) && !isNaN(num2)) {
//     if (num2 !== 0) {
//       const result = Math.floor(num1 / num2);
//       divisionResult.innerHTML = `Результат: ${result}`;
//     } else {
//       divisionResult.innerHTML = "Помилка: Ділення на нуль неможливе!";
//     }
//   } else {
//     divisionResult.innerHTML = "Будь ласка, введіть обидва числа.";
//   }
// };
// firstNumber.oninput = secondNumber.oninput = calcResult;

// function culculate(obg) {
//   obg.one = b = a * 5;
//   obg.two = b = c = b / 2;
// }
// let a = 5;
// let obg = { one: undefined, two: undefined };
// culculate(obg);
// console.log(obg);
