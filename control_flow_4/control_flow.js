/**
 * CONTROL FLOW :- in JS it is a bit different because for the user that logged in the website it is something else and the uesr that has logged in it is something else.
 * some of the things are new in JS but the remaining things are not differnt in JS.
 * the different and new things are as follows:-
 * 
 * Nullish coalescing operator(??):-
 * all story is depends on NULL and Undefined here
 *  basically when you call some kind of query from database then chances are that you can get error from that so this function is designed when the first method fails then the another method runs automatically so that the codes do not crash or generates any kind of error
 * you can make a chain of then based on the possibly of the outcome from the database.
 * for example
 * if
 *
 */

// let val1 = null??90;//this could be the return values from the function.
// console.log(val1);//this will return the value as 90 not null.


/**
 * in this lecture no need to learn something new they are basic conditionals and their brothers in it the.
 * also with this the for loop and different type of for loop also come in it
 * slightlt do more focus on for each loop beacuse it is used in fetching data from the API's and JSON format.
 *  for example of data fetching using for each loop is 
 * 
 */
// const myCoding = 
// [
//     {
//         languageName: "javascript",
//         languageFileType: "JS"
//     },
//     {
//         languageName: "c++",
//         languageFileType: "cpp"
//     },
//     {
//         languageName: "java",
//         languageFileType: "java"
//     },
//     {
//         languageName: "python",
//         languageFileType: "py"
//     }
// ]
// //accessing each and every value using for each loop.

// myCoding.forEach((item)=>{
//     console.log(item.languageFileType);
// })
//forEach dosen't return any kind of value 
//other things related to the looping.

const myNums =[1,2,3,4,6,7,8,9,10]

let var2 = myNums.filter((num)=>num>5)// return the values
// if you write this value in {} then you have to return the value using return keyword.

console.log(var2);
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

//////////////////////////data fetching from server///////////////////////////////////////////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);








  ///////////////////////MAP//////////////////////////
  
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
//here you are applying all the methods in it.
console.log(newNums);



//reduce 

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);