// 0.
// Напишіть цикл for для пошуку парних чи непарних чисел
// В консолі повинно бути скількі парних та непарних.

const numbers = "123123433424234234";
let double = 0;
let unpaired = 0;

for (let i = 0; i < numbers.length; i++) { 
    if (+numbers[i] % 2 === 0) { 
        double+=1 
    } else {
        unpaired+=1
    }
   
    // console.log(i +"-"+ numbers[i] )
} 

console.log("double " + double + "," + "unpaired " + unpaired);

console.log(`double - ${double}, unpaired - ${unpaired}`)