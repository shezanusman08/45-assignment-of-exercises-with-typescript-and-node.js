"use strict";
let personname = '';
personname = prompt('Whats is your name?') || '';
let uppercase = personname.toLowerCase();
let lowerCase = personname.toUpperCase();
let titlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personname !== null && personname !== '') {
    alert(`Hello ${personname}, Here are your name in:
    LowerCase: ${lowerCase}
    UpperCase: ${uppercase}
    TitleCase; ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
