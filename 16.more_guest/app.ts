let guest_list : string [] = ['hameed','bashar','amaan'];

//for(let i=0; i<guest_list.length; i++){
  //   console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
 //}


let not_present : string = 'amaan';

let new_guest : string = 'abdul rehman';

guest_list [2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
}


for(let i=0; i<guest_list.length; i++){
    console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
}


console.log(`\nmr. ${not_present} will not coming tommorow birthday party`)

console.log('Good News! we find a big place to organize the party and we inviting more people')

guest_list.unshift('ali');
guest_list.splice(2 , 0 , 'm.ahmed');
guest_list.push('babar');

for(let i=0; i<guest_list.length; i++){
    console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
}

