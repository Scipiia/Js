/*"use strict"
let a = 3;
alert(a);

let naum;
num = 123;
alert(num);&

//Так можно и нужно
let a;
a = 10;
alert(a);
a = 12;
alert(a);

//Так нельзя, ошибка
let a = 10;
alert(a);
let a = 20;
alert(a);*/

// операции + - * /
//let a;
//a = 1 + 2 + 3;
//alert(a);
/*let a = 1 + 2 + 3;
alert(a);*/

//Можно просто посчитать выражение внутри функции alert
//alert(2+3+5);
//alert(1+2+3);

//Мат операции можно проводить не только над числами но и над переменными
/*let a = 3;
let b = 2;
let c = a + b;
alert(c);*/

/*let a = 10;
let b = 2;
//let c = a + b;
//let c = a - b;
//let c = a * b;
//let c = a / b;
alert(c);*/

/*let c = 10, d = 5;
let result = c + d;
alert(result);*/

/*let a = 1, b = 2, c = 3;
alert(a + b + c);*/

/*let a = 10, b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);

let a = 5 + 5 * 3 + 3;
alert(a);

let a = 8 * 4 / 2 / 2;
alert(a);

let a = 2 * (2 + 4 * (3 + 1));
alert(a);*/
//В скобки можно заключить операции, обладающие приоритетом - это не будет ошибкой.Например, заключим в скобки произведение чисел:

/*let a = (2 * 2) + 3;
alert(a);

let a = (2 + 3) * 2 + 3;
alert(a);

let a = 1.5, b = 0.75;
let c = a + b;
alert(c);*/

// Отрицательные числа
/*let a = 100;
alert(-a);

//Остаток от деления %
let a = 10, b = 3;
alert(a%b);

//Возведение в степень
let a = 2;
let b = 10;
alert(a**b);

alert(2 * 2 ** 3);

let a = (3 * 2) ** 3;
alert(a);

let a = 3 * 2 ** (3 + 1);
alert(a);

let a = 3 * 2 ** 3 * 3;
alert(a);*/

//!!!!!!!!!!!!//
//В JavaScript шесть примитивных типов данных: string, number, boolean, null, undefined, symbol (новое в ES6).
/* typeof
console.log(typeof { a: 1, b: 2, c: 3 });
console.log(typeof [1, 2, 3]);

let arr = [1, 2, 3];
console.log(typeof arr);
*//*
let arr = [1, 2, 3];
console.log(typeof arr[0]);//number
*//*
let arr = ['1', '2', '3'];
console.log(typeof arr[0]);
*/

//Как определить массив ли объект
//Array.isArray()
                                                //{}-ОБЪЕКТ []-МАССИВ
/*											
console.log(Array.isArray([])); // выведет true
console.log(Array.isArray({})); // выведет false
*/
                        //Передача объектов по ссылке в JavaScript
/*
let a = [1, 2, 3];
let b = a;
b[0] = '!'; // меняем массив из переменной b
console.log(a[0]); // выведет '!' - переменная a тоже поменялась
*//* 
работает если меняем только часть массива или объекта, иначе не работает
let a = [1, 2, 3];
let b = a; // на объект ссылается и a, и b
a = 'primitive'; // запишем в a какой-то примитив
console.log(b); // выведет [1, 2, 3]
*//*
let a = [1, 2, 3];
let b = a;

a = [3, 4, 5]; // запишем в a массив

console.log(b); // выведет [1, 2, 3]
console.log(a); // выведет [3, 4, 5]
*//*
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr1);
*//*
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';
console.log(arr2);
*/
                                            //КОНСТРУКЦИЯ IF-ELSE
/*больше меньше или больше или равно
let test = 1.5;
if(test <= 10){
    alert("true");
} else{
    alert("false");
};
*//* равенство
let test = 10;
if(test == 10){
    alert("true");
}else{
    alert("false");
};
*//* не равно !=
    let test = 10;
if (test != 10) {
    alert("true");
} else {
    alert("false");
};
*//*
let test1 = 15;
let test2 = 10;
if(test1 >= test2){
    alert("true");
} else{
    alert("false");
};
*/
                                //CРАВНЕНИЕ ЧИСЕЛ И СТРОК
/*
if ('3' == 3) {
    alert('верно'); // сработает этот alert - значения равны
} else {
    alert('неверно');
}
*//*
if ('3' === 3) {
    alert('верно');
} else {
    alert('неверно'); // сработает этот alert
}
*//*
if ('3' === '3') {
    alert('верно'); // сработает этот alert
} else {
    alert('неверно');
}
*/
    //Разница между оператором == и оператором === проявляется именно тогда, когда значения одинаковые, но разный тип данных.
    /*
let test1 = 3;
let test2 = 2;

if (test1 !== test2) {
    alert('верно');
} else {
    alert('неверно');
}
*/
                            //СЛОЖНЫЕ УСЛОВИЯ IF-ELSE
//Для этого существуют операторы && (логическое И) и || (логическое ИЛИ).
/*
let num = 3;

if (num > 0 && num < 10) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let num = 3;
if (num>0 && num<5) {
    alert("true");
} else {
    alert("false");
};
*//*
let num = 1;
if(num>=10 && num<=20) {
    alert("true");
} else {
    alert("false");
};
*//*
let num1 = 10;
let num2 = 3;
if(num1 <= 1 && num2 >= 3) {
    alert("true");
} else {
    alert("false");
};
*/
        //Логическое ИЛИ
        //Логическое ИЛИ требует выполнения хотя бы одного условия ||
/*
let num1 = 10;
let num2 = -5;

if (num1 > 0 || num2 > 0) {
    alert('верно'); // выведет 'верно'
} else {
    alert('неверно');
}
*/
        //Операция && имеет приоритет над ||.
/*
let num = 3;

if (num > 0 && num < 5 || num > 10 && num < 20) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let num = 3;

if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let num = 3;

if ((num > 5 && num < 10) || num == 20) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let num = 3;

if (num > 5 || (num > 0 && num < 3)) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let num = 3;

if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
    alert('верно');
} else {
    alert('неверно');
}
*/
                                        //ИНВЕРТИРОВНИЕ ВЫСКАЗЫВАНИИ В IF-ELSE
/*
let num1 = -4;
let num2 = 112;
if (!(num1 >= 0 || num2 <= 10)) {
    alert('верно');
} else {
    alert('неверно');
}
*/
                                        //Конструкция if-else и булевы значения
/*
let test = true;
if(test === true) {
    alert("true");
} else {
    alert("false");
};
*//*
let test = false;
if (test === false) {
    alert("true");
} else {
    alert("false");
};
*//*
let test = 3 * 'a';

if (test == true) {
    alert('верно');
} else {
    alert('неверно');//false
}
*//*
    //Сокращенная форма
let test = true;

if (test) { // эквивалентно if (test == true)
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = true;

if (!test) {
    alert('верно');
} else {
    alert('неверно');
}
*/
//перепишем след код в сокр форме
/*
let test = true;

if (test == true) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = true;

if(true){
    alert("true");
} else {
    alert("false");
};
*//*
let test = true;

if (!true) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = true;

if (!true) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = true;

if (test != false) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = true;
if(true){
    alert("true");
} else {
    alert("false");
};
*//*
let test = 3;

if (test) {
    alert('верно');//+
} else {
    alert('неверно');
}
*//*
let test = 'abc';

if (test) {
    alert('верно');//+
} else {
    alert('неверно');
}
*//*
let test = '';

if (test) {
    alert('верно');
} else {
    alert('неверно');//+
}
*//*
let test = 3 * 'abc';

if (test) {
    alert('верно');
} else {
    alert('неверно');//+
}
*//*
let test = null;

if (test) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = false;

if (test) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test;

if (test) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = 0;

if (test) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = '0';

if (test) {
    alert('верно');
} else {
    alert('неверно');
}
*//*
let test = -1;

if (test) {
    alert('верно');
} else {
    alert('неверно');
}
*/
                                    //Необязательность конструкции else
/*
let test = 10;
if (test == 10){
    alert("true");
};
*/
                                    //Необязательность фигурных скобок
        //перепишите след код в сокр виде
/*
let test = 0;
if (test == 0) {
    alert('верно');
} else {
    alert('неверно!');
}
*//*
let test = 0;
if(test == 0)alert("true"); else alert("false");
*//*
if (test == 0) {
    alert('верно');
}
*//*
let test = 0;
if (test == 0)
    alert("true");
*/
                                    //Комбинации конструкций if-else
/*
let day = 31;

if(day >= 1 && day <=11){
    alert("1декада");
};
if(day > 11 && day <=21) {
    alert("2 декада");
};
if(day > 21 && day <= 31) {
    alert("3 декада");
};
*/
                                    //КОНСТРУКЦИЯ ELSE IF
/*
let num = 1;

if (num == 1) {
    alert('value1');
} else if (num == 2) {
    alert('value2');
} else if (num == 3) {
    alert('value3');
}
*//*
let day = 90;
if(day >=1 && day <= 11){
    alert("1 декада");
} else if (day > 11 && day <= 21){
    alert("2 декада");
} else if (day > 21 && day <= 31){
    alert("3 декада");
} else {
    alert("недопустимое число, оно не попадает ни в одну из декад");
};
*//*
let age = 9;

if(age < 10){
    if(age > 99){
        alert("больше 99");
    } else {
        alert("меньше 99");
    }
}	else{
    alert("больше 10");
}
*//*
let num = 6;

if (num >= 0) {
    if (num <= 5) {
        alert('меньше или равно 5');
    } else {
        alert('больше 5');
    }
} else {
    alert('меньше нуля');
}
*//*
let age = 88;
 if(age < 10 || age > 99){
     alert("Это число не входит в указанный диапазон");
 } else {
    age = String(age);
     if ((+age[0] + +age[1]) <= 9){ //ОБЯЗАТЕЛЬНЫ +СЫ ПЕРЕД AGE ИНАЧЕ ПОСТОЯННО 2ЗНАЧНОЕ ЧИСЛОВ ОТВЕТ
         alert("Сумма цифр онозначна");//Я ХЗ ПОЧЕМУ ТАК, НАДЕЮСЬ ПОТОМ ПОИМУ, ПОКА НАДО ПРОСТО ЗАПОМНИТЬ
     }else{
         alert("сумма цифр двузначна");
     }
 }
 *//*
let age = 12;

if (age < 10 || age > 99) {
    alert('Bad number');
} else {
    age = String(age);
    if ((+age[0] + +age[1]) <= 9) {
        alert("Сумма однозначна");
    } else {
        alert("Сумма двузначна");

    }
}
*/

                            //ОБЛАСТИ ВИДИМОСТИ let и var в if-else
/*
let age = 17;
let adult;
if(age >= 18) {
    let adult = true;
} else {
    let adult = false;
};

console.log(adult)
*/
                //НЮАНСЫ
/*
let result = 1;

if (true) {
    result = 2;
}

console.log(result); // выведет 2
*//*
let result = 1;

if (true) {
    let result = 2;
    console.log(result); // выведет 2
}

console.log(result); // выведет 1
*//*
let result = 1;

if (true) {
    let result = 2;
    console.log(result); // выведет 2
}

console.log(result); // выведет 1
*///задача
/*
let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);
*//*
let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);
*//*
let age = 21;
let result;

if (age >= 18) {
    if (age <= 23) {
        result = 'от 18 до 23';
    } else {
        result = 'больше 23';
    }
} else {
    result = 'меньше 18';
}

console.log(result);
*//*
let age = 21;
let result;

if (age >= 18) {
    if (age <= 23) {
        result = 'от 18 до 23';
    } else {
        result = 'больше 23';
    }
} else {
    result = 'меньше 18';
}

console.log(result);
*/
                                //Область видимости var
/*
let num = 1;

if (num == 1) {
    var result = 'верно';//+
} else {
    var result = 'неверно';
}

console.log(result);
*//*
let num = 1;

if (num == 1) {
    let result = 'верно';
} else {
    let result = 'неверно';
}

console.log(result);//ошибка
*/
                                            //Примеры использования if-else
/*
let min = 60;

if(min >= 0 && min <= 19){
    console.log("1 треть часа");
}
if(min >= 20 && min <=39){
    console.log("2 треть часа");
}
if(min >= 40 && min <= 59){
    console.log("3 треть часа");
} 
*/
         //длина строки
/*
let arr = "123";

if(arr.length == 3) {
    console.log(+arr[0] + +arr[1] + +arr[2]); //+ перед arr[0] это преобразование к числу
} else {
    console.log("!");
}
*/
        //Проверка символа строки
/* //Проверка чему равен первый символ строки
let str = '12345';

if (str[0] == 1) {
    console.log('!');
}
*//* //проверка чему равен последнии символ строки
let str = '12345';
let last = str[str.length - 1];

if (last == 5) {
    console.log('!');
}
*/
            //Проверка символа числа
/*
let num = 33534535; 
let str = String(num); //преобразование к строке
let last = str[str.length - 1]; // уже из строки находим ласт символ

if(last == 0){
    console.log("yes");
} else {
    console.log("no");
}
*/
/*
let num = 4440;
let str = String(num);
let last = str[str.length - 1];

if(last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
    console.log("четное");
} else {
    console.log("не четное");
}
*/
            //Остаток от деления
/*
let a = 6666665;

if(a % 2 == 0){
    console.log("Четное");
} else {
    console.log("Нечетное");
}
*//*
let a = 999999999999999; // 16 девяток не делится на 3 почему то здесь)

if(a % 3 == 0){
    console.log("Делится на 3");
}else{
    console.log("Не делится на 3");
}
*/
                                    //Практика на условия if-else в JavaScript
/*
let month = 1;

if (month >= 1 && month <= 3){
    console.log("Зима");
}
if (month >= 4 && month <= 6) {
    console.log("Весна");
}
if (month >= 7 && month <= 9) {
    console.log("Лето");
}
if (month >= 10 && month <= 12) {
    console.log("Осень");
}
*//*
let str = "abcde";

if(str[0] == "a"){
    console.log("yes");
} else {
    console.log("no");
}
*//*
let num = 62345;
let str = String(num);
let num1 = str[0];

if (num1 == 1 || num1 == 2 || num1 == 3){
    console.log("yes");
} else {
    console.log("no");
}
*//*
let a = 123;
let b = String(a);
let c = Number(b[0]) + Number(b[1]) + Number(b[2]);
console.log(c);
*//*
let num1 = 123123;
let str = String(num1);
let num2 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let num3 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (num2 == num3) {
    console.log("yes");
} else {
    console.log("no");
}
*/
                        //Конструкция switch-case в JavaScript

/*
let num = 4;
let num1 = String(num);//не обязательно, тк можно в case писать без ""

switch(num1){
    case "1": //если переменная занада как число, то ковычки не нужны
        alert("зима");
    break;
    case "2":
        alert("весна");
    break;
    case "3":
        alert("лето");
    break;
    case "4":
        alert("осень")
    break;
    default:
        alert("Не корректнoe число");
    break;
 }
*/
                         //Тернарный оператор в JavaScript
/*
let num = 2;
let result = num >= 0 ? 1: -1;
console.log(result);
*//*
if(num >= 0){
    alert("1");
} else {
    alert("-1");
};
*/
                        //Логические операции
/*
let a = 2 * (3 - 1);
let b = 6 - 1;
let c = a == b;
console.log(c);
*//*
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log( a > b);
*//*
let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);
*//*
let age = 98;
if (age >= 14 && age <= 90) {
    alert("Находится в диапазоне");
} else {
    alert("Не находится в диапазоне")
};
*//*
let age = 13;
if(!(age >=14 && age <=90)) {
    alert("true");
} else {
    alert("false")
};
*//*
let login = prompt("Введите логин");

if(login == "Admin") {
    let sec = prompt("Введите пароль");
    if(sec == "Я главный"){
        alert("Здравствуйте");
    }else if (sec)  {
        alert("Иди нахуй, Неверный пароль");
    } else {
        alert("Отменено");
    }
} else if(login) {
    alert("Я вас не знаю, идите нахуй");
} else{
    alert("Отменено");
}
*//*
let num = confirm("Есть ли вам 18 лет?")

if (num) {
    alert("вы ответили да, надеюсь не врали");
} else {
    alert("доступ запрещен");
}
*/
                        //ЦИКЛ WKILE в JavaScript
/*
let i = 1;
while(i <= 100){
    console.log(i);
    i++;
}
*//*
let i = 11;
while(i <= 33) {
    console.log(i);
    i++;
}
*//*
let i = 1;
while(i <=99) {
    console.log(i);
    i += 2;
}
*//*
let i = 0;
while(i <= 100) {
    console.log(i);
    i +=2;
}
*//*
let i = 30;
while(i >= 0) {
    console.log(i);
    i--;
}
*//*
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
*//*
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
*//*
let i = 10;

while (i >= 0) {
    console.log(i);
    i--;
}
*//*
let i = 10;

while (i >= 0) {
    console.log(i);
    i--;
}
*/
                    //Цикл for в JavaScript
/*
    В начале цикла i будет равно нулю,
    цикл будет выполнятся пока i <= 9,
    после каждого прохода к i прибавляется единица:
*//*
for (let i = 0; i <= 9; i++) {
    console.log(i); // выведет 1, 2... 9
}
*//*
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
*//*
for (let i = 11; i <= 33; i++) {
    console.log(i);
}
*//*
for (let i = 0; i <= 100; i+=2){
    console.log(i);
}
*//*
for (let i = 1; i <= 99; i+=2){
    console.log(i);
}
*//*
for (let i = 100; i >= 0; i--) {
    console.log(i);
}
*/
                    //Накопление результата в цикле JavaScript
/*
let result = 0;

for (let i = 1; i <= 100; i++) {
    result = result + i;
}

console.log(result); // искомая сумма
*//*
let result = 1;
for( let i = 1; i <= 20; i++) {
    result = result * i;
}
console.log(result);
*//*
let result = 2;
for(let i = 2; i <= 100; i+=2) {
    result = result + i;
}
console.log(result);
*//*
let result = 1;
for(let i = 1; i <= 99; i+=2) {
    result = result + i;
}
console.log(result);
*/
                    //Цикл for для массивов в JavaScript
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= 4; i++) {
    console.log(arr[i]);
}
*//*
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length - 1; i++) {//lenght считает длинну массива
    console.log(arr[i]);
}
*//*
let arr = ["a", "b", "c", "d", "e",];
for(i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}
*//*
let arr = [1, 2, 3, 4, 5];
        
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/
                    //Перебор массива и if
/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0){
        console.log(arr[i]);
    }
}
*//*
let result = 1;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    result *= arr[i];
}
console.log(result);
*//*
let result = 0;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    result += arr[i] ** 2;
}
console.log(result);
*//*
let arr = [2, 5, 9, 15, 1, 4];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}
*//*
let result = 0;
let arr = [1, -5, 8, 13, 5, -1];
for (let i = 0; i <arr.length; i++){
    if(arr[i] >= 0){
        result+=arr[i];
    }
}
console.log(result);
*//*
let result = 0;
let result1;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    result1 = result / (arr.length - 1)  // вот тут не уверен, нужно ли отнимать единицу, по сути в массиве 4 
                                    //объекта, тк счет с 0 начинается, значит ответ 3.75 среднее арифметическое
}
console.log(result1);
*//* что то в этой жизни никогда не поддастся моему пониманию!!!!
let arr = [10, 20, 30, 50, 235, 3000]; //Задача ниже точно такая же, но работает
for (let i = 0; i < length; i++) {		// шо за ошибка то!!!!!!!
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5){
        console.log(arr[i]);
    } //Ошибок нет, ему по приколу не работать!!!
}//уууууаааааййййй, это потому что я русак, поэтому оно работает????
*//*
var arr = ['10', '20','30', '50', '235', '3000'];
for (var i = 0; i < arr.length; i++) {
if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
alert(arr[i]);
}
}
*//*
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.reverse();
console.log(arr1);
*//* //Попробуй потом, пока не знаю Задача 11 на циклы
let arr = [0, 1, 2, 4, 5, 7];
for(let i = 0; i < arr.length; i++){
    if(arr[i] != (arr.length - 1)){
        console.log(arr[i]);
    }
}
*/
                //Перебор массива циклом for-of в JavaScript
/*
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    console.log(elem);
}
*//*
let arr = ['a', 'b', 'c', 'd', 'e'];

for(let elem of arr){
    console.log(elem);
}
*//*
let arr = [1, 2, 3, 4, 5];
let result = 0;
for(let elem of arr){
    result += elem
}
console.log(result);
*//*
let arr = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
for(let i = 0; i < arr.length; i++){
}
console.log(arr);
*//*
let arr = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
for(let elem of arr){
    console.log(elem);
}
*//*	//не думаю что просто for тут корректно, тк 10 месяц в js ноябрь
let arr = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
let month = "10";
for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[10]){
        alert(arr[i]);
    }
    console.log(arr[i]);
}
*//* //хуйня полная, никогда не буду использовать dor of
//просто for удобнее и к тому же нумирует значения
let arr = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
let month = "10";
for(let elem of arr) {
    if(arr[elem] == elem[10]){
        console.log(arr[10])
    }
    
}
*//*//прuмер предков
var array=["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
for (var key in array)
{

if (array[key]== array[5] ||array[key]==array[6])
{document.write('<strong>'+array[key]+'</strong>'+'<br>')}

else{
document.write(array[key]+'<br>')
}
}
*/

                    //Перебор объекта циклом for-in в JavaScript
                    //let obj = {a: 1, b: 2, c: 3}; ОБЪЕКТ!!!!!
/*
let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key); // выведет 'a', 'b', 'c' КЛЮЧИ
}

let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(obj[key]); // выведет 1, 2, 3 ЭЛЕМЕНТЫ
}
*//*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = 0;
for(let key in obj){
    console.log(obj[key]);
    result += obj[key];
}
console.log(result); //если это внести в скобки, то будет показывать прибавлять постепенно
*/
                    //МОЖНО ИСПОЛЬЗОВАТЬ ПО 2 ЗНАЧЕНИЯ!!!!!!
/*
for (let i = 0, j = 0; i <= 9; i++, j += 2) {
    console.log(i, j);
}
*/
                            //Инструкция break в JavaScript
/*
let arr = [1, 3, 5, 6, 0, 8, 9];
for (let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
        console.log("yes");
        break;
    }
}
*//*
let arr = [1, 3, 5, 6, 0, -8, 9];
let result = 0;
for (let i = 0; i < arr.length; i++){
    if(arr[i] < 0){		
        break;
    }
    result += arr[i];
}
console.log(result);
*//*
let arr = [1, 3, 5, 6, 0, -8, 9];
for (let i = 0; i < arr.length; i++){
    if(arr[i] == 3){
        console.log(arr[i]);
        break;
    }
}
*//*
let arr = 0;
for(i = 1; i < 101; i++){
    arr += i;
    if(arr > 100 ){	
        alert(i);
        break;
    }
}
console.log(result);
*//*
let res = 0;
for(let i=1;i<101;i++){
    res+=i; 
    if(res>100)
    {alert(i);
    break;}}
*/
                //Области видимости переменных и счетчиков в циклах
/* Если переменная внутри {} и console.log/alert тоже внутри {}
тогда их видно, если console.log снаружи {} тогда ошибка
*//*
for (let i = 1; i <= 9; i++) {
    let num = 3;
}

console.log(num); // выдаст ошибку 
*/
                        //Работа с флагами в JavaScript
/*let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
    if (elem == 3) {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log('есть');
} else {
    console.log('нет');
}
*//*
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for(i = 0; i < arr.length; i++){
    if(arr[i] == 'c'){
        flag = true;
        break;
    }
}
if(flag === true){
    console.log("eсть с");
} else {
    console.log("нет с");
}
*/
                    //Нахождение простых чисел на JavaScript
/*
let a = 20;
let flag = true;

for(let i = 2; i < a; i++) {
    if(a % i == 0){
        flag = false;
        break;
    }
}
console.log(flag);
*//*
let num = 24;

let flag = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break; // выйдем из цикла
    }
}

console.log(flag);
*/
                        //Циклы без заданного количества итераций в JavaScript
/*
let num = 500;

while (num > 10) {
    num = num / 2;
}

console.log(num); // после цикла получим результат
*//*
let num = 112;
while(num < 1001){
    num = num * 3;
}
console.log(num);
*/
//можно это же сделать через FOR
/*
for (var num = 500; num > 10; num = num / 2);
console.log(num); // после цикла получим результат
*//* + рядом счетчик с количеством итерации, нужно писать через VAR
for (var num = 500, i = 0; num > 10; num = num / 2, i++);
console.log(num, i);
*//*
for (var num = 112; num < 1001; num = num * 3);
console.log(num);
*//* УДОБНЫЙ СПОСОБ
for (var num = 99, i = 0; num < 1000; num = num * 3, i++);
console.log(num, i);
*/
                    //Формирование строк через циклы в JavaScript
/*
let str = "";
for(let i = 0; i < 5; i++) {
    str +="0";
}
console.log(str);
*//*
let str = "";
for(let i = 1; i <= 9; i++){
    str +=i;
}
console.log(str);
*//*
let str = "";
for(let i = 9; i >= 1; i--){
    str = str + i;
}
console.log(str);
*//*
let str = "";
for(let i = 1; i <= 9; i++){
    str = str + i + "-";
}
console.log(str);
*/
                //Цикл for и типы данных JavaScript
/*
for(let i = 10; i <= 1000; i++) {
    let str = String(i);

if(+str[0] + +str[1] == 5){
    console.log(i)
    }
}
*/
                //Типизация и сумма
/*
let result = "";
for( let i = 1; i <= 30; i++){
    result += i;
}
console.log(result);
*//*
let result = '';

for (let i = 1; i <= 9; i++) {
    result += i;
}

console.log(result);
*/
                    //Вложенные циклы в JavaScript
/*
for(let i =1; i <=9; i++){
    for( let j = 1; j <= 3; j++){
        document.write(i);
    }
}
*//*
for(let i = 11; i <= 33; i+=10){
    for(let j = 0; j < 3; j++){
        let num = i + j;
        document.write(num + " ");
    }
}
*/
                //Вложенные циклы и область видимости в JavaScript
/*
for (let i = 0; i <= 9; i++) {
    let num = 3;
    
    for (let j = 0; j <= 9; j++) {
        
    }
}

console.log(num); // выдаст ошибку
*//*
for (let i = 0; i <= 9; i++) {
    let num = 3;
    
    for (let j = 0; j <= 9; j++) {
        console.log(num); // выведет 3
    }
}
*/
                    //Заполнение массивов через цикл в JavaScript
/*
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);
*//*
let arr = [];
for(let i = 1; i <=100; i++){
    arr[i] =+i;
}
console.log(arr);
*//*			// ОШИБКИ С ПРОПУСКАМИ!!!!!
let arr = [];

arr[0] = 1;
arr[4] = 5;

console.log(arr); // выведет структуру массива в виде [1, undefined × 3, 5]
alert(arr);  // выведет структуру массива в виде 1,'','','',5
*//*
let arr = [];

for (let i = 2, j = 0; i <= 100; i += 2, j++) {
    arr[j] = i;
}

console.log(arr);
*//*
 let arr = [];
 for(let i = 1, j = 0; i <= 99; i +=2, j++){
     arr[j] = i;
 }
 console.log(arr);
 */
                     //Изменение массива в цикле JavaScript
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}

console.log(arr); // выведет [2, 4, 6, 8, 10]
*//*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i]**2;
}
console.log(arr);
*//*
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    arr[i]-=1;
}
console.log(arr);
*//*
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    arr[i]+=10;
}
console.log(arr);
*/
                    //Заполнение массива методом push в JavaScript
/*
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr);
*/
                    //Заполнение массива в цикле
/*
let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr); // выведет [1, 2, 3, 4, 5]
*//*
let arr = [];
for (let i = 1; i <= 10; i++){
    arr.push(i);
}
console.log(arr);
*//*
let arr = [];
for(let i = 0; i < 10; i++){
    arr.push("x");
}
document.write(arr);
*//* //небольшая проверка, почемут через запятую пишет, но думаю так и задумано
let arr = [];
arr.push('x');
arr.push('x');
arr.push('x');
document.write(arr);
*//*
let arr = [];
for (let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1 //спизжено
    arr.push(i); //но выводит случайное целое число!!!!
}
console.log(arr);
*/
                //Заполнение массива из другого массива
/*
let arr = [1, 2, 3, 4, 5];
let result = [];

for (let elem of arr) {
    if (elem % 2 == 0) {
        result.push(elem);
    }
}

console.log(result); // выведет [2, 4]
*//*
let arr = [1, 2, -3, 4, 5, -9, -3, 7];
let result = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        result.push(arr[i]);
    }
}
console.log(result);
*/
                    //Переворот массива
/*
let arr = [1, 2, 3, 4, 5];
let result = [];

for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}

console.log(result); // выведет [5, 4, 3, 2, 1]
*//*
let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];
for(let i = arr.length-1; i>=0; i--){
    result.push(arr[i]);
}
console.log(result);
*/
                    //Необъявленный массив
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
for (let elem of arr) {
    if (elem % 2 != 0) {
        result.push(elem);
    }
}

console.log(result);
*/
                //Заполнение объектов через цикл в JavaScript
/*
let obj = {};
obj["пн"] = 1
obj["вт"] = 2
obj["ср"] = 3
obj["чт"] = 4
obj["пт"] = 5
obj["суб"] = 6
obj["вс"] = 7
console.log(obj);
*/
                //Заполнение объекта в цикле
/*
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i <= 4; i++) {
    let key = keys[i];
    let value = values[i];
    
    obj[key] = value;
}

console.log(obj);
*/
/*  //Не обязательно вводить переменные для ключа и значения, можно просто поступить вот так:
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i <= 4; i++) {
    obj[keys[i]] = values[i];
}

console.log(obj);
*//*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for(let i = 0; i <= 6; i++){
    obj[arr1[i]] = arr2[i];
}
console.log(obj);
*//*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for(let i = 0; i <= 6; i++){
    obj[arr2[i]] = arr1[i];
}
console.log(obj);
*/
                //Заполнение объекта из другого объекта
/*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let result = {};

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        result[key] = obj[key];
    }
}

console.log(result); // выведет {'b': 2, 'd': 4};
*//*
let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let result = {};
for(let key in obj){
    if(obj[key] >= 10 && obj[key] <= 20){
        result[key] = obj[key];
    }
}
console.log(result);
*//*
let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result = {};
for(let key in obj){
    if(key % 2 != 0){
        result[key] = obj[key];
    }
}
console.log(result);
*//*
let obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };
let result = {};
for (let key in obj) {
if (key % 2 != 0) {
result[key] = obj[key];
}
}
console.log(result);
*//*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
for(let key in obj){
    obj[key] **= 2
}
console.log(obj);
*/
                    //Обмен ключей и значений объекта
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = {};

for (let key in obj) {
    result[obj[key]] = key;
}

console.log(result); // выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
*//*
let obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };
let result = {};
for(let key in obj){
    result[obj[key]] = key;
}
console.log(result);
*/
                    //Практика на циклы с массивами и объектами JavaScript
/*
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
let result = {};
for (let key in obj){
    result = (obj[key] / 100) * 10;
    result +=obj[key];
    console.log(result); // почему-то снаружи цикла не работает консоль
    //точнее пишет только последнее значение объекта
}
*//*
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
}; 
let obj1 = {}; // зп увеличилась, но остальные значения не хотят выводиться в консоль
for(let key in obj){
    if(obj[key] <= 400){
        obj1 = (obj[key] / 100) * 10;
        obj1 +=obj[key];
        console.log(obj1);
    }
}
*//*
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for(let i = 0; i <= 4; i++){
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);
*//*
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0;
let sum1 = 0;
let result = 0;
for(let key in obj){
    sum += +key;
    sum1 += obj[key];
    result = sum / sum1;
}
console.log(result);
*//*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let obj1 = [];
let obj2 = [];
for(let key in obj){
    obj1 = key;
    obj2 = obj[key];
    document.write(obj2);
    document.write(obj1);
}
*//*
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let arr1 = [];
let arr2 = [];
for (let key in obj) {
arr1.push(key);
arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);
*//*
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr =[];
for(let key in obj){
    obj[key] += "";
    if(obj[key][0] == 1 || obj[key][0] == 2){
        arr.push(obj[key]);
    }
}
console.log(arr);
*//*
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [1, 2, 3, 4, 5];
let obj = [];
for(let i = 0; i <= 4; i++){
    obj[arr1[i]] = arr[i]
}
console.log(obj);
*//*
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj ={}
for(let i = 0; i <=4; i++){
    obj[arr[i]] = 1 + i;
}
console.log(obj);
*//*
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj ={};
for(let i = 0; i <=4; i++){
    obj[arr[i]] = 1 + i;
}
console.log(obj);
//let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
*/
                        //Подсчет количества элементов в массиве JavaScript
/*
let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let counter = 0;

for (let elem of arr) {
    if (elem == 'a') {
        counter++;
    }
}

console.log(counter);
*//*
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for(let elem of arr) {
    if(elem == 3 || elem == 2){
        counter++;
    }
}
console.log(counter);
*/
                    //Результат в виде объекта
/*
let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr){
    if(count[elem] === undefined){
        count[elem] = 1;
    }else {
        count[elem]++;
    }
}
console.log(count); // выведет {a: 3, b: 2, c: 1}
*/
                    //Получение соседей элементов в массиве JavaScript
/*
let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i]);
}
*//*
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length - 1; i++){
    
    console.log(arr[i + 1] + arr[i]);
}
*//*
let arr = [1, 2, 3, 4, 5];
for(let i = 0;i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i - 2] + arr[i]);
}
*//*
let arr = [1, 2, 3, 4, 5];
for(let i = 1;i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i + 1] + arr[i]);
}
*/
                //Получение чисел Фибоначчи в JavaScript
/*
let one = 0;
let two = 1;

for (let i = 1; i <= 10; i++) {
    let current = one + two;
    
    one = two;
    two = current;
    
    console.log(current);
}
*//*
let one = 0;
let two = 1; 
let three = 2;
for (let i = 0; i <= 10; i++){
    let current = one + two + three;

    one = two;
    two = three;
    three = current;

    console.log(current);
}
*/
                    //Вывод пирамидок на JavaScript
/*
let str = '';

for (let i = 0; i < 5; i++) {
    str += 'xx';
    document.write(str + '<br>');
}
*//*
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
    
    document.write('<br>');
}
*//*
for (let i = 1; i <= 9; i++) {
    let str = ''; // каждый раз зачищаем строку
    
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    
    document.write(str + '<br>');
}
*//*
for( let i = 1; i <=9; i++){
    if( i % 2 !=0){
        for(let j =1; j <= i; j++){
            document.write(i)
        }
        document.write("<br>")
    }
}
*//*
for(let i = 5; i >= 1; i--){
    let str = "";
    for(let j = 0; j < i; j++){
        str += "xx";
    }
    document.write(str + "<br>");
}
*//*
for(let i = 9; i >= 1; i--){
    for(j = 0; j<i; j++){
        document.write(i);
    }
    document.write("<br>");
}
*/
                    //Заполнение массивов с накоплением строки в JavaScript
/*
let arr = [];
let str = '';

for (let i = 0; i < 5; i++) {
    str += 'x';
    arr.push(str);
}

console.log(arr); // выведет ['x', 'xx', 'xxx', 'xxxx', 'xxxxx']
*//*
let arr = [];
let str = "";
for(let i = 0; i < 5; i++){
    str +="xx";
    arr.push(str);
}
console.log(arr);
*//*
let arr = [];

for (let i = 1; i < 10; i++) {
    let str = '';
    
    for (let j = 0; j < i; j++) {
        str += i;
    }
    
    arr.push(str);
}

console.log(arr);
*//*
let arr = [];
for(let i = 1; i <= 5; i++){
    let str = "";
    for(let j = 0; j < 5; j++){
        str += i;
    }
    arr.push(str);
}
*/
                                //Задачи
/*								
for(let i = 1; i <= 100; i++){
    for(let j = 0; j < 1; j++){
        document.write(i);
    }
    document.write("<br>")
}
*//*
for(let i = 100; i >= 1; i--){
    for(let j = 0; j < 1; j++){
        document.write(i);
    }
    document.write("<br>")
}
*//*
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0)
    for(let j = 0; j < 1; j++){
        document.write(i + "<br>");
    }
}
*//*
let arr = [];
for(let i = 1; i<= 1; i++){
    let str = "";
    for(j = 1; j <= 5; j++){
        str += "xx";
    }
    arr.push(str);
}
console.log(arr);
*//*
let arr = [];
for(let i = 1; i <= 10; i++){
    let str = "";
    for(let j = 0; j < 1; j++){
        str += i; 
    }

    arr.push(str);
}
console.log(arr);
*//*
let arr = [1, 2, -4, -7, 10, 15, 70, 8, 5, 44, -99];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] < 10){
        console.log(arr[i]);
    }
}
*//*
let arr = [1, 2, -4, -7, 10, 15, 70, 8, 5, 44, -99];
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 5){
        console.log("есть 5");
    }
}
*//*
let arr = [1, 2, 3, 4, 10, - 20];
let str = 0;
for(let i = 0; i < arr.length; i++){
    str += arr[i];
}
console.log(str);
*//*
let arr = [1, 2, 3, -2];
let str = 0;
for(let i = 0; i < arr.length; i++){
    str += arr[i] **2;
}
console.log(str);
*//*
let arr = [1, 2, 3, -2];
let sum = 0;
let sum1 = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    sum1 = sum / i;
}
console.log(sum);
console.log(sum1);
*//*
let fact = 1;
let num = 4;
for(let i = 1; i <= num; i++){
    fact*=i;
}
console.log(fact);
*//*
var fact = 1;
var num = 4;
for (var i = 1; i <= num; i++) {
fact = fact * i;
}
alert(fact);
*/
                    //Многомерные массивы в JavaScript
/*
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);
*//*
let arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]);
*//*
let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];
console.log(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1]
            + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]);
*//*
let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[1][0] + arr[1][0][0]);
*/
                    //Перебор многомерных массивов в JavaScript
/*
let i = 0;

for (i = 0; i < 3; i++) { // используем существующую переменную
  alert(i); // 0, 1, 2
}

alert(i);  //3, переменная доступна, т.к. была объявлена снаружи цикла
*//*
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    alert(i); // 1, затем 3, 5, 7, 9
  }
  *//*
 for (let i = 0; i < 10; i++) {

    if (i % 2) {
      alert( i );
    }
  
  }
  *//*
 let i = 3;

 while (i) {
   alert( i-- );
 }
 *//*
let i = 0;
while (++i < 5) alert( i );
*//*
let i = 0;
while (i++ < 5) alert( i );
*//*
for (let i = 0; i < 5; ++i) alert( i );
*//*
for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}
*//*
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
*//*
let i = 0;
while(i < 3){
    alert( `number ${i}!` );
    i++
} 
*//*
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
  
      // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  
    }
  }
  
  alert('Готово!');
*//*
for (let i = 0; i <= 100; i++){
    let input = prompt("Введите число больше 100")
    if(i >= 100){
        alert("гц")
        continue;
    } else {
        alert("Попробуите снова");
        let input = prompt("Введите число больше 100")
    }
}
*//*
let num;

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);
*/
                    //Многомерные объекты в JavaScript
/*
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
console.log(obj["key1"]["key1"] + obj["key1"]["key2"] + obj["key1"]["key3"]
 + obj["key2"]["key1"] + obj["key2"]["key2"] + obj["key2"]["key3"] + 
 obj["key3"]["key1"] + obj["key3"]["key2"] + obj["key3"]["key3"]);
 *//*
let obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}
console.log(obj[2][2]);
console.log(obj[3][1]);
*//*
let obj = {
    key1: {
        a: 1, b: 2, c: {
            d: 3,
            e: 4,
        }, f: 5,
    },
    key2: {
        g: 6, h: 7,
    },
}
console.log(obj["key1"]["a"] + obj["key1"]["b"] + obj["key1"]["c"]["d"]
+ obj["key1"]["c"]["e"] + obj["key1"]["f"] + obj["key2"]["g"] +obj["key2"]["h"]);
*/
                        //Перебор многомерных объектов в JavaScript
/*
let obj = {
    a: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    b: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    c: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}
for (let key in obj) {
    let subObj = obj[key];
    
    for (let subKey in subObj) {
        console.log(subObj[subKey]);
    }
}
*//*
let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}
let sum = 0;
for(let key in obj){
    let subObj = obj[key]
    for(let subKey in subObj){
        console.log(subObj[subKey]);
        sum +=subObj[subKey];
    }
}
console.log(sum);
*/
                //Ключи из переменных в многомерных структурах JavaScript
/*
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};

let lang = 'ru';
let day = 3;
console.log(obj[lang][day]);
*//*
let months = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};
let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5; // число от 0 до 12
console.log(months[lang][month]);
*//*
let affairs = {
    '2018': {
        11: {
            29: ['дело111', 'дело112', 'дело113'],
            30: ['дело121', 'дело122', 'дело123'],
        },
        12: {
            30: ['дело211', 'дело212', 'дело213'],
            31: ['дело221', 'дело222', 'дело223'],
        },
    },
    '2019': {
        12: {
            29: ['дело311', 'дело312', 'дело313'],
            30: ['дело321', 'дело322', 'дело323'],
            31: ['дело331', 'дело332', 'дело333'],
        }
    },
}
let year = 2018;
let month = 11;
let day = 30;
console.log(affairs[year][month][day][0]);
*//*
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
*//*
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
*//*
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
console.log(obj[key1]['key4']);
*/
                //Многомерные массивы и объекты в JavaScript
/*
let users = [
    {
        name: 'name1',
        age: 31,
    },
    {
        name: 'name2',
        age: 32,
    },
    {
        name: 'name3',
        age: 33,
    },
];
console.log(users[1]);
console.log(users[1]['name']);
*//*
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
console.log(employees[0]["salary"] + employees[1]["salary"]);
*//*
let students = {
    'boys':  ['Коля', 'Вася', 'Петя'],
    'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students["boys"][1] + " + " + students["girls"][2] + " = love");
*/
                //Перебор многомерных комбинаций в JavaScript
/*
let users = [
    {
        name: 'name1',
        age: 31,
    },
    {
        name: 'name2',
        age: 32,
    },
    {
        name: 'name3',
        age: 33,
    },
];
for (let user of users) {
    document.write(user.name + ' ' + user.age + '<br>');
}
*//*
let employees = [
    {
        name: 'Вася',
        salary: 300,
    },
    {
        name: 'Петя',
        salary: 400,
    },
    {
        name: 'Толик',
        salary: 500,
    },
];
for(let user of employees){
    document.write(user["name"] + " " + user["salary"] + "<br>");
}
*//*
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
let sum = 0;
for(let user of employees){
    sum += user["salary"];
}
console.log(sum);
*//*
let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
let sum = 0;
for(let user of employees){
    if(user["age"] >= 30){
        sum += user["salary"];
    }
}
console.log(sum);
*//*
let employees = [
    {
        name: 'name1',
        salary: 300,
        dismissed: false,
    },
    {
        name: 'name2',
        salary: 400,
        dismissed: true,
    },
    {
        name: 'name3',
        salary: 500,
        dismissed: false,
    },
    {
        name: 'name4',
        salary: 600,
        dismissed: true,
    },
    {
        name: 'name5',
        salary: 700,
        dismissed: false,
    },
];
let sum = 0;
for(let user of employees){
    if(user["dismissed"] == false){
        sum += user["salary"];
    }
}
console.log(sum);
*/
                //Сложные структуры!!!!!!!!!!!!
                //FO IN ПО ОБЪЕКТАМ{}   !!!!!!!!!!!!!
                //FO OF ПО МАССИВАМ[]   !!!!!!!!!!!!!!
                //Это значит, что первый цикл должен быть по объекту, а второй - по массивам. То есть первый цикл будет for-in, а второй - for-of, вот так
/*
let students = {
    'group1': ['student11', 'student12', 'student13'],
    'group2': ['student21', 'student22', 'student23'],
    'group3': ['student31', 'student32'],
};
for (let group in students) {
    for (let name of students[group]) {
        console.log(name);
    }
}
*//*
let data = {
    1: [
        'data11',
        'data12',
        'data13',
    ],
    2: [
        'data21',
        'data22',
        'data23',
    ],
    3: [
        'data31',
        'data32',
        'data33',
        'data34',
        'data35',
    ],
    4: [
        'data41',
        'data42',
    ],
};
for(let number in data){
    for( let name of data[number]){
        console.log(name);
    }
}
*//*
let data = [
    {
        1: 'data11',
        2: 'data12',
        3: 'data13',
        4: 'data14',
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data33',
    },
    {
        1: 'data31',
        2: 'data32',
    },
];
for (let string of data){
    console.log(string)
    for(name of data[string][name]){
        console.log(name)
    }
}
*/
                //Добавление элементов в многомерные массивы JavaScript
/*
let users = [
    {
        name: 'name1',
        age: 31,
    },
    {
        name: 'name2',
        age: 32,
    },
    {
        name: 'name3',
        age: 33,
    },
];
users.push({
    name: 'name4',
    age: 34,
});
console.log(users);
*//*
let users = [
    {
        name: 'name1',
        surname: 'surname1',
        age: 30,
    },
    {
        name: 'name2',
        surname: 'surname2',
        age: 31,
    },
    {
        name: 'name2',
        surname: 'surname2',
        age: 32,
    },
];
users.push( {
    name: "name3",
    surname: "surname3",
    age: 33,
});
console.log(users);
*/
                //Добавление элементов в многомерные объекты JavaScript
/*
let affairs = {
    '2019-12-28': ['дело11', 'дело12', 'дело13'],
    '2019-12-39': ['дело21', 'дело22', 'дело23'],
    '2019-12-30': ['дело31', 'дело32', 'дело33'],
}
affairs["2019-12-29"] = [];
affairs["2019-12-29"].push("дело14");
affairs["2019-12-31"] = [];
affairs["2019-12-31"].push("дело1", "дело2");
console.log(affairs);
*//* ошибка
let students = {
    'group1' {
        'subgroup11': ['student111', 'student112', 'student113'],
        'subgroup12': ['student121', 'student122', 'student123'],
    },
    'group2' {
        'subgroup21': ['student211', 'student212', 'student213'],
        'subgroup22': ['student221', 'student222', 'student223'],
    },
    'group3' { 
        'subgroup31': ['student311', 'student312', 'student313'],
        'subgroup32': ['student321', 'student322', 'student323'],
    },
};
console.log(students);
*//*
let students = {
    'group1': ['student11', 'student12', 'student13'],
    'group2': ['student21', 'student22', 'student23'],
    'group3': ['student31', 'student32'],
};

addStudent('group1', 'student14');
addStudent('group4', 'student41');

console.log(students);

function addStudent(group, name) {
    if (students[group] === undefined) {
        students[group] = [];
    }
    
    students[group].push(name);
}
*//*
let affairs = {
    '2019-12-28': ['дело11', 'дело12', 'дело13'],
    '2019-12-39': ['дело21', 'дело22', 'дело23'],
    '2019-12-30': ['дело31', 'дело32', 'дело33'],
}
addAffair('2019-12-27', 'дело1');
addAffair("2019-12-11", "дело12", "дело44", "дело44");

console.log(affairs)

function addAffair (group, name){
    if(affairs[group] === undefined){
        affairs[group] = [];
    }
    affairs[group].push(name);
}
*//*
let affairs = {
	2018: {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	2019: {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

addAffair(2018, 11, 31, 'дело131');
addAffair(2019, 12, 29, 'дело314');

function addAffair(year, month, day, delo){
    if(affairs[year] === undefined){
        if(affairs[year][month]===undefined){
            if(affairs[year][month][day] === undefined){
                affairs[year][month][day].push(delo);
            }else{
                affairs[year][month][day] = [];
                affairs[year][month][day],push(delo);
            }
        }else{
            affairs[year][month] = {};
        }
    }else{
        affairs[year] = {};
    }
}
console.log(affairs);
*/
                //Практика на многомерные массивы и объекты в JavaScript
/*
let data = {
	2018: {
		11: {
			29: [1, 2, 3],
			30: [4, 5],
		},
		12: {
			30: [6, 7],
			31: [8, 9],
		},
	},
	2019: {
		12: {
			29: [10, 11],
			30: [12, 13],
			31: [14, 15],
		}
	},
}
let i = [];
for(let key in data){
    for(let subKey in data[key]){
        for(let miniKey in data[key][subKey]){
            for(let elem in data[key][subKey][miniKey]){
                i.push(elem);
            }
        }
    }
}
console.log(i);
*//*
let affairs = [
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-31'
		
	},
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-30'
		
	},
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-31'
		
	},
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-30'
		
	},
	{
		date:  '2019-12-30'
		
	},
]
let arr = [];
for(let key of affairs){
    for(key in offairs["data"]){
        arr.push(affairs["date"]);
    }
}
console.log(arr);
*//* //нашел решение, но функции еще не проходили
let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
/*let arr = [
    [1, 2, 3,
        [4, 5
            [6, 7]]]
    [8
    [9, 10]]
    ];

   function subArr(arr) {
    var count = 0;
    manyArr(arr);
    function manyArr(arr) {
    for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
    manyArr(arr[i]);
    } else {
    count += arr[i];
    }
    }
    }
    return count;
    }
    console.log(subArr([1, 2, [3, 4, [5, 6], 7], 8, [9, 10]])); //55
*//*
let data = {
	2018: {
		11: {
			29: [1, 2, 3],
			30: [4, 5],
		},
		12: {
			30: [6, 7],
			31: [8, 9],
		},
	},
	2019: {
		12: {
			29: [10, 11],
			30: [12, 13],
			31: [14, 15],
		}
	},
}
let a = [];
for(let key in data){
    let subData = data[key];

    for(let subKey in subData){
        let miniData = subData[subKey]

       for(let elem in miniData){
           let eData = miniData[elem]
           for(let str in eData){
               //console.log(eData[str]);
               a.push(eData[str]);
             }
               
         }
           
     }
}// в общем как то так, колпак под колпаком блин

console.log(a);
*/
/*          //пытался через функцию записать в массив значения
            // это можно сделать, но я пока не понимаю как
//addAffair('2019-12-27', 'дело1');
//addA("eData[str]")
function a () {
    if (eData[str] === undefined) {
        let a = [];
    }
    
    a.push(eData[str]);
    console.log(a)
}
console.log(a)
*//*
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
*//*
let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
for (let key in obj) {
	let subObj = obj[key];
	
	for (let subKey in subObj) {
		console.log(subObj[subKey]);
	}
}
*//*
let affairs = [
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-31'
		
	},
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-30'
		
	},
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-31'
		
	},
	{
		date:  '2019-12-29'
		
	},
	{
		date:  '2019-12-30'
		
	},
	{
		date:  '2019-12-30'
		
	},
]
let a =[];
for (let key of affairs){
    
    a.push(key.date);
}
console.log(a);
*//*
let users = [
	{
		name: 'name1',
		age: 31,
		active: true,
	},
	{
		name: 'name2',
		age: 32,
		active: false,
	},
	{
		name: 'name3',
		age: 33,
		active: true,
	},
	{
		name: 'name4',
		age: 34,
		active: false,
	},
	{
		name: 'name5',
		age: 35,
		active: true,
	},
];
for(let key of users){
    if(key.active === true){
        console.log(key.name);
    }
}
*//*
for(let user of employees){
    if(user["dismissed"] == false){
        sum += user["salary"];
    }
}
*//*
let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];
let a = [];

for(let key of data){
    
    a = key.country
}
console.log(a.length); //ВСЁ ГЕНИАЛЬНОЕ ПРОСТО!!!!!!!!!!!
//console.log(a);
*//*
let affairs = {
	'2019-12-31': ['массив podro4i'],
	'2018-11-29': ['массив деfhfhfghл'],
	'2018-11-30': ['массив dfdsf'],
	'2018-12-27': ['массив всё будет хорошо'],
	'2019-12-29': ['массив дел'],
	'2019-12-30': ['массив дел'],
	'2018-12-30': ['массив Hello World'],
	'2018-12-31': ['массив Как то так :('],
}
for (let key in affairs){

   for (let name of affairs[key]){
      if(affairs[key] === affairs["2018-11-29"] || affairs[key] === affairs["2018-11-30"]
      || affairs[key] === affairs["2018-12-27"] || affairs[key] === affairs["2018-12-30"]
      || affairs[key] === affairs["2018-12-31"])
          console.log(name)
            if(affairs[key] === affairs["2018-12-27"] || affairs[key] === affairs["2018-12-31"] 
            || affairs[key] === affairs["2018-12-30"]){
                alert("Примитивно конечно, но пока только так умею " + " " + name)
            }
   }
}
*//*
let users = [
	{
		name: 'name1',
		active: true,
	},
	{
		name: 'name2',
		active: false,
	},
	{
		name: 'name3',
		active: true,
	},
	{
		name: 'name4',
		active: false,
	},
	{
		name: 'name5',
		active: true,
	},
];

addUsers("users", "name1");
addUsers("users", "name2");
console.log(users);

function addUsers (arr, numUser) {
	if (arr[name1]["active"] == true) {
        name1['active'] = false;
    }
    return;
}
/*
function addUsers (users, name){
    if(users[name] === false){
        users[active] = true;
    }
    
}
*/
/*
let students = {
	'group1': ['student11', 'student12', 'student13'],
	'group2': ['student21', 'student22', 'student23'],
	'group3': ['student31', 'student32'],
};

addStudent('group1', 'student14');
addStudent('group4', 'student41');

console.log(students);

function addStudent(group, name) {
	if (students[group] === undefined) {
		students[group] = [];
	}
	
	students[group].push(name);
}
*/
/*
let users = [
    {
    name: 'name1',
    active: true,
    },
    {
    name: 'name2',
    active: false,
    },
    {
    name: 'name3',
    active: true,
    },
    {
    name: 'name4',
    active: false,
    },
    {
    name: 'name5',
    active: true,
    },
    ];
    
    function changeKeyActive1(arr, numUser) {
    if (arr[numUser]['active'] == true) {
    arr[numUser]['active'] = false;
    }
    return arr;
    }
    
    function changeKeyActive2(arr, numUser) {
    if (arr[numUser]['active'] == false) {
    arr[numUser]['active'] = true;
    }
    return arr;
    }
    
    changeKeyActive2(users, 2);
    console.log(users);
    *//* //ОСТАВИМ ДО ВРЕМЕН ФУНКЦИИ, ЭТО КАКОЙ ТО ПИЗДЕЦ
   let users = [
	{
		name: 'name1',
		active: true,
	},
	{
		name: 'name2',
		active: false,
	},
	{
		name: 'name3',
		active: true,
	},
	{
		name: 'name4',
		active: false,
	},
	{
		name: 'name5',
		active: true,
	},
];
changeUser(users, 2);

function changeUser(users, name1){
    if(users[name1]["active"] == true){
        users[name1]["active"] = false
    }
    return users;
}
console.log(users);
*/
                    //Удобное хранение данных в JavaScript
/*
let users = [
	{
		id: 11,
		name: 'name11',
		surname: 'surname11',
	},
	{
		id: 14,
		name: 'name14',
		surname: 'surname14',
	},
	{
		id: 17,
		name: 'name17',
		surname: 'surname17',
	},
];
for (let user of users) {
	document.write(user.id + ' ' + user.name + ' ' + user.surname + '<br>');
}
*//* // нашел решения учеников с этого курса, все реша.т функциями, когда их не проходили
        //видимо кругом одни хений :(
let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];
let ruCity = [];
let ukrCity = [];
let belCity = [];
for(let str of data){
    if(str.country == "Россия"){
        ruCity += str.city
    }
}
for(let ukr of data){
    if(ukr.country == "Украина"){
        ukrCity += ukr.city
    }
}
for(let bel of data){
    if(bel.country == "Беларусь"){
        belCity += bel.city
    }
}
    
console.log(ruCity);
console.log(ukrCity);
console.log(belCity);
*//*
let data = [    //ниже переделанный вариант
	{
		year:  2019,
		month: 11,
		day: 20,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 11,
		day: 21,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 12,
		day: 25,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 12,
		day: 26,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 10,
		day: 29,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 10,
		day: 30,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 11,
		day: 19,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 11,
		day: 20,
		data: ['массив с данными']
	},
]
*//*
let data = {
    2019: {
        11: {
            20: ['массив с данными'],
            21: ['массив с данными'],
        },
        12: {
            25: ['массив с данными'],
            26: ['массив с данными'],
        },
    },
    2020: {
        10: {
            29: ['массив с данными'],
            30: ['массив с данными'],
        },
        11: {
            19: ['массив с данными'],
            20: ['массив с данными'],
        }
    }
};

console.log(data[2020]); //Опять же, всё гениальное просто :(
*/
//потом порешать задачки по этой теме, весьма интересная

                //Конвертация многомерных структур в JavaScript
/*
let users = [
	{
		id: 11,
		name: 'name11',
		surname: 'surname11',
	},
	{
		id: 14,
		name: 'name14',
		surname: 'surname14',
	},
	{
		id: 17,
		name: 'name17',
		surname: 'surname17',
	},
];
let result = {};

for (let user of users) {
	result[user.id] = user;
}

console.log(result);
*//*
let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];
/*
let result = {};
let citys = [];
for(let obj of data){
    result[obj.country] = obj;
    citys[obj.city] = obj;
}
console.log(result);
*//*
let result = {};

for (let elem of data) {
if (result[elem.country] === undefined) {
result[elem.country] = [elem.city];
} else {
result[elem.country].push(elem.city);
}
}

console.log(result);
*/

            //Математические методы в JavaScript
            //Работа со степенью и корнем
/*
console.log(Math.pow(2, 4));
console.log(Math.sqrt(245));
*//*
let arr = [4, 2, 5, 19, 13, 0, 10];
let sumCube = 0;
for (let i = 0; i < arr.length; i++){
    sumCube += arr[i]**3;
}
console.log(sumCube);
console.log(Math.sqrt(sumCube));
*/
                //Работа с функциями округления
/*
let a = Math.sqrt(379);

console.log(Math.round(a));
console.log(a.toFixed(1));
console.log(a.toFixed(2));
*//*
let a = Math.sqrt(587);

let c = Math.floor(a);
let d = Math.ceil(a);
//console.log(a);
//console.log(Math.floor(a));
//console.log(Math.ceil(a));

let b = {"floor": c, "ceil": d};
console.log(b);
*/
                //Нахождение максимального и минимального числа

            //Давайте выведем максимальное значение массива:!!!!!!!!!!!
/*
let arr = [1, 5, 10, 34, 100];
let max = Math.max.apply(null, arr);

console.log(max);
*//*
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
*/
                //Работа с рандомом
/*
        //Получение случайного дробного числа между min и max:
            function getRandomArbitary(min, max) {
	            return Math.random() * (max - min) + min;
            }
*//*
        //Получение случайного целого числа между min и max:
            function getRandomInt(min, max) {
	            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
*//*
function getRandomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100))
*//*
let arr = [];
let max = 100;
let min = 1;
for (let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    
}
console.log(arr);
*/
                //Работа с модулем
/*
let a = -4;
let b = -4;
console.log(Math.abs(a));
console.log(Math.abs(b));
console.log(Math.abs(a) - Math.abs(b));
*/
                //Строковые методы JavaScript
                //Работа с регистром символов
/*
let str = "js"
let strJs = "JS"
console.log(str.toUpperCase());
console.log(strJs.toLowerCase());
*/
            //Работа с substr, substring, slice
/*
let str = 'я учу javascript!';
let strSubstr = str.substr(2, 3);
let strSubstring = str.substring(2, 5);
let strsSlice = str.slice(2, 5);

console.log(strSubstr);
console.log(strSubstring);
console.log(strsSlice);
*/
            //Работа с indexOf
/*
let str =  'abcde';
console.log(str.indexOf('c'));
console.log(str.indexOf('a'));
console.log(str.indexOf('a, 0'));//не понимаю почему он не видит что "а" стоит в начале, пишет -1, хотя должно быть 0
console.log(str.lastIndexOf('a')); //а этот нашел "а" в 0 позиции
console.log(str.indexOf('a', 4));
console.log(str.indexOf("http://"));
console.log(str.lastIndexOf(".html"))
*/
                //Работа с startsWith, endsWith
/*
let str = "http://code.mu/ru/javascript/prime/inbuilt/string/"
console.log(str.startsWith("http"));
console.log(str.endsWith(".html"));
*/
                //Работа с split
/*
let str = '1-2-3-4-5';
let arr = str.split("-");
console.log(arr);
*//*
let str = '12345';
let arr = str.split("");
console.log(arr);
*/
                //Работа с join
/*
let arr = [1, 2, 3, 4, 5];
let str = arr.join("-");
console.log(str);
*/
                    //Методы для массивов в JavaScript
                    //Работа с push, unshift
/*
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
*//*
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);
*/
                //Работа с shift, pop
/*
let arr = ['1', '2', '3', '4', '5', '6'];
let result = [];

while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
	let first = arr.shift();
	let last  = arr.pop();
	
	let str = first + last; // тут будет строка '16', потом '25', потом '34'
	result.push(str);
}

// После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку:
result = result.join('-');
console.log(result);
*//*
let arr = ['js', 'css', 'jq'];
let first = arr.shift();
console.log(first);
*//*
let arr = ['js', 'css', 'jq'];
let last = arr.pop();
console.log(last);
*/
                    //Работа с slice
/*
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(0, 3);
console.log(arr1);
*//*
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(3);
console.log(arr1);
*/
                //Работа с splice
/*
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);
console.log(arr);
*//*
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 3);
console.log(result);
*//*
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, "a", "b", "c");
console.log(arr);
*//*
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(arr.length, 0, "e"); 
console.log(arr);
*/
                    //Работа с indexOf
/*
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));
*/
                    //Практика на использования изученных методов
                        //Регистр символов
/*
let str = 'london';

let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result); // выведет 'London'
*//*
let str = 'london';
let result = str.slice(0) + str.slice(-1).toUpperCase();
console.log(result);
*//*
let str = 'london';
let result = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result);
*//*
let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result);
*/
                //Слова в строке
/*
let str = 'word1 word2 word3';

// Разобьем строку в массив слов:
let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}

// Сольем массив обратно в строку:
let result = words.join(' ');
console.log(result); // выведет 'Word1 Word2 Word3'
*//*
let str = 'var_test_text';
let text = str.split("_");
//console.log(text);
for(let i = 0; i < text.length; i++){
    text[i] = text[i].slice(0, 1).toUpperCase() + text[i].slice(1);
}
let result = text.join("");
console.log(result);
*//*
let str = 'var_test_text';
let text = str.split("_");
//console.log(text);
for(let i = 0; i < text.length; i++){
    text[i] = text[i].slice(0, 1).toUpperCase() + text[i].slice(1);
}
let result = text.join("");
//console.log(result);
let resultLower = result.slice(0,1).toLowerCase() + result.slice(1);
console.log(resultLower);
*/
                    //Переворот строки
/*
let str = '12345';
let result = str.split('').reverse().join('');

console.log(result); // выведет '54321'
*//*
let str = "Я пытаюсь учить js, но я тупенький :(";
//let res = str.split(" ");
//console.log(res);
let result = str.split(" ").reverse().join(" ");

alert(str);
alert(result);
*/

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

                    //Основы работы с пользовательскими функциями в JavaScript
                    //ФУНКЦИИ ААААААААА
/*
function myName () {
    alert("Artem");
}
myName();
*//*
let result = 0;
function sumNumber(){
    for(let i = 1; i <= 100; i++){
        result += i;
        console.log(result);
    }
}
sumNumber();
//console.log(result);
*/
                //Параметры функций в JavaScript
/*
function func (num){
    alert(num ** 3)
}
func(2);
*//*
function number(num){
    if(num > 0){
        alert("+++");
    }else{
        alert("---");
    }
}
number(+2);
*/
                //Несколько параметров
/*
function sumNumber(num1, num2, num3){
    alert(num1 + num2 + num3);
}
sumNumber(1, 2, 3);
*/
                    //Параметры-переменные
/*
let param1 = 1;
let param2 = 2;
let param3 = 3;
function sumNumber (param1, param2, param3) {
    alert(param1 + param2 + param3);
}
sumNumber(param1, param2, param3);
*/
                //Необязательные параметры
            //все необязательные параметры следует писать в конце.
/*
function func(num = 5) {
	alert(num * num);
}
//func(2);//4
//func(3);//9
//func();//25
*//*
function func(num1 = 0, num2 = 0) {
	alert(num1 + num2);
}
//func(2, 3);
//func(3);
func();
*/
                //Инструкция return в JavaScript
/*
function sumCube(num){
    return num ** 3;
}
let result = sumCube(3);
console.log(result);
*/
                //Использование функций в выражении
/*
function sumCube (num){
    return num ** 2;
}
let result = sumCube(3) + sumCube(4);
alert(result);
*/
                //Функции в функциях
/*
function square(num) {
	return num * num;
}

function sum(num1, num2) {
	return num1 + num2;
}
let result = sum(square(2), square(3));
alert(result);
*//*
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let result = round(sqrt(2));
console.log(result);
*//*
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}

let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
alert(result);
*/
                //Тонкое место return
/*
function func(num) {
	return num;
	
	let result = num * num;
	return result;
}

alert( func(3) );
*//*
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num * num;
	}
}

alert( func(10) );
alert( func(-5) );
*//*
function func(num) {
	if (num <= 0) {
		return Math.abs(num); //-5 переделает в 5
	}           //даже без else сработало как в предыдущей
                //иначе 10 * 10 или 10**2
	return num * num;
}

alert( func(10) );
alert( func(-5) );
*/
                //Цикл и return
/*
function func() {
	let sum = 0;
	
	for (let i = 1; i <= 5; i++) {
		sum += i;
	}
	
	return sum;     //важно что бы return был за циклом, тк итерация прервется на 1
}

let result = func();
alert(result); // выведет 15
*//*
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
    }
    return sum;
}

alert( func(5) );
*/
                //Применение return в цикле
/*
function func(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		
		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

let result = func([1, 2, 3, 4, 5]);
alert(result);
*/
/*
function func (num){
    let sum = 0;
    let sumNumber = 0;
    for(let i = 0; i<num.lenght; i++){
        sum = num / 2;
        sumNumber += i
        
        if(sum < 10){
            return sumNumber + i; 
        }
        
    }
    
}
let result = func(40);
console.log(result);
*//* // ёбнутая задача
function func (num){
    let res = 0;
    let i = 0;
    while(true){
        res = num / 2;

        if(res < 10){
            return i + res;
        }
        
        i++;
    }
}
console.log(func(40));
*/
/*
function func() {
	let sum = 0;
	let i = 1;
	
	while (true) { // бесконечный цикл
		sum += i;
		
		if (sum >= 100) {
			return i; // цикл крутится пока не выйдет тут
		}
		
		i++;
	}
}

alert( func() );
*//*
//избавился от лишней переменной
function func(num1, num2) {
	
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
	
}

alert(func(3, 4));
*/
                //Примеры на создание функций в JavaScript
/*
function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
alert(getSum(arr1));
alert(getSum(arr2));
*//*
function getSumCube (arr) {
    let sum = 0;

    for(let elem of arr){
        sum +=elem ** 2;
    }
    return sum;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
alert(getSumCube(arr1));
alert(getSumCube(arr2));
*//* //не знаю насколько верное это решение, но я смог придумать только такое
    //надеюсь потом смогу понять, что я тут делал
    //мне кажется, что все преобразования должны быть в функции
function getDigitsSum (newArr1){
    let sum = 0;
    for(let elem of newArr1){
        sum += Number(elem);
    }
    return sum;
}

let arr = 12;
let newArr = String(arr);
let newArr1 = newArr.split('');
console.log(getDigitsSum(newArr1));
*//*
function getDivisors (num){
    let arr = [];
    for(let i = 1; i <= num; i++){

        if(num % i == 0){
            arr += i 
        }
    }
    return arr;
}

let num = 24;
console.log(getDivisors(num))
*//*
function reverseStr (str){
    return str.split("").reverse().join("");
}

let str = "оготэ с еуха в ,беаблод йокак цедзип я";
alert(str);
alert(reverseStr(str));
*//*
function delElem (num, arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != num){
            arr1.push(arr[i]);
            
        }
        //почему то не рабтает, хоть и сделана правильно, ну это моя удача
    }
    return arr1;
}
let arr = [1, 2, 3, 4, 1 ,1 ,1 ,1];
let num = 1;
console.log(delElem(num, arr))
*//*
function delElem(a,arr){ let brr=[];
    for(let i=0;i<arr.length;i++){ if(arr[i]!=a){
    brr.push(arr[i]); } } return brr; }
    let arr=[-1,1,0,5,2,1]; let a=1; console.log(delElem(a,arr))
*//*
    //мне показалось или это было просто???????????????
function getNumber (num){
    let arr = [];
    let i = 0;
    while(i < num){
        i++;
        arr.push(i);
    }
    return arr;
}
console.log(getNumber(6))
*//*
function getNumberParametr (num1, num2){
    let arr = [];
    for(let i = num1; i <= num2; i ++){ //кароч, нужно быть осторожным с методом .length!!!!!!!!
         arr.push(i)        //он мне чуть жизнь не сломал((((()))))
    }
    return arr;
}
console.log(getNumberParametr(1, 4));
*/
                //Флаги в функциях JavaScript
/*
function isPrime(num) {
	let flag = true;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			flag = false;
			break;
		}
	}
	
	return flag;
}
console.log( isPrime(10) );
console.log( isPrime(31) );
*//*
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}
console.log( isPrime(10) );
console.log( isPrime(31) );
*/
                //Проверка по массиву
/*
function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}
	
	return true;
}
*//*
function numEven(arr){
    for(let elem of arr){
        if(elem % 2 != 0){
            return false;
        }
    }
    return true;
}

let arr = [1, 2, 4, 6, 8, 10];
console.log(numEven(arr));
*//*
function numEven(num){
    let arr = String(num).split("");
    for(let elem of arr){
        if(elem % 2 != 0){
            return true;
        }
    }
    return false;
}

let num = 4444;
console.log(numEven(num));
*//*
function func(arr){
    for(let i = 1; i < arr.length - 1; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i - 1] == j && arr[i] == j){ //не понял, зачем [i-1]
                return true;
            }
        }
    }
    return false;
}
console.log(func([1,2,2,3,3,4,5,6]));
*/
                //Логические операторы без if в функциях JavaScript
        //не знаю зачем это, видимо что бы сократить код, но будет ли он понятен потом
/*
function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
*//*
function func (a, b){
    return a == b;
}
console.log(func(10, 9));//false
//в принципе суть я понял
*//*
function func (a, b){
    return a != b;
}
console.log(func(1, 1)); // false
*//*
function func (a, b) {
    return a + b >= 10;
}
console.log(func(1, 10)); //true
*//*
function func (num) {
    return num >= 0;
}
console.log(func(-10));
*/
                //Правильное использование функций JavaScript
/*
let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];

for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) {
		result.push(elem);
	}
}

console.log(result);

function checkDigitsPairsSum(num) { //функция на проверку суммы значении [0]+[1] и [2]+[3]
	let str = String(num); //преобразование к строке, что за num??
	let sum1 = Number(str[0]) + Number(str[1]);//сумма
	let sum2 = Number(str[2]) + Number(str[3]);
	
	return sum1 == sum2;//сокращение от if, возвращает сумму
}
*//*
let arr = [];
for(let i = 1; i <= 100; i++){
    if(isPrime(i)){
        arr.push(i);
    }
}

console.log(arr);

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}
*//*
let arr = [];
for(let i = 1; i <= 2030; i++){
    if(getDigitsSum(i) == 13){
        arr.push(i);
    }
}

console.log(arr);

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
*//*
let nums = [123, 456, 789];

let result = [];
for (let num of nums) {
	result.push(String(num).split('').reverse().join(''));
}

console.log(result); // выведет [321, 654, 987]
*/
/*
function reverseNums (nums){ //попытка 1
    result = [];
    result.push(String(nums).split('').reverse().join(''));
    return result;
}
let nums = [123, 456, 789];
console.log(reverseNums(nums));
*//*
let nums = [123, 456, 789];
let result = [];

for (let elem of nums) {
	if(reverseNum(elem));
}

console.log(result);

function reverseNum (num){
    result.push(String(num).split('').reverse().join(''));
    return result;
}
//console.log(result); // выведет [321, 654, 987];
*//*
let nums = [123, 456, 789];
let result = [];
for (let elem of nums) {
if(Digitsrevers(elem));}
console.log(result)
function Digitsrevers(num) {
var arr = result.push(String(num).split('').reverse().join(''));
return arr;
}
*//*
let num1 = 234;
let num2 = 531;

let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {
	digitsSum1 += Number(digit1);
}

let digits2 = String(num1).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {
	digitsSum2 += Number(digit2);
}

if (digitsSum1 == digitsSum2) {
	alert('суммы цифр совпадают');
} else {
    alert('суммы цифр не совпадают');
}
*//*
for(let digitSum1 of digitSum2){
    if(digitSum1 == digitSum2){
        alert('суммы цифр совпадают');
    } else {
        alert('суммы цифр не совпадают');
    }
}
*/
/*
function sumDiditsNum (num1, num2){
    let str = String(num1).split('');
    let digitSum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let str = String(num2).split('');
    let digitSum2 = Number(str[0]) + Number(str[1]) + Number(str[2]);

    return digitSum1 == digitSum2;
}

let num1 = 234;
let num2 = 531;
console.log(sumDiditsNum(1120, 4000))
*//*
function checkDigitsSum(num1, num2) {
    let digits1 = String(num1).split('');
    let digits2 = String(num2).split('');
    let digitsSum1 = 0;
    let digitsSum2 = 0;
    for (let elem of digits1) {
    for (let elem1 of digits2){
    digitsSum1 += Number(elem);
    digitsSum2 += Number(elem1);}}
    return digitsSum1 == digitsSum2;}
    console.log(checkDigitsSum(234,531 ));
*//*
let nums = [12, 24, 35, 14];

for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}


function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
}
*/
            //Комбинация вспомогательных функций JavaScript
/*
function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

function getSquare(num) {
	return num * num;
}
console.log( getSquare(getSum([1, 2, 3, 4, 5])) );
*//*
function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}

function getDigits(num) {
	return String(num).split('');
}

console.log(getSum(getDigits(12345)));
*/
/*
console.log( getAvg(getDivisors(24)) );

// Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum / arr.length;
}


// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
            result.push(i); 
		}
    }
    return result
}
console.log(getDivisors(24));
*/
            //Вспомогательные функции внутри других функций в JavaScript

