function filterArray(numbers, value) {
  const filter = [];
  //1) i - початок відліку
  //2) цикл
  //3) збільшення і на 1 з кожним циклом
  for (let i = 0; i < numbers.length; i++) {
    // умова для повернення більших чисел у новий масив
    if (numbers[i] > value) {
      filter.push(numbers[i]);
    }
  }
  return filter;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
