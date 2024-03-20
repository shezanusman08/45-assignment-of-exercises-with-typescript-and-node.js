let personname :string = '';

personname = prompt('Whats is your name?') || ''
let uppercase :string = personname.toLowerCase()
let lowerCase :string = personname.toUpperCase()

let titlecase :string = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
 
if(personname !== null && personname !== ''){
    alert(`Hello ${personname}, Here are your name in:
    LowerCase: ${lowerCase}
    UpperCase: ${uppercase}
    TitleCase; ${titlecase}`)
}
else{
    alert('Please fill your name !')
}