var guest_list = ['Hameed', 'Ali', 'Bashar', 'Amaan'];
//for(let i=0; i<guest_list.length; i++){
//   console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
//}
var not_present = 'amaan';
var new_guest = 'abdul rehman';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Hey ' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n');
}
// for(let i=0; i<guest_list.length; i++){
//     console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
// }
console.log("\nmr. ".concat(not_present, " will not coming tommorow birthday party"));
console.log('Good News! we find a big place to organize the party and we inviting more people');
guest_list.unshift('bashar');
guest_list.splice(2, 0, 'm.ahmed');
guest_list.push('babar');
for (var i = 0; i < guest_list.length; i++) {
    console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n');
}
console.log('\n\nSorry we cannot arrange big party, only 3 people are invited.');
while (guest_list.length > 3) {
    var remove_guest = guest_list.pop();
    console.log("sorry mr. ".concat(remove_guest, ", you are not invited for party"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('hey' + guest_list[i] + ',\n\n you are still invited.\nThankyou\n\n');
}
guest_list.splice(0, 3);
console.log(guest_list);
