let guest_list : string [] = ['hameed','bashar','amaan'];

for(let i=0; i<guest_list.length; i++){
     console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
 }


let not_present : string = 'amaan';

let new_guest : string = 'abdul rehman';

guest_list [2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
}
guest_list.unshift('m.ahmed','ali','babar');

for(let i=0; i<guest_list.length; i++){
    console.log('hey' + guest_list[i] + ',\n\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
}


console.log(`\nmr. ${not_present} will not coming tommorow birthday party`)