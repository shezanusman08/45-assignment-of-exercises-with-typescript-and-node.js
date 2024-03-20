//store the location in the array, make sure the array is not in alphabethical order.
let places :string[] = ['America','London','Austrailia','Egypt'];

//print your array in orignal order.
console.log('orignal ' + places);


//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());

// show that your array is still in its orignal position by printing it again.
console.log('orignal ' + places);


//ptint your array in reverse alphaetcal order without changing the order of the orignal list.
console.log('copy ' + [...places].sort().reverse());

// show that your array is still in its orignal position by printing it again.
console.log('orignal ' + places);


//reverse the order of your list. print the array to show its order has changed.
console.log('orignal ' + places.reverse());

//reverse the order of your list again, print the list to show its back to its orignal position.
console.log('orignal ' + places.reverse());

//sort to change your array so its sorted in alphabetical order. print the array to show that this order has been change.
console.log('orignal ' + places.sort());

//sort to change your array so its sorted in reverse alphabetical order. print the list to show thatits order has changed.
console.log('orignal ' + places.sort().reverse());