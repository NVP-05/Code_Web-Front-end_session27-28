let n = +prompt("Nhập số phần tử có trong mảng.");
let numbers = [];

for (let i = 0; i < n; i++) {
  let m = +prompt(`numbers[${i}] = `);
  numbers.push(m);
}
console.log("Mảng trước khi tìm ra các phần tử độc nhất là:", numbers);

let k = 1;
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers = [numbers[i]];
  if (k == numbers.length - 1) {
    newNumbers = [numbers[i - 1]];
    break;
  }
  for (let j = k; j < numbers.length; j++) {
    if (newNumbers[0] == numbers[j]) {
      numbers.splice(j, 1);
      numbers.splice(i, 1);
      i--;
      break;
    } else if (j == numbers.length - 1) {
      k = j;
      break;
    }
  }
}

console.log("Mảng sau khi tìm ra các phần tử độc nhất là:", newNumbers);
