"use strict";
let currentUser = ["Alex", "Mitchel", "Kane", "Babar", "Rizwan"];
let newUsers = ["Naseem", "Babar", "Haris", "Kane", "Rizwan"];
newUsers.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. write another username.`);
    }
    else {
        console.log(`the usename ${newUsername} is available`);
    }
});
