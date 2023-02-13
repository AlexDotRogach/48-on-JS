// Знайти найбільше значення масиву
const arr = [14, 300, 32, 12, 43, -23];
let maxNum = arr[0];

for (const num of arr) {
    if (maxNum > num) continue;

    maxNum = num;
}

const obj = {
    name : "Alex"
}

console.log(arr)
