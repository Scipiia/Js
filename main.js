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
/*
function func(num){
    let sum = 0;
    for(let i = num; i < num.length; i--){
        sum += num[i]/2;

        if(i<10){
            return sum[i] 
        }
        
    }
    
}
let result = func(50);
console.log(result);
*/
/*
let num = 50;
let sum = 0;
while(num/2 < 10){
    sum +=i;
    if(num / 2 < 10){
        return i
    }
}
*/
/*
for (let i = 2; i < a; i++) {
    if (a % i == 0) {
        flag = false;
        break;
    }
}
console.log(flag);
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
function square (arr){
    let sum = 0;
    for(let elem of arr){
        sum +=elem**2
        
    }
    return sum;
}
let arr = [1, 2, 3, 4];
console.log(square(arr));
*//*
function getDigitsSum (num){
    num = String(num).split('')
    let sum = 0;
    for(let elem of num){
        sum += Number(elem)
    }
    return sum
}

let num = 12;
console.log(getDigitsSum(num));
*//*
function getDivisors (num){
    let arr = [];
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            arr.push(i)
        }
        
    }
    return arr
}

let num = 24;
console.log(getDivisors(num));
*//*
function getDivisors (str){
    return str = str.split('').reverse(str).join('');
}
let str = "цепак"
console.log(getDivisors(str));
*//*
function delElem (num, arr){
    let arr1 = [];
    for(let elem of arr){
        if(num != elem){
            arr1.push(elem)
        }
    }
    return arr1
}
let num = 2;
let arr = [1, 2, 3, 4];
console.log(delElem(num, arr));
*//*
function getArr (num){
    let arr = [];
    let i = 0;
    while(i < num){
        i++;
        arr.push(i);
    }
    return arr;
}
let num = 5;
console.log(getArr(num));
*//*
function getArr (num1, num2){
    let arr = [];
    for(let i = num1; i <= num2; i++){
        arr.push(i)
    }
    return arr
}
let num1 = 3;
let num2 = 7;
console.log(getArr(num1, num2));
*/
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
console.log(isPositive([1, -2, 3, 4, -5])); // выведет false
console.log(isPositive([2, 4, 4, 6])); // выведет true
*//*
function isPositive (arr){
    for(let elem of arr){
        if(elem % 2){
            return false;
        }
    }
    return true;
}
*//*
function isPositive(num){
     let str = String(num).split('')
     //console.log(str)
     for (let elem of str){
         if(elem % 2 !== 0){
             return true;
         }
     }
     return false;
}
let num = 21;
console.log(isPositive(num))
*/
/*
console.log(isPositive([2, 4, 6]));

function isPositive (arr){
    for(let i = 0; i < arr; i++){
        for(let j = 0; j < arr; j++){
            if(arr[i] === arr[j-1]){
                return false;
            }
        }
    }
    return true;
}
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

function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);

	return sum1 == sum2;
}
*//*
let result = [];
for (let i = 1; i <= 100; i++){
    
    if(isPrime(i)){
        result.push(i)
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(result));
console.log(result);
*//*
let result = [];
for(let i = 1; i <= 2030; i++){
    if(getDigitsSum(i) === 13){
        result.push(i);
    }
}
console.log(result);

function getDigitsSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        sum += Number(digit);
    }

    return sum;
}
let num = 13;
console.log(getDigitsSum(num))
*/
/*
let nums = [123, 456, 789];

let result = [];
for (let num of nums) {
    result.push(numberReverse(num));
}

console.log(result); // выведет [321, 654, 987]

function numberReverse (num){
    return String(num).split('').reverse().join('');
}
console.log(numberReverse(123));
*/

//let num1 = 2343;
//let num2 = 531;
/*
let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {
    digitsSum1 += Number(digit1);
}

let digits2 = String(num2).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {
    digitsSum2 += Number(digit2);
}

if (digitsSum1 == digitsSum2) {
    alert('суммы цифр совпадают');
} else {
    alert('суммы цифр не совпадают');
}
*/
/*
if(sumNumber(num1) === sumNumber(num2)){
    console.log("da");
} else{
    console.log("net");
}

function sumNumber(num){
    let str = String(num).split('');
    let sum = 0;
    for(let elem of str){
        sum += Number(elem);
    }
    //console.log(sum)
    

    return sum
}

console.log(sumNumber(22));
*//*
let nums = [12, 24, 35, 14];

for (let num of nums) {
    console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
    let result = [];

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result.push(i); //тут ошибка была (num заменил на i)                    
        }                    //зачем нам заполнять числом, которое должно быть разделено
    }

    return result;
}
console.log(getDivisors(12));
*/

                    //Вспомогательные функции внутри других функций в JavaScript
/*
let arr = [12, 19, 28, 13, 14, 345];
let result = [];

function inRange(num) {
    let sum = getSum(getDigits(num));
    return sum >= 1 && sum <= 9;
}

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

for (let elem of arr) {
    if (inRange(elem)) {
        result.push(elem);
    }
}

console.log(result);
*/
            //Дружественные числа на JavaScript
/*
function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));

	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
    let arr = [];
    for(let i = 1; i < num; i++){
        if(num % i == 0){
            arr.push(i)
        }
    }
    return arr
}
console.log(getOwnDivisors(220));
console.log(getOwnDivisors(284)); //разделил число на массив друж чисел


function getSum(arr) {
    let sum = 0;
    for(let elem of arr){
        sum += elem
    }
    return sum;
}
console.log(getSum([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]));
console.log(getSum([1, 2, 4, 71, 142])); //проверил 2 всп функцию, нашел сумму массива

let sum1 = getSum(getOwnDivisors(220));
let sum2 = getSum(getOwnDivisors(284));

console.log(isFreindly(220, 284)); //yes


function getFreindly (num3, num4){
    let arr = [[]];

}
*/

                //Пересечение массивов на JavaScript
/*
function getInt(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }

    return result;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}   //ниже аналог
        //function inArray(elem, arr) {
        	//if (arr.indexOf(elem) == -1) {
	       // 	return false;
	       // } else {
		   //     return true;
	       // }
       // }

console.log(getInt([1, 2, 3], [2, 3, 4, 5]));
*/
                    //Разность массивов на JavaScript
/*
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

function inArray(elem, arr) {
        	if (arr.indexOf(elem) == -1) {
	       	return false;
	        } else {
		        return true;
	        }
       }
*/
/*
let result = [];

for (let elem of arr1) {
    if (!inArray(elem, arr2)) { //НЕ МОГУ ОПНЯТЬ, ЗАЧЕМ "!" ЗНАК ПЕРЕД ФУНКЦИЕЙ
        result.push(elem);
    }
}

console.log(result); // выведет [1]
*//*
function getDiff(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (!inArray(elem, arr2)) {
            result.push(elem);
        }
    }

    for (let elem of arr2) {
        if (!inArray(elem, arr1)) {
            result.push(elem);
        }
    }

    return result;
}

console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); // выведет [1, 4, 5]
*//*
//окончательный код
function getDiff(arr1, arr2) {
    let diff1 = getFirstDiff(arr1, arr2);
    let diff2 = getFirstDiff(arr2, arr1);

    return [].concat(diff1, diff2); //concat возвращает массив из разности arr1 и arr2
}

function getFirstDiff(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (!inArray(elem, arr2)) { //рохоже что ! знак служит для того, что бы пушить
            result.push(elem);      // элементы которые не совпадают в массивах, я так думаю
        }
    }

    return result;
}

function inArray(elem, arr) {  //проверка на то, какие элементы совпадают в массивах
    return arr.indexOf(elem) !== -1;
}

console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); // выведет [1, 4, 5]
*/
                    //Наибольший общий делитель на JavaScript
    //СДЕЛАЛ КАКУЮ ТО ЕРУНДУ КУСКАМИ, КУСКИ РАБОТАЮТ, НО НЕ ЗНАЮ КАК ВСЁ ЭТО СОБРАТЬ:)
/*
console.log(getGreatestCommonDivisor(12, 18));

function getGreatestCommonDivisor (num1, num2){ //не знаю, как собрать все доп функции в одну, не могу понять
    let result = getFirstDiff(getArr(num1), getArr(num2))
    return result;  //не знаю, это помоему даже хуже костыля, просто затычка какая то
}

function getArr(num){
    let result = [];
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            result.push(i);
        }
    }
    return result;
}

console.log(getArr(12));
console.log(getArr(18));

function inArray (elem, arr){
    if(arr.indexOf(elem) == -1){
        return false
    } else {
        return true
    }
}
console.log(inArray(1, [1, 2, 3, 6, 9, 18]));

function getFirstDiff(arr1, arr2) {
    let result = [];
    for(let elem of arr1){
        if (inArray(elem, arr2)){
            result.push(elem);
        }
    }
    //return result;
    return Math.max.apply(null, result); //ну это подсмотрено
}

console.log(getFirstDiff(getArr(12), getArr(18)));//хм хм, при вызове можно подставить функцию

//let num1 = 12;
//let num2 = 18;
*/
/*
function getArr(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(getArr(2));
console.log(getArr(5));

function inArray(elem, arr) {
    if (arr.indexOf(elem) == -1) {
        return false
    } else {
        return true
    }
}
console.log(inArray(1, getArr(5)));

function getFirstDiff(arr1, arr2) {
    let result = [];
    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result == 1; // тоже подсмотрел 
}
//true - числа взаимно простые, false - не взайимно простые
console.log(getFirstDiff(getArr(2), getArr(5)));
*/
                //Случайный элемент из массива на JavaScript
/*
function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
    let sum = 0;
	let key = getRandomInt(0, arr.length - 1);
	for(let i = 0; i < 3; i++){
        sum += arr[key];
        return sum;
    }
}

    //упростим
       // function random(arr) {
	   //     return arr[getRandomInt(0, arr.length - 1)];
       // }


let arr = [1, 1, 1, 1, 1];
console.log(random(arr));
*/
                //Перемешивание массива на JavaScript
/*
function shuffle(arr) {
	let result = [];

	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}

	return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(shuffle([1, 2, 3, 4, 5]));
*//*
function range (num1, num2){
    let result = [];
    for(let i = num1; i <= num2; i++){
        let random = getRandomInt(num1, num2);  //рандом массив
        result.push(random);                    //можно было и просто массив от 1 до 5
    }
    return result;
}
console.log(range(1, 5))
let num1 = 1;
let num2 = 5;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/
                //Случайные элементы из массива на JavaScript
/*
function randoms(arr, length) {
	return first(shuffle(arr), length);
}

function first(arr, length) {
	return arr.slice(0, length);
}

function shuffle(arr) {
	let result = [];

	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}

	return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randoms([1, 2, 3, 4, 5], 3));
*/
                //Счастливые билеты на JavaScript
/*
console.log(getLuckyTickets());

function getLuckyTickets() {
	let result = [];

	for (let i = 1001; i <= 999999; i++) {
		if (isLucky(i)) {
			result.push(i);
		}
	}

	return result;
}

function isLucky(num) {
	let str = normalizeNum(num);

	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

	return sum1 == sum2;
}

function normalizeNum(num) {
	let str = String(num);

	if (str.length == 5) {
		str = '0' + str;
	}
	if (str.length == 4) {
		str = '00' + str;
	}

	return str;
}
*/

                    //ПРОДВИНУТАЯ ТЕОРИЯ ФУНКЦИИ

                    //Область видимости переменных в функциях JavaScript
//Переменные, объявленные снаружи функции, называются глобальными.
//Если в одной из функций произойдут изменения с глобальной переменной, 
//то эта переменная поменяется во всех функциях, использующих эту переменную:
/*
function func() {
    alert(num);
}

let num;

num = 1;
func(); //сначала выведет 1

num = 2;
func(); //потом 2
*/

                //Локальные переменные
/*
function func() {
    let num = 5;
    return num;
}

alert(func());
*/
                //Одноименные локальные и глобальные переменные
/*Тут может быть две ситуации: или мы действительно хотели поменять глобальную переменную (тогда все ок), или мы забыли let и случайно поменяли глобальную переменную.

Второй случай является трудноуловимой ошибкой, ведущей к непредсказуемому поведению скрипта. Поэтому всегда, вводя новую переменную объявляйте ее через let.
*//*
let num = 1;

function func() {
    let num = 2;
}
func();

alert(num); //1
*/
//Учтите, что глобальная переменная будет меняться только в момент вызова функции. Если вызова функции нет - переменная не изменится:
/*
let num = 1;

function func() {
    num = 2;
}

alert(num); // выведет 1
func(); // меняем переменную
alert(num); // выведет 2
*//*
let num = 1;

function func() {
    num++;
}

func();
func();
func();
alert(num); //4
*//*
function func() {
    num = 2;
}

let num = 1;
alert(num); //1
func();
*//*
function func() {
    num = 2;
}

let num = 1;
func();
alert(num); //2
*/
                    //Область видимости и параметры функций JavaScript
/*
function func(localNum) {
	alert(localNum); //выдаст 1, тк параметр локальный и алерт расположен внутри функции
}

func(1);
*//*
function func(localNum) {
    alert(localNum); // 1
}

let num = 1;
func(num);
*//*
function func(localNum) {
    alert(localNum);
}

let num = 1;
func(num);
num = 2;
*//*
let num = 1;

function func(localNum) {
    alert(localNum);
}

num = 2;
func(num);
*//*
function func(localNum) {
    localNum = 2;
}

let num = 1;
func(num);
alert(num);
*//*
function func(localNum) {
    num = 2;
}

let num = 1;
func(num);
alert(num);
*//*
function func(localNum) {
    let num = 2;
}
let num = 1;
func(num);
alert(num);
*/
                    //Одноименные параметры
/*
function func(num) {
	num = 2;
}

let num = 1;
func(num);
alert(num); //1
*//*
function func() {
    num = 2;
}

let num = 1;
func();
alert(num);
*//*
function func() {
    let num = 2;
}

let num = 1;
func();
alert(num);
*/

                        //Исходный код функции и ее результат в JavaScript
/*
function func() {
	return '!';
}

alert(func); //выведет код функции 
*/
                        //Функция как переменная в JavaScript
/*
function func (){
    let str = "zzz zz z";

    return str;
    
}
func = 1234;      
alert(func);
*/
                        //Запись функции в другую переменную
/*
function func() {
	alert('!');
}

let test = func; // теперь test такая же функция, как и func

// Проверим:
test(); //выведет '!'
func(); //выведет '!'
*//*
function func1 (){
    let num = 3;
    return num;
}
//alert(func1())

let func2 = func1;

alert(func1() + func2()); //6
*/
                    //Присваивание функций в переменные при создании
/*
let func1 = function(){
    let num = 1;
    return num;
};

let func2 = function(){
    let num = 2;
    return num;
}

alert(func1() + func2());
*/
                    //ВАЖНЫЙ НЮЯАНС
/*
function func() {
	return '!';
}

func = 'string'; // затрем переменную с функцией строкой
func(); // получим ошибку, тк func - не функция

Из описанного выше следует, что существование переменной и функции с одинаковым именем легко может привести к проблеме.
В следующем примере функция func будет затерта и вместо нее станет строка 'string':

Чтобы такого не происходило, следует придерживаться правила, общего для всех языков программирования: функции должны быть глаголами, а переменные - существительными.
*/
                    //Function expression и Function declaration в JavaScript
/*
Function Declaration (объявление функции)

function func() {
	alert('!');
}

func(); // выведет '!'
*//*
Function Expression (функциональное выражение).

let func = function () {
    alert('!');
};

func(); // выведет '!'
*/
                    //Разница
/*
// Обращаемся к функции до ее объявления:
func(); //выведет '!'

function func() {
	alert('!');
}
*//*
func(); //ошибка, такой функции еще нет!

let func = function () {
    alert('!');
};
*/
                    //Точка с запятой
/*
let func1 = function() {alert('!')};
let func2 = function() {
	alert('!')
};
function func3() {
	alert('!')
}
*/
                    //Как проверить тип функции
/*
test(); // выведет ошибку в консоль, значит Function Expression

let test = function() {
	alert('!');
}

func(); // выведет '!', значит Function Declaration

function func() {
	alert('!');
}

func(); // выведет ошибку в консоль, значит Function Expression

+function func() {
	alert('!');
}
*//*
test();

let test = function func() {    //expression
    alert('!');
}
*//*
func();

alert( 
    function func() {   //expression
        alert('!');
    }
);
*//*
func();

+function func() {      //expression
    alert('!');
}
*//*
func();

function func() {       //declaration
    alert('!');
}
*/
                //Более сложные нюансы
/*
func();

1
function func() {       //declaration
	alert('!');
}
*//*
func();

-1-
function func() {     //expression
    alert('!');
}
*//*
func();

function func() {  //declaretion
    alert('!');
} + alert('!');
*/
                //Массив с анонимными функциями в JavaScript
/*
let arr = [
	function() {alert('1')},
	function() {alert('2')},
	function() {alert('3')},
];

for (let func of arr) {
	func(); // вызываем наши функции в цикле
}
*//*
let arr = [
    function () { return num = 1},
    function () { return num = 2},
    function () { return num = 3},
];

console.log(arr[0]() + arr[1]() + arr[2]());

for (let func of arr){
    
    alert(func()); //вызываем функции в цикле и выводим на экран
}
*/
                //Объект с анонимными функциями в JavaScript
/*
let obj = {
	func1: function() {alert(1)},
	func2: function() {alert(2)},
	func3: function() {alert(3)},
};

obj.func1(); // выведет 1
*//*
let obj = {
    func1: function () { return 1 },
    func2: function () { return 2 },
    func3: function () { return 3 },
};
console.log(obj.func1() + obj.func2() + obj.func3());

for( let func in obj){
    alert(obj[func]())
}
*//*
let obj = {
    func1: function(arr){let sum = 0; for(let i = 0; i < arr.length; i++){sum += arr[i]} return sum},
    func2: function(arr){let sum = 0; for(let i = 0; i < arr.length; i++){sum += arr[i] ** 2} return sum},
    func3: function (arr) { let sum = 0; for (let i = 0; i < arr.length; i++) { sum += arr[i] ** 3 } return sum},
};

let arr = [1, 2, 3];

console.log(obj.func1(arr));
console.log(obj.func2(arr));
console.log(obj.func3(arr));
*//*                        //шпоргалка
function sunNam(arr){
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        summ += arr[i];
        
    }
    return summ
}
console.log(sunNam(arr))
*/
                        //Передача функций параметрами в JavaScript
/*
test(
	function() {return 1;},
    function() {return 2;},
    function() {return 3;}
);

function test(func1, func2, func3) {
    alert(func1() + func2() + func3() ); // выведет 6
}
*/
                        //Именованные функции
/*
function get1() {
	return 1;
}
function get2() {
	return 2;
}

test(get1, get2); // выведет 3

function test(func1, func2) {
	alert( func1() + func2() );
}
*/
//Переделаем на Function Expression:
/*
let get1 = function () {
    return 1;
}
let get2 = function () {
    return 2;
}

test(get1, get2); // выведет 3

function test(func1, func2) {
    alert(func1() + func2());
}
*//*
function get1() {
    return 1;
}
function get2() {
    return 2;
}
function get3() {
    return 3;
}
test(get1, get2, get3);

function test(func1, func2, func3){
    alert(func1() + func2() + func3());
}
*//*   //declaretions
function func1() {
    return 1;
}
function func2() {
    return 2;
}
function func3() {
    return 3;
}
test(func1, func2, func3);

function test(func1, func2, func3) {
    alert(func1() + func2() + func3());
}
*//*      //expression
let func1 = function () {
    return 1;
}
let func2 = function () {
    return 2;
}
let func3 = function () {
    return 3;
}
test(func1, func2, func3);

function test(func1, func2, func3) {
    alert(func1() + func2() + func3());
}
*/
                    //Параметры передаваемых функций
/*
test(function(num) {
	return num * num * num;
});

function test(func) {
	alert(func(3));
}
*//*  //Function Declaration
function func(num){
    return num**3
}

test(func);

function test(func) {
    alert(func(3));
}
*//*          //Function Expression
let func = function (num) {
    return num ** 3
}

test(func);

function test(func) {
    alert(func(3));
}
*//*
function func(num1, num2 ) {
    return num1 + num2
}

test(func);

function test(func) {
    alert(func(2, 3));
}
*/
                    //Передадим и число параметром
/*
function test(num, func) {
    alert(func(num));
}

// Найдем квадрат числа:
test(2, function (num) {
    return num * num; // возвращает квадрат
});

// Найдем куб числа:
test(2, function (num) {
    return num * num * num; // возвращает куб
});
*//*
function test(num, func1, func2) {
    return func1(num) + func2(num);
}

alert(test(3, func1, func2,))

function func1(num) {
    return num ** 2;
}
function func2(num) {
    return num ** 3;
}
*/
                    //Применение
/*
function test(arr, func) {
	// вернем измененный массив
}

function test(arr, func) {
	// Запускаем цикл:
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]); // применяем функцию к каждому элементу
	}

	return arr; // возвращаем измененный массив
}
*//*      //Применим нашу функцию к какому-нибудь массиву:
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

// Преобразуем массив чисел в массив их квадратов:
let result = test(
    [1, 2, 3],
    function (num) { return num * num; }
);

console.log(result); // выведет [1, 4, 9]
*//*          //Оформим вызов нашей функции изящнее(так более принято):
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

// Оформим код изящнее:
let result = test([1, 2, 3], function (num) {
    return num * num;
});

console.log(result); // выведет [1, 4, 9]
*/
                //Именованные функциональные выражения в JavaScript
/*
let test = function func() {
    alert('!'); // выводим '!'
    func(); // вызываем сами себя
};

test();
*//*
let test = function func() {
    alert('!');
    test(); // вызываем сами себя
};

test();
*/
                //Функция в функции в JavaScript
/*
function func(num1, num2) {
    function square(num) {
        return num * num;
    }

    return square(num1) + square(num2);
}

alert(func(2, 3)); // выведет 13
*//*
function func(num1, num2) {
    function square(num) {
        return num ** 2;
    }
    function cube(num) {
        return num ** 3;
    }

    return square(num1) + cube(num2);
}

console.log(func(1, 2));
*/
                    //Функция в функции и область видимости переменных в JavaScript
/*
function test() {
    let num = 1; // переменная внешней функции

    function func() {
        alert(num); // выведет 1
    }

    func(); // вызываем внутреннюю функцию
}

test(); // вызываем внешнюю функцию
*//*
let num = 1; // глобальная переменная

function test() {
    function func() {
        alert(num); // выведет 1
    }

    func(); // вызываем внутреннюю функцию
};

test(); // вызываем внешнюю функцию
*//*
function test() {
    let num = 1;

    function func() {
        alert(num);
    }
    func()          //без вызова функции не выводит num(1)
}

test();             //и без вызова внешней функциии не выводит num(1)
*//*
function test() {
    let num;

    function func() {
        alert(num);
    }

    num = 1 //сначала 1
    func();

    num = 2 //потом 2 потому что 2 вызова функции
    func();
}

test();
*/
                    //Параметры
/*
function test(num) {
    function func() {
        alert(num); // выведет 1
    }

    func(); // вызываем внутреннюю функцию
};

test(1); // передаем параметром число
*//*
function test(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    alert(localNum); //ошибка, я так понимаю, внутреннюю функцию нельзя вызвать во внешней
}

test(1);
*/
                    //Одноименные параметры
/*
function test(num) {
    function func(num) {
        num = 2; // меняем локальную переменную num
    }

    func(num);
    alert(num); // выведет 1 - ничего не поменялось
}

test(1);
*//*
function test(num) {
    function func(num) {
        // тут нельзя получить доступ в внешней переменной num
    }

    func(num);
}
test(1);
*//*
function test(num) {
    function func(num) {
        alert(num);
    }

    func(num);
    num = 2;
}

test(1);
*/
                    //Функция, возвращающая функцию в JavaScript
/*
function func() {
    return function () {
        return '!';
    };
}
*//*
let result = func(); // в переменной result будет функция
alert(result); // выведет 'function() {return '!';}'

function func() {
    return function () {
        return '!';
    };
}

let result = func();
alert(result()); // выведет '!'
*//*
function func() {
    return function () {
        return '!';
    };
}

alert(func()()); // выведет '!'
*//*
function func1() {
    return function() {
        return 1;
    };
}

function func2() {
    return function () {
        return 2;
    };
}

function sumFunc(){
    return func1()() + func2()();
}

alert(func1()());
alert(func2()());
alert(sumFunc());
*/
                    //Любой уровень вложенности
/*
function func() {
    return function () {
        return function () {
            return '!';
        };
    };
}

alert(func()()()); // выведет '!'
*/
                    //Параметры
/*
function func(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

alert(func(1)(2)); // выведет 3
*//*
function func(num1) {
    return function(num2){
        return function(num3){
            return num1 + num2 + num3;
        };
    };
}
console.log(func(2)(3)(4));
*//*
function func(num1){
    let arr = [];
    return function (num2){
        return function (num3){
            return function (num4){
                return function(num5){
                    return arr.push(num1, num2, num3, num4, num5);
                };
            };
        };
    };
    
}
console.log(func(2)(3)(4)(5)());
*/
                    //Лексическое окружение функций в JavaScript
/*
let num = 1; // функция в этот момент узнает, что num = 1
func(); // выведет 1

function func() {
    alert(num);
}

func(); // выведет 1
num = 2; // функция в этот момент узнает, что num = 2
func(); // выведет 2
        ///Еще раз: на самом деле функция знает значения внешних переменных, даже не будучи вызванной.
*/
                    //Лексическое окружение
/*
let num1 = 1;
let num2 = 2;

function func() {
    // функция знает про переменные num1 и num2
}
*//*
let num1 = 1; // окружение {num1: 1}
let num2 = 2; // окружение {num1: 1, num2: 2}

// Поменяем переменную num1:
num1 = 123; // окружение {num1: 123, num2: 2}

function func() {

}
*//*
Когда мы пытаемся обратится к какой - либо переменной внутри функции, эта переменная вначале ищется среди 
локальных переменных функции и, если такой переменной там нет, то ищется в лексическом окружении функции.
*//*
function test() {
    let num = 1;

    return function () {
        return num;
    }
}

let num = 2;
let func = test();
alert(func()); //1!!!!!
*/
                    //Замыкания в JavaScript
/*
function test() {
    let num = 1;

    return function () {
        alert(num);
    }
}

let func = test();
func(); // выведет 1
В данном случае и можно сказать, что функция func получает значение переменной num из замыкания.
Также можно сказать, что функция func хранит значение переменной num в замыкании.
*/
                    //Счетчик на замыканиях
/*
function test (){
    let num = 3;

    return function (){
        if(num != -1){    //зачем тут "!" ???
            alert(num);
            num--;
        } else {
            alert("the end");
        }
    };
};

let func = test()
func();
func();
func();
func();
func();
func();
*//*
function func() {
    let num = 0;

    return function () {
        alert(num);
        num++;
    };
};

let test = func;

test()();
test()();
test()();
*//*
let counter = 0;

function test() {
    return function () {
        alert(counter);
        counter++;
    };
};

let func = test;

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
*//*
function test() {
    let counter = 0;

    return function () {
        return function () {
            alert(counter);
            counter++;
        };
    };
};

let func = test()();

let func1 = func;
let func2 = func;
func1();
func2();
func1();
func2();
*//*
function test() {
    let counter = 0;

    return function () {
        return function () {
            alert(counter);
            counter++;
        };
    };
};

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
*/
                //Вызов функции на месте в JavaScript
/*
+function() {
	alert('!'); // выведет '!'
}();  //() что бы сразу вызвать функцию на месте и не присваивать её переменной
*/
                //Присваивание в переменную
/*
+function() {
	return '!';
}();

let result = function() {
	return '!';
}();

alert(result); // выведет '!'
*//*
let result = function () {
    return '!';
};

alert(result());
*/
                //Применение вызова на месте
/*
let result = function() {return 1;}() + function() {return 2;}();
alert(result);
*/
                //Круглые скобки
/*
(function() {
	alert('!');
})();
*//*
let result = (function () {
    return '!';
});

alert(result());
*/
                //Параметры
/*
(function(str) {
	alert(str); // выведет '!!!'
})('!!!');
*//*
(function (num1, num2) {
    alert(num1 + num2);
})(1, 2);
*/
                //Несколько скобок
/*
(function() {
	return function() {
		alert('!');
	};
})()(); // выведет '!'
*//*
(function () {
    return function(){
        alert("!");
    }
})()()();
*//*
(function (num1) {
    return function (num2){
        alert(num1 + num2);
    }
})(1)(2);
*//*
(function (num1) {
    return function (num2){
        return function (num3){
            alert(num1 + num2 + num3);
        }
    }
})(1)(2)(3);
*/
                //Подводные камни
/*
let result = 1
+function() {
	return 2;
}();

alert(result); //3  попробуй потом сам догадаться 

let result = 1;
+function() {
	return 2;
}();

alert(result); //1 а сейчас я понял почему
*/
                //Точка с запятой для безопасности
/*
let num = 1 

(function() {   //продолжение num = 1
	alert(num); // выдаст ошибку
})();
*//*
let num = 1

; (function () {  //; перед функцией, что бы избежать ошибок
    alert(num); // выведет 1
})();
*/
                //Замыкания и вызов функции на месте в JavaScript
/*
let func = (function() {
	let num = 1;

	return function() {
		alert(num);
		num++;
	}
})();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func(); //выведет 5
*//*
let func = (function () {
    let num = 1;

    return function () {
        alert(num);
        num++;
        if(num == 6){
            num = 1;
        }
    }
})();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func(); //выведет 5
func();
func();
func();
func();
func();
func();
*/
                    //Сравнение с предыдущим способом
/*
Давайте сравним наш счетчик со счетчиком на замыканиях, который мы делали ранее:

function test() {
	let num = 1;

	return function() {
		alert(num);
		num++;
	}
}

let func = test();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func(); //выведет 5
Как вы видите, наш новый способ проще: в переменную сразу 
попадает готовый счетчик, в отличие от старого способа, в котором у нас появляется дополнительная функция test.
Кроме того, в старом способе можно создать несколько счетчиков:

function test() {
	let num = 1;

	return function() {
		alert(num);
		num++;
	};
};

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2
В новом способе получится только один уникальный счетчик. 
Если вам действительно нужен только один счетчик, то удобно 
использовать новый способ: так вы обезопасите себя от случайного 
создания нескольких счетчиков.
*/
                //Понятие функции-коллбэка в JavaScript
/*
let result = each([1, 2, 3, 4, 5], function (num) {
    return num * num;
});

console.log(result); // должно вывести [1, 4, 9, 16, 25]    



function each(arr, callback) {
	let result = [];

	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}

	return result;
}
let arr = [1, 2, 3, 4, 5];
console.log(each());
*//*
let arr = ["куж", "тор", "над"];

function each (arr, callback){
    let result = [];
    
    for(let elem of arr){
        result.push(callback(elem));
    }
    return result;
}
let result = each(arr, function (str) { return str.split('').reverse().join(''); });

console.log(result)
*//*
function reverseStr(str) {
    let strArr = str.split('');
    let result = '';
    for (var i = strArr.length - 1; i >= 0; i--) {
        result += strArr[i];
    }
    return (result);
}

console.log(each(arr, reverseStr));
*//*
let arr = ['ab', 'Cd', '01']
let res = fun(arr, function (str) { return str.split('').reverse().join(''); })
function fun(arr, callbacK) {
    let res = [];
    for (let elem of arr) { res.push(callbacK(elem)); } return res;
} console.log(res)
*//*
let arr = ["куж", "тор", "над"];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}
let result = each(arr, function (str) { return str.substring(0, 1).toUpperCase() + str.substring(1);; });

console.log(result)
*/
                    //Количество параметров в коллбэке
/*
function each(arr, callback) {
	let result = [];
	let i = 0;

	for (let elem of arr) {
		result.push( callback(elem, i++) ); // вторым параметром передаем счетчик
	}

	return result;
}

let result = each(['a', 'b', 'c', 'd', 'e'], function (elem, index) {
    return elem + index;
});

console.log(result); // должно вывести ['a0', 'b1', 'c2', 'd3', 'e4']
*//*
function each(arr, callback) {
    let result = [];
    let i = 0;

    for (let elem of arr) {
        result.push(callback(elem, i++)); // 
    }

    return result;
}

let result = each([1, 2, 3, 4, 5], function (elem, index) {
    return String(elem) * index;  //горе от ума с этим String(), он тут не нужен
});

console.log(result); 
*/
                    //Функция filter
/*
let result = filter([1, 2, 3, 4, 5], function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result); // выведет [2, 4]

function filter(arr, callback) {
    let result = []; for (let elem of arr) {
        if (callback(elem)) {
            result.push(elem);
        }
    } return result;
}
*//*
let result = filter(["sdfsdfs", "dfsdf", "fd", "ab", "fff"], function (elem) {
    if(elem.length < 4){
        return true
    } else{
        return false
    }
});

console.log(result);

function filter (arr, callback){
    let result = [];
    for(let elem of arr){
        if(callback(elem)){
            result.push(elem);
        }
    }
    return result
}
*/
                //Функции every и some
/*
let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result); // выведет false

function every(arr, callback) {
    
    for (let elem of arr) {
        if(callback(elem)){
            return true; 
        } 
    }
    return false
}
*//*
let result = every([1, 2, 3, 4, 6], function (elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result); // выведет true

function every (arr, callback){
    for(let elem of arr){
        if(callback(elem)){
            return true;
        }
    }
    return false;
}
*/
                //Функция alternate
/*
let result = alternate(
	['a', 'b', 'c', 'd', 'e'],
	function(elem) {
		return elem + '!';
	},
	function(elem) {
		return elem + '?';
	},
);

console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

function alternate (arr, callback1, callback2){
    let result = [];
    for( let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            result.push(callback1(arr[i]));
        } else {
            result.push(callback2(arr[i]));
        }
    }
    return result
}
*/
                //Стрелочные функции в JavaScript
/*
let func1 = function(num1, num2) {  //обычная
	let result = num1 * num2;
	return result;
}

let func2 = (num1, num2) => {  //стрелочная
	let result = num1 * num2;
	return result;
}
*//*
let func1 = function (num1, num2) {     //обычная
    return num1 * num2
}

let func2 = (num1, num2) => num1 * num2;    //return можно не писать
*//*
let func1 = function (num) {
    return num * num;
}

let func2 = num => num * num    //если 1 параметр, () можно не писать
*//*
let func1 = function() {
	alert('!!!');
}

let func2 = () => alert('!!!')  //вообще нет параметров, но нужно () пыстые ставить
*/
                    //Пример применения
/*
let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
*//*
let result = every([1, 2, 3, 4, 5], elem => elem > 0);
*//*
let result = every([1, 2, 3, 4, 5], function (elem, index) {
    if (elem * index > 10) {
        return true;
    } else {
        return false;
    }
});
*//*
let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);
*//*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, function (elem, index) {
    if (elem * index > 10) {
        return true;
    } else {
        return false;
    }
});
*//*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, (elem, index) => (elem * index) > 10);
*/
                    //Работа с рекурсией в JavaScript
        // рекурсия - это когда функция вызывает сама себя.
/*
let i = 1;

function func() {
    console.log(i);
    i++;

    if (i <= 10) {
        func(); // здесь функция вызывает сама себя
    }
}
func();
*/
                    //Пример с параметром
/*
func([1, 2, 3]);

function func(arr) {
    console.log(arr.shift()); // выведет 1
    console.log(arr); // выведет [2, 3] - массив уменьшился

    console.log(arr.shift()); // выведет 2
    console.log(arr); // выведет [3] - массив уменьшился

    console.log(arr.shift()); // выведет 3
    console.log(arr); // выведет [] - массив пуст
}

func([1, 2, 3]);
*//*
function func(arr) {
    console.log(arr.shift(), arr);

    if (arr.length != 0) {
        func(arr);
    }
}

func([1, 2, 3]);
*/
                    //Сумма элементов массива
/*
function getSum(arr) {
    let sum = arr.shift();

    if (arr.length != 0) {
        sum += getSum(arr);
    }

    return sum;
}

console.log(getSum([1, 2, 3]));
*//*
function func(prevPrevNum, prevNum) {
    let sum = prevPrevNum + prevNum;
    console.log(sum);
    if (sum <= 1000) {
        func(prevNum, sum)
        
    }
    
}

func(1, 2);
*//*
function func(prevPrevNum, prevNum) {
    let current = prevPrevNum + prevNum;
    console.log(current);
    if (current <= 1000) {
        func(prevNum, current);
    }
}
func(1, 2);
*//*
let last = 10;
let i = 3;
let prevPrevNum = 1;
let prevNum = 2;
console.log(prevPrevNum);
console.log(prevNum);

func(prevPrevNum, prevNum);

function func(prevPrevNum, prevNum) {
    let sum = prevNum + prevPrevNum;
    console.log(sum);
    prevPrevNum = prevNum;
    prevNum = sum;
    i++;
    if (i <= last) func(prevPrevNum, prevNum);
}
*//*
function func(prevPrevNum, prevNum) {
    let arr = [];
    function func1(prevPrevNum, prevNum){
        let sum = prevPrevNum + prevNum;
        arr.push(sum);
    }
    
}

func(1, 2);
*/
                        //Редуцирование числа
/*
function getDigitsSum(num) {
    return getSum(getDigits(num));
}

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

function reduceNum(num) {
    let sum = getDigitsSum(num);

    if (sum <= 9) {
        return sum;
    } else {
        return reduceNum(sum);
    }
}

console.log(reduceNum(2187)); // выведет 9
*/
                    //Рекурсия и многомерные структуры в JavaScript
/*
let arr = [
    1,
    [
        2, 7, 8
    ],
    [
        3, 4, [5, [6, 7]],
    ]
];

function func(arr) {
    for (let elem of arr) {
        console.log(elem);
    }
}

func([1, [2, 7, 8],
    [3, 4, [5, [6, 7]]]
]);

function func(arr) {
    for (let elem of arr) {
        if (typeof elem == 'object') {
            // элемент - массив
        } else {
            // элемент - примитив
            console.log(elem);
        }
    }
}

func([1, [2, 7, 8],
    [3, 4, [5, [6, 7]]]
]);


function func(arr) {
    for (let elem of arr) {
        if (typeof elem == 'object') {
            func(elem);
        } else {
            console.log(elem);
        }
    }
}

func([1, [2, 7, 8],[3, 4, [5, [6, 7]]]]);
*/
/*
let arr = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: 4
    },
    f: {
        g: 5,
        j: 6,
        k: {
            l: 7,
            m: {
                n: 8,
                o: 9
            }
        }
    }
}

function func (obj){
    for(let key in obj){
        if(typeof obj[key] != 'object'){
            console.log(obj[key]);
        }else {
            func(obj[key])
        }
    }
}

func({a: 1,b: {c: 2,d: 3,e: 4},f: {g: 5,j: 6,k: {l: 7,m: {n: 8,o: 9}}}});
*/
                        //Сумма элементов массива
/*
function func(arr) {
    let sum = 0;

    for (let elem of arr) {
        if (typeof elem == 'object') {
            sum += func(elem);
        } else {
            sum += elem;
        }
    }

    return sum;
}

console.log(func([1, [2, 7, 8],[3, 4, [5, [6, 7]]]]));
*//*

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function sumObj (obj){
    let sum = 0;
    for (let key in obj){
        if(typeof obj[key] == 'object'){
            sum += sumObj(obj[key]);
        } else {
            sum += obj[key];
        }
    }

    return sum;
}

console.log(sumObj(obj));
*/
/*
let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function func(arr){
    let result = '';
    for (let elem of arr){
        if(typeof elem == 'object'){
            result += func(elem);
        } else {
            result += elem;
        }
    }

    return result;
}
console.log(func(arr));
*/
                //Манипуляции с элементами
/*
function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            arr[i] = func(arr[i]);
        } else {
            arr[i] = arr[i] + '!';
        }
    }

    return arr;
}

console.log(func([1, [2, 7, 8],[3, 4, [5, 6]]]));
*//*
let arr = [1, [2, 7, 8],[3, 4],[5, [6, 7]]];

function func (arr){
    for (let i =0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            arr[i] = func(arr[i]);
        } else {
            arr[i] = arr[i] ** 2;
        }
    }

    return arr;
}
console.log(func(arr));
*//*
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function func (arr){
    let result = [];
    function func1(arr){
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'object'){
           func(arr[i]);
        } else {
            result.push(arr[i]);
        }
        return result;
    }
}
}
console.log(func(arr));
func(arr);
*//*
function SimpleArr(arr) {
    let result = [];

    function func(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'object') {
                func(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
    console.log(func(arr));
}

SimpleArr(arr);
*/
                //Метод map для перебора массива в JavaScript
/*
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem) {
	console.log(elem); // последовательно выведет 1, 2, 3, 4, 5
});
*//*
function(elem) {
	return elem * elem;    //эта функция ниже превращается в колл-бэк
}
*//*
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function (elem) {      //колл бэк
    return elem * elem;       //квадрат
});

console.log(result); // выведет [1, 4, 9, 16, 25]
*//*
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function (elem) {
    return 0;
});

console.log(result); // выведет [0, 0, 0, 0, 0]
*//*
let arr = [4, 16,  36, 49];

let result = arr.map(function(elem) {
    return Math.sqrt(elem);
})
console.log(result);
*//*
let arr = ["ab", "cd", "ef"];

let result = arr.map(function(elem){
    return elem + "!";
})
console.log(result);
*//*
let arr = ["ab", "cd", "ef"];

let result = arr.map(function(elem) {
    return elem.split('').reverse().join('')
})

console.log(result);
*//*
let arr = ['123', '456', '789'];

let result = arr.map(function(elem){
    return elem.split('');
})
console.log(result);
*/
                //Ключ элемента
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

let arr = ['a', 'b', 'c', 'd', 'e'];

let result = arr.map(function(elem, index) {
	return elem + index;
});

console.log(result); // выведет ['a0', 'b1', 'c2', 'd3', 'e4']
*//*
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem, index){
    return elem * index;
})

console.log(result);
*/
                    //Перебор многомерных массивов
/*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	console.log(elem);
});
*//*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function (elem) {  //разбиваем на подмассивы
    return elem.map(function (num) { //каждый элемент подмассива в квадрат
        return num * num;
    });
});

console.log(result);
*/
                        //Метод forEach для перебора массива в JavaScript
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach(function(elem) {
	document.write(elem + '<br>');
});

arr.forEach(function (elem, index) {
    document.write(index + '. ' + elem + '<br>');
});
*/
                    //Применение forEach
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
	sum += elem;
});

console.log(sum);
*//*
let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem){
    sum += elem ** 2;
});

console.log(sum);
*/
                //Метод filter для фильтрации массива в JavaScript
/*
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result); // выведет [2, 4]
*//*
//Упростим код, используя логические операторы:
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(function (elem) {
    return elem % 2 == 0;
});

console.log(result); // выведет [2, 4]
*//*
//Еще больше упростим код, используя стрелочные функции:
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(elem => elem % 2 == 0);
console.log(result); // выведет [2, 4]
*//*
//Это решение настолько короткое, что его можно разместить в параметре console.log:
let arr = [1, 2, 3, 4, 5];
console.log(arr.filter(elem => elem % 2 == 0)); // выведет [2, 4]
*//*
let arr = [1, 2, -3, 4, -5, 11];

console.log(arr.filter(elem => elem > 0));

console.log(arr.filter(elem => elem < 0));

console.log(arr.filter(elem => elem > 0 && elem < 10));
*//*
let arr = ["adfasfd", "ad", "adasda", "adadadada", "dada"];

let result = arr.filter(function(elem){
    return elem.length > 5
});

console.log(result);
*//*
let arr = [100, 200, 300, 400, 0500, 1100];

let result = arr.filter(function(elem, index){
    return elem * index < 30;
});
console.log(result);
*//*
let arr = [1, 2, [3, 4], 5, [6, 7]];

let result = arr.filter(function(elem){
    return typeof elem != 'object';
});
console.log(result);
*/
/*
let arr = [1, 2, 3, 4, 5];
console.log(arr.filter(elem => elem % 2 == 0).length); // выведет 2
*//*
let arr = [1, -2, 3, 4, -5];

console.log(arr.filter(elem => elem < 0).length);
*/
                //Метод every для проверки массива в JavaScript
/*
//проверка на четность
let arr = [2, 4, 6, 8];

let result = arr.every(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result);
*//*
//упростим
let arr = [2, 4, 6, 8];

let result = arr.every(function(elem) {
	return elem % 2 == 0;
});

console.log(result);
*//*
//еще больше упростим
let arr = [2, 4, 6, 8];

let result = arr.every(elem => elem % 2 == 0);
console.log(result);
*//*
let arr = [2, 4, 6, 8];

let result = arr.every(elem => elem > 0);
console.log(result);
*//*
let arr = [2, 4, 6, 8];

let result = arr.every((elem, index) => (elem * index) < 30);
console.log(result);
*/
                //Метод some для проверки массива в JavaScript
/*
//проверяет наличие хотя бы 1!!! четного числа
let arr = [3, 4, 5, 9];

let result = arr.some(function(elem) {
	return elem % 2 == 0;
});

console.log(result);
*//*
let arr = [2, 4, 6, 8];

let result = arr.some(elem => elem % 2 == 0);
console.log(result);
*//*
let arr = [-2, -4, -6, 8];

let result = arr.some(function(elem){
    return elem > 0;
})
console.log(result); // true тк один элемент больше 0
*//*
let arr = [-2, -4, -6, 8];

let result = arr.some((elem, index) => (elem * index) < 30 );
console.log(result);
*/
                //Оператор spread в JavaScript
/*
let arr = [1, 2, 3];
func(arr[0], arr[1], arr[2]);

//аналог 
//spread
let arr = [1, 2, 3];
func(...arr);
*//*
let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr)); //spread это вон те ... 3 точки)
*/
                    //Более сложные примеры
/*
function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(func(1, ...[2, 3, 4], 5)); //день прошел, число сменилось
console.log(func(1, 2, ...[3, 4, 5])); //ничего не изменилось
*//*
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
    return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));
*/
                    //Более полезное применение
/*
let arr = [1, 2, 3, 4, 5];
let max = Math.max(...arr); //это мощно!!ъ
console.log(max);
*//*
let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
console.log(min);
*/
                    //Оператор spread и слияние массивов
/*
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr  = ['a', ...arr1, ...arr1, 'b', 'c']; //изи 3 точки, они правят миром
console.log(arr);
*//*
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let arr = ['a', 'b', 'c', ...arr2];
console.log(arr);
*//*
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];

let arr = [0, ...arr3];
console.log(arr);
*//*
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);  //123
*/
                    //Оператор spread для строк и чисел в JavaScript
/*                   
function func(s1, s2, s3, s4, s5) {
    return s1 + '-' + s2 + '-' + s3 + '-' + s4 + '-' + s5;
}
console.log( func(...'abcde') ); // применили ...(spread)

let arr = [...'abcde'];    // получим массив ['a', 'b', 'c', 'd', 'e']
*//*
let arr = [...'12345'];
console.log(arr); // массив ["1", "2"..]
*//*
let arr = [...'12345', ...'56789'];
console.log(arr);
*//*
let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];

console.log(arr2);
*/
                    //Оператор spread и числа
/*
let arr = [...12345]; // будет ошибка

//Для решения проблемы следует преобразовывать число в строку, вот так:

let arr = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5']
*/
                    //Оператор rest в JavaScript
/*
func(1, 2);

function func(a, b, ...rest) {
	console.log(a); // выведет 1
	console.log(b); // выведет 2
	console.log(rest); // выведет [] //rest это остаток параметров, лишние параметры
}
*//*
//В функции вообще может не быть параметров, но при этом в нее можно добавить rest:

function func(...rest) {
    console.log(rest);
}
//В этом случае функцию можно будет вызвать с любым количеством параметров и все они будут попадать в массив rest.
*/
                        //Применение операторов rest и spread в JavaScript
                            //Функция, находящая сумму чисел
/*
function func(...nums) {  //функция, что бы все передаваемые числа превращались в массив
	console.log(nums);    // ...(Spread)
}

func(1, 2, 3); // выведет [1, 2, 3]
*//*
function func(...nums) {    
    let sum = 0;

    for (let num of nums) { //а далее запускаем цикл и находим сумму
        sum += num;
    }

    return sum;
}

let result = func(1, 2, 3);
console.log(result); // выведет 6
*//*
function func (...nums) {
    let sum = 0;
        for(let num of nums){
            sum +=num;
        }
        return sum / nums.length;
}

let result = func(1, 2, 3);
console.log(result);
*/
                    //Функция, сливающая массивы в двухмерный
/*
let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]

function unite(...arrs) {
    return arrs;
}
*/
//let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
/*
function unite (a,b,c){
    let result = [];
    result.push(a,b,c);
    return result;
}

console.log(unite([1, 2, 3], [4, 5, 6], [7, 8, 9]));
*/
                    //Функция, сливающая массивы в один
/*
function merge(...arrs) {
    return [].concat(...arrs);      //метод concat
}                                   //сливает массивы

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]
*//*
result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);
function merge(a, b, c) { return [].concat(a, b, c); }
*/
                //Пересечение произвольного количества массивов на JavaScript
/*
let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
console.log(result); // выведет [2, 3]
*//*
let arr1 = [1,2,3,4];
let arr2 = [1,3,4,5];
function getInt(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }

    return result;
}
console.log(getInt(arr1, arr2));

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}
*//*
function getInt(...arrs) {
    let result = [];

    let arr0 = arrs.shift();

    for (let elem of arr0) {
        if (inArrays(elem, arrs)) {
            result.push(elem);
        }
    }

    return result;
}

function inArrays(elem, arrs) {
    for (let arr of arrs) {
        if (!inArray(elem, arr)) {
            return false;
        }
    }

    return true;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

// Проверим работу:
let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
console.log(result); // выведет [2, 3]
*/
                //Разность произвольного количества массивов на JavaScript
/*
function getDiff(arr1, arr2){
	let result = [];

	let diff1 = getFirstDiff(arr1, arr2);
	let diff2 = getFirstDiff(arr2, arr1);

	return [].concat( diff1, diff2 );  //вместо [] можно написать result
}

function getFirstDiff(arr1, arr2){
	let result = [];
    
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			result.push(elem);
		}
	}
    
	return result;
}

function inArray(elem, arr){                //!!!!!!!!!!!!!!!!!!
	return arr.indexOf(elem) !== -1;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 5, 6, 7, 8];
console.log(getDiff(arr1, arr2));
*/
                //Деструктуризация массивов в JavaScript
/*
let arr = [2025, 12, 31];
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
*//*
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, family, work, profession, year] = arr;

console.log(name);
*/
                //Массив из функции
/*
function func() {
	return [2025, 12, 31];
}

let [year, month, day] = func();
console.log(year);
*//*
function func() {
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}
let [name, family, work, profession, year] = func();
console.log(name);
*/
                //Пропуск значений
/*
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [,,department, position,] = arr;
console.log(department);
console.log(position);
*/
                //Меньше элементов
        //Если в массиве меньше элементов, чем переменных, то в "лишние" переменные запишется undefined
/*
let arr = [2025, 12];
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет undefined
*/
                //Пропуск значений
/*
let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
*/
                //Остаток
        //Если в массиве больше элементов, чем переменных, при необходимости лишние элементы можно записать в массив с помощью оператора rest:
/*
let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day, ...time] = arr;      //... rest !!!!!!!!!

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

console.log(time);   // выведет [23, 59, 59]
*//*
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, family, ...work] = arr;
console.log(name);
console.log(family);
console.log(work);
*/
                //Значение по умолчанию
/*
        //В следующем примере переменной day по умолчанию указано значение 1:
let arr = [2025, 12];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 1
*//*
        //А вот если для переменной day будет значение в массиве - значение по умолчанию будет проигнорировано:
let arr = [2025, 12, 31];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
*//*
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let [name, surname, department, position = "джуниор"] = arr;
console.log(name);
console.log(department);
console.log(surname);
console.log(position);
*/
                //Функции в качестве значения по умолчанию
/*
function func() {
    return (new Date(year, month)).getDate();
}

let arr = [,,1]
let [year = func(), month, day] = arr;
console.log(year);
console.log(month);
console.log(day);
*/
                //Объявление переменных
/*
let arr = [2025, 12, 31];
let year;
let month;
let day;

[year, month, day] = arr;
*/
                //Деструктуризация объектов в JavaScript
/*
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
//При деструктуризации объектов имена переменных должны совпадать в ключами объекта, порядок переменных и элементов в объекте не имеет значения
*//*
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let {color, width, height} = options;
console.log(color);
console.log(width);
console.log(height);
*/
                //Другие имена переменных
        //Можно сделать так, чтобы имена переменных не совпадали в именами ключей объекта:
/*
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year: y, month: m, day: d} = obj;

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31
*//*
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let {color: c, width: w, height: h} = options;
console.log(c);
console.log(w);
console.log(h);
*/
                    //Значения по умолчанию
        //При деструктуризации объектов можно также указывать значения по умолчанию. При этом, в отличии от деструктуризации массивов, необязательной может быть любая переменная - не обязательно с конца массива.
/*
let obj = {
    month: 12,
    day: 31,
};

let { year = 2025, month, day } = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31
*//*
let options = {
    width: 400,
    height: 500,
};

let {color = "black", width, height} = options;
console.log(color);
console.log(width);
console.log(height);
*/
            //Другие переменные и значения по умолчанию
    //Можно также менять названия переменных на свои при этом задавая значения по умолчанию:
/*
let obj = {
    month: 12,
    day: 31,
};

let { year: y = 2025, month, day } = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31
*//*
let options = {
    width: 400,
    height: 500,
};

let {color: c = "black", width: w, height: h} = options;
console.log(c);   //почему то с полным ключем не работает, странно
console.log(w);
console.log(h);
*/
                //Функции в качестве значения по умолчанию
/*
function func() {
	return (new Date).getFullYear();     //метод для текущего года, а я его искал
}

let obj = {
	month: 12,
	day:   31,
};

let {year = func(), month, day} = obj;
console.log(year);
console.log(month);
console.log(day);
*/
                //Объект из функции
/*
function func() {
	return obj = {
		year:  2025,
		month: 12,
		day:   31,
	};
}

let {year, month, day} = func();
console.log(year);
console.log(month);
console.log(day);
*/
            //Объявление переменных
        //Не обязательно объявлять переменные при деструктуризации. Они могут быть объявлены заранее:
/*
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let year, month, day; // объявим переменные заранее

//Тут, однако, в отличии от массивов, есть нюансы.Без команды let перед фигурными 
//скобками эти фигурные скобки не будут восприняты JavaScript как команда на 
//деструктуризацию (а будут восприняты как блок кода):

//{ year, month, day } = obj; // не будет работать
//({ year, month, day } = obj);  //так будет, нужны ()
*/
                    //Деструктуризация параметров функций в JavaScript
/*
func([2025, 12, 31], [2026, 11, 30]);

function func([year1, month1, day1], [year2, month2, day2]) {
	console.log(year1);  // выведет 2025
	console.log(month1); // выведет 12
	console.log(day1);   // выведет 31

	console.log(year2);  // выведет 2026
	console.log(month2); // выведет 11
	console.log(day2);   // выведет 30
}
*//*
func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

function func([name, surname, department, profession, year]){
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(profession);
    console.log(year);
}
*//*
func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

function func ([name, surname, ...work]){
    console.log(name);
    console.log(surname);
    console.log(work);
}
*//*
func(['Иван', 'Иванов', 'отдел разработки']);

function func ([name, surname, department, position = "Джуниор"]){
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
}
*//*
func('отдел разработки', ['Иван', 'Иванов'], '2018-12-31');

function func (department,[name, surname], year){
    console.log(name);
    console.log(surname);

        let arr = String(year).split('-')   //просто выебываюсь
        console.log(arr)                    //заодно стараюсь методы запоминать
    console.log(arr[0]);                    //что бы не рыться в инете постоянно
    console.log(arr[1]);
    console.log(arr[2]);
}
*/
                //Объекты в параметрах
/*
function func({year, month, day}) {
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

func({year: 2025, month: 12, day: 31,});
*//*
func({ color: 'red', width: 400, height: 500 });

function func ({color, width, height}){
    console.log(color);
    console.log(width);
    console.log(height);
}
*//*
func({ color: "red", width: 400, height: 500 });

function func ({color = "black", width, height}){
    console.log(width);
    console.log(height);
    console.log(color);
}
*/
                //Работа с объектом Date в JavaScript
/*
let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды
*//*
let date = new Date();
console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
*/
                //Форматирование даты в JavaScript
/*
function addZero(num) {         //добавляем 0 перед месяцем и числом
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let date = new Date();
console.log(addZero(date.getFullYear()) + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()));
*//*
function addZero(num) {         //добавляем 0 перед месяцем и числом
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

let date = new Date();
console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) 
+ ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()));
*/
                    //Преобразование формата даты
/*
let str = '2025-12-31';
let arr = str.split('-');
console.log(arr); // получим массив ['2025', '12', '31']

let str = '2025-12-31';
let arr = str.split('-');
let result = arr[2] + '/' + arr[1] + '/' + arr[0];

console.log(result); // получим строку '31/12/2025'
*/
//Можно также использовать комбинацию методов split, reverse и join:
/*
let str = '2025-12-31';
let result = str.split('-').reverse().join('/');

console.log(result); // получим строку '31/12/2025'
*//*
let str = "2020-04-14";
let arr = str.split("-").reverse().join("-");
console.log(arr);
*/
                //Получения дня недели на JavaScript
/*
let date = new Date();
console.log(date.getDay());
*//*
let date = new Date();
console.log(6 - date.getDay());
*/
                //Вывод частей даты словом в JavaScript
/*
let date = new Date();
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);  //cовместить day and days
*//*
let date = new Date();
let month = date.getMonth();
let months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months[month]);
*/
                    //Установка времени в объекте Date в JavaScript
/*
let date = new Date(2025, 10, 5); // установим 5 ноября 2025 года
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);
*//*
let date = new Date(2020, 3, 13); // месяц надо на 1 меньше чем нужный писать
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);
*/
                    //Работа с getTime
/*
let date = new Date();
console.log(date.getTime());
*//*
let date = new Date(2015, 11, 4, 23, 59, 59);
console.log(date.getTime());
*//*
let date = new Date(2025, 0);
console.log(date.getTime());
*/
                    //Разница между датами
/*
let now  = new Date();
let date = new Date(2015, 11, 4, 23, 59, 59);

let diff = now.getTime() - date.getTime();
console.log(diff);
//в минуты
console.log(diff / (1000 * 60));
//в часы
console.log(diff / (1000 * 60 * 60));
*//*
let date = new Date(1988, 2);
let now = new Date(2000, 0);

let diff = now.getTime() - date.getTime();
console.log(diff);
console.log(diff / (1000 * 60));  //минуты
console.log(diff / (1000 * 60 * 60)); //часы
console.log(diff / (1000 * 60 * 60 * 24)); //дни
*//*
let now = new Date(2020, 3);
let date = new Date(1993, 10);

let diff = now.getTime() - date.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 30));
*/
                //Разница между объектами с датой в JavaScript
/*
let now  = new Date();
let date = new Date(2015, 4, 25, 12, 59, 59);

let diff = now - date; // вычитаем два объекта с датами друг от друга
console.log(diff);     // увидим разницу в миллисекундах
*//*
let now = new Date(2000, 8, 1);
let date = new Date(2010, 1, 15);

let diff = date - now;
console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12)); 
*/
                //Автоматическая корректировка дат в JavaScript
/*
let date = new Date(2018, 0, 35);
console.log(date); // получится 4 февраля
*//*
let date = new Date(2018, 12, 1); // указываем 12-тый месяц
console.log(date); // получится 1 января 2019 года
*//*
let date = new Date(2018, 1, 35);
console.log(date);
*//*
let date = new Date(2018, 15, 1);
console.log(date);
*//*
let date = new Date(2018, 3, 31);
console.log(date)
*//*
let date = new Date(2018, 1, 31);
console.log(date)
*//*
let date = new Date(2018, 12, 33);
console.log(date)
*//*
let date = new Date(2018, 33, 33);
console.log(date);
*/
                //Нулевой день
/*
let date = new Date(2018, 1, 0); // указываем нулевой день
console.log(date); // получится 31 января
*//*
let date = new Date(2018, 5, 0);
console.log(date);
*//*
let date = new Date(2018, 0, 0);
console.log(date);
*/
                //Отрицательные значения
/*
let date = new Date(2018, 1, -1); // указываем -1 день
console.log(date); // получится 30 января
*//*
let date = new Date(2018, -1, 1); // указываем -1 месяц
console.log(date); // получится 1 декабря 2017 года
*//*
let date = new Date(2018, 33, 33);
console.log(date);
*/
                //Часы, минуты, секунды
/*
let date = new Date(2018, 0, 1, 24, 0, 0); // указываем 24-тый час
console.log(date); // получится 2 января, 0 часов
*//*
let date = new Date(2018, 0, 1, 25, 0, 0); // указываем 25-тый час
console.log(date); // получится 2 января, 1 час
*//*
let date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date);
*//*
let date = new Date(2018, 0, 1, 23, 60, 0);
console.log(date);
*//*
let date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date);
*/
                //Нахождение последнего дня месяца в JavaScript
/*
let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month = 0; // январь - нулевой месяц

console.log(lastDays[0]);
*//*
//в виде функции
function getLastDay(month) {
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return lastDays[month];
}

console.log(getLastDay(0)); // узнаем последний день января
*//*
function getLastDay(month, year) { // функция должна принимать и год
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month != 1) {
        return lastDays[month]; // если не февраль
    } else {
        //!!!!!!!!!!!
    }
}

*/
                //Простое решение задачи
/*
let date = new Date(2020, 3, 0);
console.log(date.getDate());
*//*
function getLastDay(year, month){
    let date = new Date(year, month);
    return date
}
console.log(getLastDay(2020, 3))
*//*
function func(year, month) {
    let date = new Date(year, month, 0);
    return new Date(year, month, 0);
}
console.log(func(2020, 2))
*//*
let date = new Date(2020, 3, 0);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);  //вт
*//*
function func (year, month){
    let date = new Date(year, month, 0);    //без нолика робить не хочет
    let day = date.getDay();
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    return days[day]
}
console.log(func(2020, 3))
*/
                //Определение високосного года
/*
let date = new Date(2020, 2, 0);

if (date.getDate() == 29) {
	console.log('високосный');
} else {
	console.log('обычный');
}
*//*
function isLeap (year){
    let date = new Date(year)

    if(year % 4 == 0){
        return true
    } else {
        return false
    }
}
console.log(isLeap(2020));
*/
                //Проверка корректности даты в JavaScript
/*
let year  = 2025;
let month = 0;
let day   = 32;

let date = new Date(year, month, day);

if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
	console.log('корректна');
} else {
	console.log('некорректна');
}
*//*
function checkDate (year, month, day){
    let date = new Date(year, month, day);

        if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
            return true
        } else {
            return false
        }
}

console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false
*/
                //Получение моментов времени в JavaScript
        //День текущего года
/*
let now  = new Date(); // получаем текущий момент
let date = new Date(now.getFullYear(), 11, 31); // получаем нашу дату

console.log(date.getDay());
*/
                //День текущего месяца
/*
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 5);
console.log(date.getDay());
*/
                //День следующего или предыдущего года
/*
let now  = new Date();
let date = new Date(now.getFullYear() + 1, 0, 21);
console.log(date.getDay());
*//*
let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
console.log(date.getDay());
*//*
let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), 28);
console.log(date.getDay());
*//*
let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), 28);
console.log(date.getDay());
*/
                //День следующего или предыдущего месяца
/*
let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log(date.getDay());
*//*
let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth(0) - 1, 1);
console.log(date.getDay());
*//*
let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth() - 1, 28);
console.log(date.getDay());
*/
                //Разность моментов
/*
let date1 = new Date();
let date2 = new Date(2015, 4, 25, 12, 59, 59);

console.log(date1 - date2); // разность в миллисекундах
*//*
let date1 = new Date(2020, 8, 1);
let date2 = new Date(2020, 0, 1);

console.log((date1 - date2) / (1000 * 60 * 60 * 24));
*//*
let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 28);
let date2 = new Date(now.getFullYear(), now.getMonth() + 7, 29);

console.log((date2 - date1) / (1000 * 60 * 60 * 24))
*/
                //Момент времени дня
/*
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
console.log(date)
*//*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12);
console.log(date)
*//*
let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
console.log((now - date1) / (1000 * 60 * 60));
console.log(now);
*/
                //Начало дня
/*
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
console.log(date);
*//*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //можно не указывать часы, минуты и милисекунды
console.log(date);
*//*
let now = new Date();
console.log(now);
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(date);
console.log((now - date) / (1000 * 60 * 60));
*/
                //Конец дня
/*
Давайте получим объект с датой, содержащий конец текущего дня:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
Можно посчитать концом текущего дня полночь следующего (разница в 1 секунду):

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
Как вы уже знаете, нули в таком случае можно опустить:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
Кстати, полночью также будет является время 24:00:00 текущего дня:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);
Опустим нули:

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
*//*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((date - now) / (1000 * 60 * 60))
*/
                    //Циклическая проверка
/*
let now  = new Date();
let year = now.getFullYear();

for (let month = 0; month <= 11; month++) {
	let date = new Date(year, month, 1);

	if (date.getDay() == 0) {
		console.log(year + '-' + month + '-1');
	}
}
*//*
let now = new Date();
let year1 = now.getFullYear();
let year2 = new Date(2000, 0, 1);
//console.log(year2)
for (let year2 = 0; year2 <= year1; year2 ++){
    let date = new Date(year1, 0, 1);

    if (date.getDay() == 6 || date.getDay() == 0){
        console.log(year1 + '-' + '0' + '-1');
    }
}
*/
                //Практика на получение моментов времени в JavaScript
/*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log((now - date) / 1000 * 60)
*//*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);
console.log((date - now ) / 1000)
*//*
let now = new Date();
let date = new Date(2021, 0, 0);
console.log((date - now) / (1000 * 60 * 60 * 24));
*//*
let now = new Date();
let year = now.getFullYear();
for (let month = 0; month <= 11; month ++){
    let date = new Date(year, month, 13);

    if(date.getDay() == 5){
        console.log(year + '-' + month + '-13')
    }
}
*//*
let now = new Date();
let year = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
console.log(year);
*//*
let date = new Date(2020, 3, 30); // месяц надо на 1 меньше чем нужный писать
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);
*//*
let now = new Date();
let date = new Date(2020, 4, 1);
console.log((date - now) / (1000 * 60 * 60 * 24));
*//*
function isLeap(year) {
    let date = new Date(year)

    if (year % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(isLeap(2020));
console.log(isLeap(2019));
console.log(isLeap(2021));
*//*
let now = new Date();
let year = now.getFullYear();

for (let year = 2020; year >= 1700; year--) {
    //let date = new Date(year); //вроде и не нужно тут

    if (year % 4 == 0) {
        console.log(year);
    }
}
*//*
let now = new Date();
let year = now.getFullYear();

for (let year = 2020; year <= 2150; year++) {
    //let date = new Date(year); //вроде и не нужно тут

    if (year % 4 == 0) {
        console.log(year);
    }
}
*/
                    //Строковое сравнение дат на JavaScript
/*
let date1 = '2020-11-31';
let date2 = '2020-12-01';
console.log(date1 > date2 );
*/
                    //Дата без года
/*
let date1 = '09-21';
let date2 = '09-23';
console.log(date1 > date2);
*/
                    //Попадание даты в промежуток
/*
let date = '20-08';

if (date >= '01-01' && date <= '08-03') {
	console.log('1 промежуток');
}

if (date >= '09-03' && date <= '17-06') {
	console.log('2 промежуток');
}

if (date >= '18-06' && date <= '31-12') {
	console.log('3 промежуток');
}
*//*
let date = "12-01"

if(date >= "22-12" && date <= "20-01"){
    console.log("Kozerok");
}

if (date >= "21-01" && date <= "18-02") {
    console.log("Vodolei");
}

if (date >= "19-02" && date <= "20-03") {
    console.log("Fish");
}

if (date >= "21-03" && date <= "19-04") {
    console.log("Oven");
}

if (date >= "20-04" && date <= "20-05") {
    console.log("Teleц");
}

if (date >= "21-05" && date <= "21-06") {
    console.log("Blizneцы");
}

if (date >= "22-06" && date <= "22-07") {
    console.log("Lobster");
}

if (date >= "23-07" && date <= "22-08") {
    console.log("Leo");
}

if (date >= "23-08" && date <= "22-09") {
    console.log("Deva");
}

if (date >= "23-09" && date <= "23-10") {
    console.log("Vecы");
}

if (date >= "24-10" && date <= "22-11") {
    console.log("Scorpio");
}

if (date >= "23-11" && date <= "21-12") {
    console.log("Streleц");
}
*/
                    //Сравнение объектов с датами в JavaScript
/*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
console.log(date > now);
*//*
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 15);
if(now > date){
    console.log("половина месяца прошла");
} else {
    console.log("половина месяцйа не прошла");
}
*/
                    //Количество времени до ближайшей даты на JavaScript
/*
let now  = new Date();
let date = new Date(now.getFullYear(), 2, 8); // текущий год

let diff = date - now; // разница

if (diff > 0) {
	console.log("скоро")
} else if (diff == 0) {
	console.log("Сегодня")
} else {
	console.log("В след году, детка")
}
*//*
let now = new Date();
let date = new Date(now.getFullYear(), 2, 1);

let diff = date - now;
console.log(diff / (1000 * 60 * 60 * 24))

if (diff > 0) {
    console.log("скоро")
} else if (diff == 0) {
    console.log("Сегодня")
} else {
    console.log("В след году, детка")
    let date = new Date(now.getFullYear()+ 1, 2, 1);
    let diff1 = date - now;
    console.log(" через " + diff1 / (1000 * 60 * 60 * 24))
}
*/
                    //ОСНОВЫ РАБОТЫ С DOM !!!!!!!!!!!!
                //метод querySelector специального объекта document
/*
let button = document.querySelector('#button');
console.log(button);
*//*
let elem1 = document.querySelector("#elem1");
console.log(elem1)

let elem2 = document.querySelector("#elem2");
console.log(elem2)

let elem3 = document.querySelector("#elem3");
console.log(elem3)\
*/  
                    //Более сложные селекторы
/*
let elem = document.querySelector('#parent input');
console.log(elem);
*//*
let elem = document.querySelector("#block p");
console.log(elem);
*//*
let elem = document.querySelector(".block p");
console.log(elem);
*//*
let elem = document.querySelector(".www");
console.log(elem);
*/
                    //Привязывание обработчиков событий к элементам
/*
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    alert('!!!');
});
*//*
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
    alert('1');
});

let button2 = document.querySelector('#button2');
button2.addEventListener('click', function () {
    alert('2');
});

let button3 = document.querySelector('#button3');
button3.addEventListener('click', function () {
    alert('3');
});
*/
                    //Другие типы событий в JavaScript
/*
let button = document.querySelector("#button");
button.addEventListener("dblclick", function (){
    alert("fyx");
});

let button1 = document.querySelector("#button1");
button1.addEventListener("mouseover", function () {
    alert("fyx1");
});

let button2 = document.querySelector("#button2");
button2.addEventListener("mouseout", function () {
    alert("fyx2");
});

let button3 = document.querySelector("#button3");
button3.addEventListener("click", function () {
    alert("fyx3");
});
button3.addEventListener("dblclick", function () {
    alert("fyx3");
});
*/
                    //Именованные обработчики событий в JavaScript
/*
let button = document.querySelector('#button');
button.addEventListener('click', func);

function func() {
    alert('!!!');
}
*//*
let button1 = document.querySelector("#button1");
button1.addEventListener("click", func1);
function func1() {
    alert(1);
}

let button2 = document.querySelector("#button2");
button2.addEventListener("click", func2);
function func2(){
    alert(2);
}
*/
                //Привязывание одного обработчика ко многим элементам
/*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem5");

elem1.addEventListener("click", func);
elem2.addEventListener("click", func);
elem3.addEventListener("click", func);
elem4.addEventListener("click", func);
elem5.addEventListener("click", func);

function func() {
    alert('message');
}
*/
                    //Несколько обработчиков одного события в JavaScript
/*
let elem = document.querySelector("#elem");

elem.addEventListener("click", func1);
elem.addEventListener("click", func2);
elem.addEventListener("click", func3);
function func1() {
    alert('1');
}

function func2() {
    alert('2');
}

function func3() {
    alert('3');
}
*/
                    //Анонимные обработчики
/*
button.addEventListener('click', function () {
    alert('2');
});
*//*
let button = document.querySelector("#button");

button.addEventListener("dblclick", function(){
    alert("1")
});

button.addEventListener("dblclick", function () {
    alert("2")
});

button.addEventListener("dblclick", function () {
    alert("3")
});
*/
                    //Работа с текстом тега на JavaScript
                //elem.innerHTML
/*
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    alert(elem.innerHTML);
});
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    alert(Number(elem1.innerHTML) + Number(elem2.innerHTML));
});
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

button1.addEventListener("click", function () {
    alert(elem1.innerHTML);
});

button2.addEventListener("click", function () {
    alert(elem2.innerHTML);
});
*/
                    //Запись
/*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

button1.addEventListener("click", function(){
    elem1.innerHTML = "Hello";
});

button2.addEventListener("click", function () {
    elem2.innerHTML = "Good bay";
});
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");

elem1.addEventListener("click", function(){
    elem1.innerHTML = 1;
});

elem2.addEventListener("click", function () {
    elem2.innerHTML = 2;
});

elem3.addEventListener("click", function () {
    elem3.innerHTML = 3;
});
*//*
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    elem.innerHTML = Number(elem.innerHTML) ** 2;
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    elem.innerHTML = Number(elem.innerHTML) + Number(1);
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    elem.innerHTML = "!" + elem.innerHTML + "!";
});
*/
                    //Запись тегов
/*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    elem.innerHTML = "<i>Hello</i>";
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    elem.innerHTML = "<b>" + elem.innerHTML + "</b>";
});
*/
                    //Работа с атрибутами тегов через свойства элементов
/*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    alert(elem.type);
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    elem.type = "submit"
    alert(elem.type);
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");
let link = document.querySelector("#link");

button.addEventListener("click", function(){
    elem.innerHTML = link.href
});
*//*
let button = document.querySelector("#button");
let link = document.querySelector("#link");

button.addEventListener("click", function(){
    link.innerHTML = link.innerHTML + '('+ link.href + ')';
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");
let image = document.querySelector("#image");

button.addEventListener("click", function(){
    elem.innerHTML = image.src;
});
*//*
let button = document.querySelector("#button");
let image = document.querySelector("#image");

//button.addEventListener("click", function(){
//    image.width = "300";
//});
button.addEventListener("click", function(){
    image.width = image.width*2;
});
*//*
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");

button1.addEventListener("click", function(){
    image1.src = 'img/111.jpg'
});

button2.addEventListener("click", function () {
    image2.src = 'img/222.jpg'
});
*/
                    //Работа с текстовыми полями в JavaScript
/*
alert(elem.value);
elem.value = 'new text';
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    alert(elem.value);
    elem.value = "hello";
    alert(elem.value);
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    elem.value = "tib lox";
});
*//*
let elem = document.querySelector("#elem");
let elem1 = document.querySelector("#elem1");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    elem1.innerHTML = elem.value;
});
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    elem2.value = elem1.value ** 2
});
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    buff = elem1.value;
    elem1.value = elem2.value
    elem2.value = buff;
});
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem5");
let elem6 = document.querySelector("#elem6");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    //let sum = Number(elem1) + Number(elem2) + Number(elem3) + Number(elem4) + Number(elem5);
   
    elem6.innerHTML = (Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) / 5
    
});
*/
                    //Фокус текстовых полей в JavaScript
/*
let elem = document.querySelector('#elem');

elem.addEventListener('focus', function () {
    console.log(elem.value);
});
*//*
let elem = document.querySelector('#elem');

elem.addEventListener("focus", function(){
    elem.value = "1";
});
elem.addEventListener("blur", function () {
    elem.value = "2";
});
*//*
let elem = document.querySelector('#elem');

elem.addEventListener("blur", function(){
    elem.value = elem.value ** 2;
});
*//*
let elem = document.querySelector('#elem');

elem.addEventListener("focus", function () {
    elem.value = "";
});
*/
                //Исключения при работе с атрибутами в JavaScript
        //Существуют и другие исключения, например, атрибут for. К нему следует обращаться через htmlFor.
/*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    alert(elem.className);
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    elem.className = "fffff";
    console.log(elem.className);
});
*//*
let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    let arr = [];
    arr.push(elem.className);
    console.log(arr);
    //console.log(elem.className);
});
*/
                //Цепочки методов и свойств в JavaScript
/*
//alert( document.querySelector('#elem').value ); // выведет 'text'
alert(document.querySelector('#elem').value = 'www');
*//*
//let image = document.querySelector('#image');
//console.log(image.src);
console.log(document.querySelector("#image").src);
*/
                //Преимущества и недостатки цепочек
/*
console.log(document.querySelector('#image').src);
console.log(document.querySelector('#image').width);
console.log(document.querySelector('#image').height);

let image = document.querySelector("#image");

image.addEventListener("click", function(){
    alert(image.src = "www");
    alert(image.width = "1000");
    alert(image.height = "2000");
});
*/
                //Объект this в JavaScript
/*
let elem = document.querySelector('#elem');

elem.addEventListener('blur', func);
function func() {
    console.log(this); // содержит ссылку на наш элемент
}
function func() {
    console.log(this.value); // выведем содержимое атрибута
}
function func() {
    this.value = '!!!';
}

elem.addEventListener('blur', function () {
    this.value = '!!!';
});
*//*
let elem = document.querySelector('#elem');

elem.addEventListener('focus', function () {
    this.value = '1';
});

elem.addEventListener('blur', function () {
    this.value = '2';
});
*//*
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    this.value = Number(this.value) + 1;
});
*/
                //Особое преимущество this
/*
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);

function func() {
    console.log(this.value);
}
*//*
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem5");

elem1.addEventListener("click", func);
elem2.addEventListener("click", func);
elem3.addEventListener("click", func);
elem4.addEventListener("click", func);
elem5.addEventListener("click", func);

function func(){
    this.innerHTML +="!";
}
*//*
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

button1.addEventListener("blur", func);
button2.addEventListener("blur", func);
button3.addEventListener("blur", func);

function func(){
    this.value  **= 2;
}
*/
                //Получение группы элементов
/*
let elems = document.querySelectorAll('.www');

for (let elem of elems) {
	console.log(elem.innerHTML);
}
*//*
let elems = document.querySelectorAll('.www');

for (let elem of elems) {
    elem.innerHTML = elem.innerHTML + '!';
}
*//*
let elems = document.querySelectorAll(".www");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    for (let elem of elems){
        elem.innerHTML = "text";
    }
});
*//*
let elems = document.querySelectorAll(".www");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
   let i = 1;
    for (let elem of elems){
        elem.innerHTML = elem.innerHTML + i;
        i++;
    }
});
*//*
let elems = document.querySelectorAll("#elem");
let paragraf = document.querySelector("#www");
let button = document.querySelector("#button");

button.addEventListener("click", function(){
    let sum = 0;
    for (let elem of elems){
        sum += Number(elem.value);
        //console.log(sum);
    }
    paragraf.innerHTML = sum;
});
*/
                    //Добавление обработчиков событий в цикле
/*
function func() {
    alert('!');
}
*//*
let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', func);
}

function func() {
    alert(this.innerHTML); // выводим текст абзаца
}
*//*
let elems = document.querySelectorAll('input');
for (let elem of elems){
    elem.addEventListener("blur", func);
}

function func() {
    this.value = Number(this.value) + 1;
}
*//*
let elems = document.querySelectorAll('p');

for (let elem of elems){
    elem.addEventListener("click", func);
}

function func(){
    this.innerHTML = this.innerHTML ** 2;
}
*/
                //Анонимные функции как обработчики событий
/*
let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', function () {
        alert(this.innerHTML);
    });
}
*//*
let divs = document.querySelectorAll('div');

for (let div of divs) {
    div.addEventListener('click', func);
}

function func() {
    this.innerHTML++;
}
*//*
let divs = document.querySelectorAll("div");

for (let div of divs){
    div.addEventListener("click", function(){
        this.innerHTML++;
    })
}
*/
                    //Отвязывание событий через removeEventListener
/*
let button = document.querySelector('#button');
button.addEventListener('click', func);
    //привязали
function func() {
    alert('!!!');
}

//let button = document.querySelector('#button');
//button.addEventListener('click', func);
    //отвязали
function func() {
    alert('!!!');
    this.removeEventListener('click', func);
}
*//*
let a = document.querySelector('a');
a.addEventListener('click', func);

function func() {
    this.innerHTML += '(' + a.href + ')';
    this.removeEventListener('click', func)
}
*//*
let input = document.querySelector("input");

input.addEventListener("click", func);

function func(){
    this.value < 10 ? this.value++ : this.removeEventListener('click', func);  
}
*/




