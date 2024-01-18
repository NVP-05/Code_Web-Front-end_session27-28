let n = +prompt("Nhập số phần tử có trong mảng.");
let numbers = [];

for (let i = 0; i < n; i++) {
  let m = +prompt(`number[${i}] = `);
  numbers.push(m);
}
for (let i = 0; i < n; i++) {
  if (numbers[i] % 2 != 0) {
    numbers.splice(i, 1);
    n--;
  }
}

console.log(numbers);
