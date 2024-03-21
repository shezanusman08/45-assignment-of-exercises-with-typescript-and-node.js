let currentUser: string[] = ["Alex","Mitchel","Kane","Babar","Rizwan"];

let newUsers: string[] = ["Naseem","Babar","Haris","Kane","Rizwan"];

newUsers.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();
    if(currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available. write another username.`);
    }
    else{
        console.log(`the usename ${newUsername} is available`);
    }
})