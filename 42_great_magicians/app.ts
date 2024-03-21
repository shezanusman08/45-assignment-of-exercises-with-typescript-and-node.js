let magician : string[] = ['Harry','Ron','Hermione','luna'];


function makeGreat (magicianArray:string[] ){
    for(let i=0; i<magicianArray.length; i++){

      magician[i] = 'The Great ' + magicianArray[i]
    }
}





function showMagicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
makeGreat(magician);
showMagicians(magician);