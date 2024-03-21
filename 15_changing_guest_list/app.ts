let guest_list : string [] = ['hameed','bashar','amaan'];
for(let i=0; i<guest_list.length; i++){
     console.log('hey' + guest_list[i] + ',\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
 }
export{guest_list};

let absent_guest : string = 'Babar Azam';
let new_guest :string = 'Muhammad Rizwan';

guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){
    console.log('hey' + guest_list[i] + ',\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n')
}

console.log(`${absent_guest} is not coming.`);