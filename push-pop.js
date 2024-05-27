var numbers = [78, 88, 25, 326, 843, 6, 75]
// console.log(numbers.length)

// kono extra number array te jog korte chaile, automatically last element hoye jog hobe
numbers.push(63);
console.log(numbers);



//last element subtract korte chaile, as eta kaj ei kore last element er upor tai ar number or element er value likha lagtesena, js auto bujhtese je last element ke ber kore dite hbe
numbers.pop();
numbers.pop();
var eliment = numbers.pop();
console.log(eliment);
