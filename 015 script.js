/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

//.......................................................................
//Код предыдущего задания 👇
// 'use strict';

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
//👆
//......................................................................

//Код задания этого файла!👇
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//1. Автоматиация процесса! 👇👇👇
for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    // personalMovieDB.movies[a] = b;

             //2. Отмена имеет значение null. Для вып-я задания, будем работать с условием НЕ( НЕ пустую строку, НЕ нажал "отмена" и длина названия НЕ 50 символов; a.length - max длина символов!)
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done!');
    } else {
      console.log('Err!');
      i--;//Если условие if не вып-сь, мы возвращаем цикл на 1 шаг назад, т.е. к нашим вопросам, кот. нах-ся в const!
    }
}//👆👆👆

              //3.  personalMovieDB.count - .count - обращаемся к свойству personalMovieDB, а именно к count!
if (personalMovieDB.count < 10) {
   console.log("Просмотрено довольно мало фильмов 😐");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель 😉");
} else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
  console.log("Вы киноман 😎");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);


//..................................................................
                  //4. Два других способа!!!

// let i = 0;

// do {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('Done!');
//   } else {
//     console.log('Err!');
//     i--;
//   }
//   i++;
// } while (i < 2);
//.......................................................................

// while (i < 2) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('Done!');
//   } else {
//     console.log('Err!');
//     i--;
//   }
//   i++;
// }
//......................................................................
//Код задания этого файла!👆


//....................................................................
                          //Чистый код!!!
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('Done!');
//   } else {
//     console.log('Err!');
//     i--;
//   }
// }
// if (personalMovieDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов 😐');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель 😉');
// } else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
//   console.log('Вы киноман 😎');
// } else {
//   console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);


