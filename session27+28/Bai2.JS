let a = +prompt("Nhập số nguyên a.");
let b = +prompt("Nhập số nguyên b.");
let numbers = [];

if (a < b) {
  for (let i = a + 1; i < b; i++) {
    numbers.push(i);
  }
} else if (a > b) {
  for (let i = b + 1; i < a; i++) {
    numbers.push(i);
  }
} else {
  console.log("Không có số nào nằm giữa a và b");
}

console.log(numbers);
