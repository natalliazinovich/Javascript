// // 2я домашка по JS со звездочками:

// // 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let a = 2;
// for (let i = 1; i < 11; i++) {
//   console.log(a ** i);
// }

// // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// const pow = function (counter) {
//   let a = 2;
//   for (let i = 1; i <= counter; i++) {
//     console.log(a ** i);
//   }
// };
// pow(15);

// // 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// // Пример в консоли:
// // :)
// // :):)
// // :):):)
// // :):):):)
// // :):):):):)

// let result = "";
// let smile = ":)";

// for (let i = 1; i < 6; i++) {
//   console.log((result += smile));
// }

// // 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

let result = "";
let smile = ":)";

function printsmile(smile, numberOfRows) {
  for (let i = 1; i <= numberOfRows; i++) {
    console.log((result += smile));
  }
}
printsmile(":)", 5);

// // 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.e.g. function getWordStructure(word)
// // В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв
// // Проверки: 'case', 'Case', 'Check-list'

// function getWordStructure(word) {
//   const vowels = "aeiouy".split("");
//   const consonants = "bcdfghjklmnprstvwxz".split("");
//   let vowelsCount = 0;
//   let consonantsCount = 0;
//   for (const char of word.toLowerCase()) {
//     if (vowels.includes(char)) vowelsCount++;
//     else if (consonants.includes(char)) consonantsCount++;
//   }
//   console.log(
//     `Cлово ${word} состоит из ${vowelsCount} гласных и ${consonantsCount} согласных букв`
//   );
// }
// getWordStructure("case");
// getWordStructure("Case");
// getWordStructure("Check-list");

// // 4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word) Проверки: 'abba', 'Abba'

// function isPalindrom(word) {
//   word = word.toLowerCase();
//   for (let i = 0, j = word.length - 1; i < word.length, j >= 0; i++, j--)
//     if (word[i] !== word[j]) {
//       return false;
//     }
//   return true;
// }
// console.log(isPalindrom("abba"));
// console.log(isPalindrom("Abba"));
