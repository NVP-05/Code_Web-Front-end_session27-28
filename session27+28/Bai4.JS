let n = +prompt("Nhập số phần tử có trong mảng ban đầu.");
let numbers = [];
let numbersChan = [];
let numbersLe = [];

for (let i = 0; i < n; i++) {
  let m = +prompt(`number[${i}] =`);
  numbers.push(m);
}

for (let i = 0; i < n; i++) {
  if (numbers[i] % 2 == 0) {
    numbersChan.push(numbers[i]);
  } else {
    numbersLe.push(numbers[i]);
  }
}

console.log("Mảng chẵn gồm các phần tử sau: ", numbersChan);
console.log("Mảng lẻ gồm các phần tử sau: ", numbersLe);
