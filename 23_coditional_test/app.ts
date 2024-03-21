let car: string = "subharu";

//test 1 equality camparision (true)
console.log("is car == 'subharu' i predicted true. ");
console.log(car == 'subharu');// true

//test 2 equality camparision (true)
console.log("is car === 'subharu' i predicted true. ");
console.log(car === 'subharu');// true

//test 3 inequality camparision (false)
console.log("is car != 'subharu' i predicted true. ");
console.log(car != 'subharu');// false

//test 4 inequality camparision (false)
console.log("is car !== 'subharu' i predicted true. ");
console.log(car !== 'subharu');// false


//test 5 less than camparision (false)
console.log("is car < 'subharu' i predicted true. ");
console.log(car < 'subharu');// false(lexicographic comparision)


//test 6 greater than camparision (false)
console.log("is car > 'subharu' i predicted true. ");
console.log(car > 'subharu');// false(lexicographic comparision)

//test 7 less than camparision (true)
console.log("is car <= 'subharu' i predicted true. ");
console.log(car <= 'subharu');// true

//test 8 greater than camparision (true)
console.log("is car >= 'subharu' i predicted true. ");
console.log(car >= 'subharu');// true

//test 9 checking truthness (true)
console.log("is car i predicted true. ");
console.log(car);// true (non-empty string is truthy)

//test 10 checking falsiness (true)
console.log("is !car i predicted true. ");
console.log(!car);// false (non-empty string is truthy)

