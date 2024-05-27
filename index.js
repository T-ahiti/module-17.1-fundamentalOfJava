var numbers = [45, 53, 89, 7.6, 30, 98, 56];
// index start hoy 0 theke.. 45=0th position
// 1.get element by index
console.log(numbers[0])
var element = numbers[1];
console.log(element)

// 2.set element value by index
// jodi kono position er number change korte chai
numbers[3] = 77;
// etar mane 7.6 er jaygay 77 hbe
console.log(numbers);

// find index of an element
var positionIndex = numbers.indexOf(98);
console.log(positionIndex);