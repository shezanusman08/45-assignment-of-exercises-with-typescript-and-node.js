"use strict";
function makeSandwich(item) {
    console.log('Making your sandwich with');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !');
}
makeSandwich(['Ham', 'Cheese', 'letuce']);
makeSandwich(['Turkish', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
