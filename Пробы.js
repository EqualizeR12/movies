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

