let car: string = 'subaru';
let age: number = 25;
let numbers: number[]= [1, 2, 3, 4];






// **string test**

//test 1: equality (true)
console.log("is car == 'subaru', i pridicted true.");
console.log(car == 'subaru'); //true (case-sensitive)

//test 2: equality (true)
console.log("is car === 'subaru', i pridicted true.");
console.log(car === 'subaru'); // false (case-sensitive))


//test 3: inequality (true)
console.log("is car != 'toyota', i pridicted true.");
console.log(car != 'toyota'); // true


//test 4: equality (true)
console.log("is car !== 'subaru', i pridicted true.");
console.log(car !== 'subaru'); // false (case-sensitive)


// ** lowercase function test**

// test 5: lowercase conversion (true)
console.log("is car.tolowercase() == 'subaru', i pridicted true.")
console.log(car.toLowerCase() == 'subaru'); // true (convert to lowercase)


// test 6: lowercase conversion (false)
console.log("is car.tolowercase() === 'subaru', i pridicted false.")
console.log(car.toLowerCase() === 'subaru'); // false (orignal value remains uppercase)



// **numerical test**

//test 7: equality (true)
console.log("is age == 25, i predicted true.")
console.log( age == 25.) //true


//test 8: inequality (false)
console.log("is age != 30, i predicted true.")
console.log( age != 30.) //(true)


//test 9: greater than (false)
console.log("is age > 30, i predicted false.")
console.log( age > 30, ) //false


//test 10: less than or equal (true)
console.log("is age <= 25, i predicted true.")
console.log( age <= 25, ); //true

 

// **logical operator**

//test 11: AND (true)
console.log("is age > 20 && age < 30? i predicted true.")
console.log( age > 20 && age < 30); //true (both condition met)

//test 12: OR false 
console.log("is age >30 || age < 18? i predicted false. ")
console.log(age >30 || age < 18); //false (neither condition met)


// **array test**

//test 13: in array (true)
console.log("is 3 in numbers? i predicted true.")
console.log(3 in numbers); //true 

// test 14: not in array (false)
console.log("is 5 not in numbers? i predicted true.")
console.log(5 in numbers); //false 
