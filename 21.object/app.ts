interface item {
    name:string
    price:number
}
// create two object
const book: item ={
    name: 'RICH DAD POOR DAD'
    price:450
}
const fruit: item ={
    name: 'apple'
    price: 200
}
console.log(`book name: ${book.name}, price: rs${book.price}`)
console.log(`fruit name: ${fruit.name}, price: rs${fruit.price}`)