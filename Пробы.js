// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');

//   personalMovieDB.movies[a] = b;
//   personalMovieDB.movies[c] = d;

//   console.log(personalMovieDB);
//.......................................................................

                           //УСЛОВИЯ!!!
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//  console.log('error');
// }
//...............................
// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }
//...............................................
               //ТЕРНАРНЫЙ ОПЕРАТОР - исп-ся три аргумента

// const num = 50;
// (num === 50) ? console.log('Ok!') : console.log('Error');

     // Вместо if, можно исп-ть switch case!! Это более удобно и лучше!!
//case - только строгое соответствие!!!

// const num = 50;
// switch (num) {
//   case 49:
//     console.log('Wrong!');
//     break; //Если условие сработало, не проверять последующие условия!!!
//   case 100:
//     console.log('Wrong!');
//     break;
//   case 50:
//     console.log('Right!!!');
//     break;
//     default://Eсли ни одно условие не вып-сь. Знач. по умолчанию!
//         console.log('So sorry!');
//         break;
// }
//......................................................................

                            //ЦИКЛЫ!!!

// let num = 50;

        //1. Пока условие не выполнено, мы будем делать такие действия{}
// while (num <= 55) {
//     console.log(num);
//     num++;// Увеличиваем, чтобы избежать бесконечного цикла!!!
// }

             //2. Сначала заставить цикл что-то сделать, а потом проверить условие и, если нужно, выйти из цикла!

//Сделай что-то
// do {
//     console.log(num);
//     num++;
// } while (num < 55);

            //3. Можно подробно его настроить. 
        //() - условия и трёх аргументов, но может быть и пустым.
        //let i = 1; - начало цикла!
        //i < 8; - условие прекращения цикла!
        //i++ - шаг цикла!
// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

                //Подвязать реальные данные! 
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

               //Закончить цикл досрочно! С помощью break!
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;//Прерывает цикл на этом этапе
//     }
//     console.log(i); 
// }

                //Пропустить ненужный шаг, не прерывая полностью цикл можно с помощью continue!
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;//Цикл пропустит значение (i === 6) и не прерывать цикл!
//     }
//     console.log(i); 
// }
//.......................................................................

                                //ФУНКЦИИ!!!

// function showFirstMessage () {
//     console.log('Hello!');
// }

// showFirstMessage();

// function showFirstMessage (text/*Аргументы*/) {
//     console.log(text);
// }

// showFirstMessage('Hello world!');//Указываем содержание аргумента! 

//................................

// let num = 20;//Глобальная переменная. console.log(num); покажет 20! Без  num = 10; 

// function showFirstMessage (text) {
//         console.log(text);
//         //1. let num = 20;//Локальная переменная, сущ-т только внутри ф-и. console.log(num); выдаст ошибку!

//         //2. num = 10;//Исп-м глобальное значение let!

//         //3. let num = 15;//Записываем локально. В console.log(num); получим 20!  
//         let num = 15;
//         console.log(num);
//     }
    
//     showFirstMessage('Hello world!');
//     console.log(num);
// //....................................
//     function calc(a, b) {
//         return (a + b);
//     }

//     console.log(calc(4, 3));
//     console.log(calc(5, 7));
//     console.log(calc(14, 1));
// //.....................................
//     function ret() {
//         let num = 50;
//         return num;
//     }

//     const anotherNum = ret();
//     console.log(anotherNum);
// //......................................

//         //Такую ф-ю можно вызвать только после объявления!!!
// const logger = function() {
//     console.log('Hello!');
// };
// logger();
// //.......................................

// // const calc1 = (a, b) => a + b;

// const calc1 = (a, b) => {
//     console.log('1');
//     return a + b;
// };
// //....................................................................

                        //МЕТОДЫ И СВ-ВА СТРОК И ЧИСЕЛ
//Св-ва вызываются через "." - имя.lenght
// const str = 'test';
// const arr = [1, 2, 3];

// console.log(str[2]);//s - третий символ!
// console.log(str.length);//4 - кол-во символов в строке(длина строки)
// console.log(arr);//3 - 1, 2, 3!

                 //Метод изменения регистра!!

// const str = 'test';
// const arr = [1, 2, 3];

// console.log(str.toUpperCase());//Новое значение. Все заглавные!
// console.log(str.toLowerCase());//Все маленькие (н-р, teSt -> test)
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));//5 Поиск подстроки
// //......................................

//                   //Вырезка из строки
// const logg = 'Hello world!';
// console.log(logg.substring(6, 12));
// // console.log(logg.slice(6, 12));//world! - вырезаем кусочек строки. 6 - начало, 12 - конец, не включая последний (12й) символ. Если просто (6) - начинаем вырезать с 6го символа и до конца строки!
// // console.log(logg.substr(6, 12)); УСТАРЕВШЕЕ!

// //......................................

// const num = 12.2;
// console.log(Math.round(num));//Округлили до ближайшего целого

// const test = '12.2px';
// console.log(parseInt(test));//Перевод строки в ЦЕЛОЕ число; 
// console.log(parseFloat(test));//Перевод строки в число с ДЕСЯТИЧНЫМИ ЗНАЧЕНИЯМИ;
//.......................................................................

                    //CALLBACK - ФУНКЦИИ!!

//CALLBACK - ф-я, кот. должна быть вып-на после того, как другая ф-я завершила своё вып-е!

// function first() {
//     //Do something
//     setTimeout(function() {//Задержка
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();
//Если ф-и в коде идут одна за другой, ЭТО НЕ ЗНАЧИТ, что и ВЫПОЛНЯТЬСЯ ОНИ БУДУТ В ТАКОЙ ЖЕ ПОСЛЕД-ТИ!!!

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// // learnJS('JS', function() {
// //     console.log('Bla Bla');
// // });

// function done() {
//     console.log('Bla Bla');
// }
// learnJS('JS', done);
//....................................................................

                //Методы объектов

// const options = {
//     name:'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     }
// };
// console.log(options.name);

// delete options.name;//Удаляем св-во из объекта
// console.log(options);
//.....................................

//Перебрать св-ва ОБЪЕКТОВ можно с пом. цикла for in!

//key - ключ (name, width и т.д.)
//Такой цикл будет работать столько раз, сколько св-в нах-ся внутри объекта
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     //${options[key]} - присвоит своему ключу ${key} своё значение!
//     //Свойство name имеет значение test
//     //Свойство width имеет значение 1024
//     //Свойство height имеет значение 1024
//     //Свойство colors имеет значение [object Object]
// }



// for (let key in options) {//Можно сделать перебор внутри перебора
//     if (typeof(options[key]) === 'object') {
//         for (let i  in options[key]) {
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
//     //Свойство name имеет значение test
//     //Свойство width имеет значение 1024
//     //Свойство height имеет значение 1024
//     //Свойство border имеет значение black
//     //Свойство background имеет значение red
// }
//..........................................

//Подсчёт св-в в объекте! Но не очень удобно, т.к. каждый раз вручную нужно писать
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i  in options[key]) {
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//            counter++;
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
//..........................................
//Так проще 👇👇👇👇
// const options = {
//     name:'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     }
// };
// console.log(Object.keys(options).length);//Получаем массив со всеми ключами!!! .length - даёт кол-во элементов в массиве - 4!
//👆👆👆

//Чтобы наш объект умел что-то делать, мы можем внутрь записывать ф-и
// const options = {
//     name:'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };
// options.makeTest();
// //деструктуризация
// const {border, bg} = options.colors;
// console.log(border);
//.....................................................................

                              //МАССИВЫ!!!
// const arr = [1, 2, 3, 6, 8];
// console.log(arr.length);//5
// arr[99] = 0;
// console.log(arr.length);//100, но это не так. 94 - undefined

// arr.pop();//Удаляет последний элемент
// console.log(arr);//Без 8

// arr.push(10);//Добавляется элемент
// console.log(arr);//В конце появляется 10
//.........................................

// const arr = [1, 2, 3, 6, 8];

//Перебор массива
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]); 
// }

// for (let value of arr) {//Только для массивов
//     console.log(value);
// }//Хорош тем, что можно исп-ть break & continue! Остановить цикл.

//Метод forEach - позволяет гибко перебрать все элементы внутри массива
//3 аргумента: 1й - элемент перебора(наываем как угодно); 2й - номер по порядку; 3й - ссылка на массив, кот. перебираем
// arr.forEach(function(item, i, arr) {
//     console.log(`${i} : ${item} внутри массива ${arr}`);
// });
//..................................................

//Формирование массива на основании строк
// const str = prompt('', '');
// const product = str.split(', ');//Ввод через ,
// console.log(product);//Массив

//Формирование строчек на основании массива. join - объединение элементов массива
// const str = prompt('', '');
// const product = str.split(', ');//Ввод через ,
// console.log(product.join('; '));//Чере какой делитнль получить результат
//...........................
//Метод сортировки
// const str = prompt('', '');
// const product = str.split(', ');//Ввод через ,
// product.sort();//По алфавиту. Сортировка строк
// console.log(product.join('; '));

// const qwe = [1, 32, 12, 4, 7];
// qwe.sort();//Сортирует, как строки: сначала все числа с 1, потом 2 и т.д.
// console.log(qwe);

// const qwe = [1, 32, 12, 4, 7];
// qwe.sort(compareNum);//Всё будет по порядку!
// console.log(qwe);

// function compareNum (a, b) {
//     return a -b;
// }

//Псевдомассивы - не имеют методы! Структура, кот. хранит данные по порядку!
//....................................................................

                   //ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ
//Передача по значению 👇
// let a = 5,
//   b = a;
// b = b + 5;

// console.log(b);//10
// console.log(a);//5

//Передача по ссылке 👇👇
// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;//Ссылка, не копия объекта!

// copy.a = 10;

// console.log(copy);
// console.log(obj);
//...........................................

//Создание настоящей копии 👇
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

//const newNumbers = copy(numbers);//Клонирование объекта
//Поверхностная копия объекта
//newNumbers.a = 10;//Нормально работает только это!
//newNumbers.c.x = 10;//Ссылаемся на ссылку, а не на значение! В реультате именено будет и в numbers!

// console.log(newNumbers);
// console.log(numbers);


//Соеденить несколько объектов. Add & numbers
// const add = {
//     d: 17, 
//     e: 20
// };
//1й - объект, В кот. нужно всё поместить; 2й - который помещаем;   
// console.log(Object.assign(numbers, add));
//a: 2
//b: 5
//c: {x: 10, y: 4}
//d: 17
//e: 20

// const clone = Object.assign({}, add);//Просто копия объекта

// clone.d = 20;
// console.log(add);//{d: 17, e: 20}
// console.log(clone);//{d: 20, e: 20}

// //Копия массива

// const oldArray = ['a, b, c'];
// const newArray = oldArray.slice();

// newArray[1] = 'wqesdaasda';
// console.log(newArray);//['a, b, c', 'wqesdaasda']
// console.log(oldArray);//['a, b, c']
//.................................

//Оператор раворота - Sread
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['w', 'lj', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

//.................................
// const array = ['a', 'b'];
// const newArrray = [...array];
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
//....................................................................

                //ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ
//Прототипно-ориентированное программирование
// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);
//....................................
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello!');
//     }
// };

// const jonh = {
//     health: 100
// };

// john.__proto__ = soldier;//Устаревший формат!!!
// console.log(jonh.armor);//100

// john.sayHello();//'Hello!'
//....................................
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello!');
//     }
// };

// const jonh = Object.create(soldier);//Создали объект jonh, который будет прототипно наследоваться от soldier!!

//........
// const jonh = {
//     health: 100
// };

// //1й - объект, которому присваиваем прототип! 2й - от которого!
// Object.setPrototypeOf(jonh, soldier);
// // console.log(jonh.armor);//100
//.........

//jonh.sayHello();//'Hello!'
//.....................................................................

                //
