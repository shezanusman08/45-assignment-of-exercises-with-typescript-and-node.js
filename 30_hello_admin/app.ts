const userNames: string[] = ['admin','tom','stark','quil','peter'];

userNames.forEach(userName =>{
    if(userName === 'admin'){
        console.log('hello admin, would you likr to see a status report?');
    }
    else{
        console.log(`hello ${userName}, thankyou for logging again.`);
    }
}) 