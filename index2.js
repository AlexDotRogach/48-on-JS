// Потрібно дістати кожну першу букву та вивести їх через крапку в більшому регістрі
// I am a student again --> S.A
// Якщо в нас слово має тільки дві букви або одну то пропускаємо
// const phrase = "I am a student again";
// let result = "";

const phase = " I am a    student again";
// const phaseNoSpaces = phase.trim();
// let partOfPhrase = "";
// let result = "";

// for (let i = 0; i < phaseNoSpaces.length; i++) {
//     if (phaseNoSpaces[i] === " ") continue;
//     partOfPhrase += phaseNoSpaces[i];
//     if (phaseNoSpaces[i + 1] === " " || !phaseNoSpaces[i + 1]) {
//         if (partOfPhrase.length <= 2) {
//             partOfPhrase = "";
//             continue;
//         }

//         const upperPartOfPhrase = partOfPhrase[0].toUpperCase();

//         result += !phaseNoSpaces[i + 1] ? upperPartOfPhrase : upperPartOfPhrase + ".";
//         partOfPhrase = "";
//     }
// }

// console.log(result)
// const phaseArray = phase.split(' ');
// console.log(phaseArray);
// let result = "";
// for (const word of phaseArray) {
//     if (word.length <= 2) continue
//     result += word[0].toUpperCase() + ".";
// }
// console.log(result);


const phaseArray = phase.split(' ');
console.log(phaseArray);
let result = [];
for (const word of phaseArray) {
    if (word.length <= 2) continue
    // result += word[0].toUpperCase() + ".";
    result.push(word[0].toUpperCase());
}
console.log(result.join("."));