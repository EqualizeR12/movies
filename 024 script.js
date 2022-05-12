/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// 'use strict';

            // Код возьмите из предыдущего домашнего задания

// let numberOfFilms;
// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('Done!');
//     } else {
//       console.log('Err!');
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов 😐');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель 😉');
//   } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
//     console.log('Вы киноман 😎');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {12
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();
//................................................................

                        //Код этого задания

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: () => {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (
//       personalMovieDB.count == '' ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//   },
//   rememberMyFilms: () => {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//       } else {
//         console.log('Err!');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: () => {
//     if (personalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов 😐');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический зритель 😉');
//     } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
//       console.log('Вы киноман 😎');
//     } else {
//       console.log('Произошла ошибка');
//     }
//   },
//   showMyDB: (hidden) => {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: () => {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },

//   writeYourGenres: () => {
//     for (let i = 1; i <= 3; i++) {
//       let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//       if(genre === '' || genre == null) {
//          console.log('Вы ввели некорректные данные или не ввели их совсем');
//          i--;
//       } else {
//           personalMovieDB.genres[i - 1] = genre;
//       }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },

   //Другой метод👇👇
//   writeYourGenres: () => {
//     for (let i = 1; i < 2; i++) {
//         let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
//       if (genres === '' || genres == null) {
//         console.log('Вы ввели некорректные данные или не ввели их совсем');
//         i--;
//       } else {
//         personalMovieDB.genres = genres.split(', ');
//         personalMovieDB.genres.sort();
//       }
//       //👆👆
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },
// };
