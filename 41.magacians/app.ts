let magician : string[] = ['Harry','Ron','Hermione','luna'];

function showMagicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

showMagicians(magician);