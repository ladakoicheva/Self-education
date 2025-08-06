/*Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/


let elements = prompt("Введіть елементи масива").split(" ");
let array = elements;

function average(arr) {
  
    arr = arr
        .filter((num) => num !== "" && !isNaN(Number(num)));
  if (arr.length === 0) {
    console.log("Числових елементів не знайдено");
    return;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  let result = sum / arr.length;
  console.log(result);
}
average(array);
