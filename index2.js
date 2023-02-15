// Дано масив з рядками.
// Створіть функцію
// яка переверне символи кожного рядка
// у зворотному порядку.

// const strings = ["java", "sql", "javaScript", "c++", "node"];




// function getReversedStringArray(strings, callBackStr) {
    
//     strings.forEach((string, index) => {
//         strings[index] = callBackStr(string);
//     })
    
//     return strings;
// }

// function getReversedString(string) {
//     let getString = '';
    
//     for (let i = string.length - 1; i >= 0; i -= 1) {
//        getString += string[i] ;
//     }
    
//     return getString;
// }

// console.log(getReversedStringArray(strings, getReversedString));


// getReversedWordArray(strings);


// forEach((item, index, arr) => {

// })

// forEach(item => {

 // })

 const strings = ["java", "sql", "javaScript", "c++", "node"];

 function getReversedWordArray(strings) {
     
     strings.forEach((string, index) =>  strings[index]=string.split("").reverse().join(""))
     return strings;
 }
 
 
 getReversedWordArray(strings);
 console.log(strings);