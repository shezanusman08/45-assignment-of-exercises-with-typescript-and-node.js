"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ['hameed', 'bashar', 'amaan'];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log('hey' + guest_list[i] + ',\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n');
}
let absent_guest = 'Babar Azam';
let new_guest = 'Muhammad Rizwan';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('hey' + guest_list[i] + ',\n tommorow is my birthday and you are invited ofcource,\nThankyou\n\n');
}
console.log(`${absent_guest} is not coming.`);
