// 1.
// За допомогою циклу for створіть новий рядок, додайте кожному элементу окрім 1 
// та останнього -.
// 1-2-3-4-5-6-7-8-9 - кінцевий результат

const numbers = "123456789";
let result = ""

for (let i = 0; i < numbers.length; i++) {

    // if ((numbers.length - 1) === i) {
    //     result += numbers[i];
    //     break;
    // }

    result += (numbers.length - 1) === i ? numbers[i] : numbers[i] + "-" ;
}

console.log(result)
