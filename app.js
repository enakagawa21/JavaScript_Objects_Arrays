console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
const numbers2 = [16,900,754,30,21,9089,39];




function arraySum (arr){
let sum = 0

for (let i = 0; i < arr.length; i++){
     sum += arr[i]

}

return sum;

}
console.log(arraySum(numbers2))
console.log(arraySum(numbers))





// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


const books = {
     name:["Title of book"],
     pages: [289],
     readCount: [50054]
}
books.info =
    ("This book is called " + books.name + " ,the book has " + books.pages + " pages. " + books.readCount + " people have read this book.")

    console.log(books.info)