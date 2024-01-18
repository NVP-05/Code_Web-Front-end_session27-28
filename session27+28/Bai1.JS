let n = +prompt("Nhập số các phần tử trong mảng.");
let numbers = [];
for (let i = 0; i < n; i++) {
  let m = +prompt(`number[${i}] = `);
  numbers.push(m);
}
console.log(numbers);
let max = [numbers[0]];

for (let i = 1; i < n; i++) {
  if (max[0] < numbers[i]) {
    max[0] = numbers[i];
  }
}

let min = [numbers[0]];
for (let i = 1; i < n; i++) {
  if (min[0] > numbers[i]) {
    min[0] = numbers[i];
  }
}

let maxMin = [max[0], min[0]];
console.log(maxMin);
