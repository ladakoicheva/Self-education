/*Створити функцію, яка прибирає з рядка всі символи, 
 які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' 
 поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.*/
let inputStr = prompt("введіть рядок");
letters = prompt("введи літери які треба видалити").split('');
let result = func(inputStr, letters);
alert(result);


function func(str, arr){ 
    return str
        .split('')
        .filter(char => !arr.includes(char))
        .join('');
}