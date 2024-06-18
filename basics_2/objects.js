//   /**
//    * to construuct an object we have 2 ways:-
//    * 1. litrals's way
//    * 2. constructor's way 
//    * 
//    * 
//    * litrals->
//    * -> when we declare the object via litrals the singleton is not made
//    * const jsUser ={}//object declaration by litral method
//    * 
//    * 
//    * 
//    * 
//    * 
//    * constructor->
//    * -> when we declare the object via constructor the singleton is made.  
//    * -> Object.Create //constructer method -> the singleton is developed by it.
//    * 
//    */
//   const mysym = Symbol("mykey1");
//   const jsUser = {
//     name: "kartik pareek",
//     "first_name": "kartik",
//     age: "21",
//     email: "kartikpareek614@gmail.com",
//     isLoggedIn: "false",
//     [mysym]: "mykey1"//this is the syntax of symbol delclaration you have to learn it.
//   }

//   //to access the elements of the object the here are some ways:-
//   //1. by . operator
//   console.log(jsUser.name);
//   //2. when the key is given in the form of string then you have to use the method in which the values are accessed by the square brackets.
//   console.log(jsUser["email"]);
//   console.log(jsUser["first_name"]);// this type of data can't accessed by the . operator you have to use this format for it only.  
//   console.log(jsUser[mysym]); // you have to declare it in that otherwise it is detcted as a string instead of symbol.

//   // to change the data present in the object.
//   jsUser.email = "radhey_radhey@gmail.com";

//   //to freeze and inhibit the change to the object 
// //   Object.freeze(jsUser);// it will not give an error if there is some kind of object change occurs init further in the code.

//   //++++++++++++++++++++++++++++++++++++TREATING FUNCTION AS A VARIABLE IN JS++++++++++++++++++++++++++++++++++++++++

//   jsUser.greetings = function(){
//     console.log("ram ram ladar");
//   }
//   console.log(jsUser.greetings);//function is not executed its refrence comes to the interperter.
//   console.log(jsUser.greetings());//function is executed but the type is undefined.

//   //refrencing the same object in js

//   console.log(`hello JS user ${this.name}`);

//+++++++++++++++++++++++++++++++++++++++OBJECT CREATION VIA CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJECT DESTRUCTURE AND JSON API INTRO:-

const course = {
  courseName: "JS Deep Dive",
  price: "000",
  courseInstructor: "Hitesh Choudhary"
}
//if you want to print each value of the integer then you have to use three line with same syntax, which is not considered as good practice in the production, so we are uesing an ew method for it.
// const {courseInstructor} = course//and if you think that the courseInstructor is a big name then you can shorten it with your usecase.
const {courseInstructor : teacher} = course
console.log(teacher);

//this is known as destructuring of the objects, this is widely used in react.js so be prepared for it.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SOMETHING ABOUT API'S IN JS
/**
 * when you call an API then the data comes from an API in json format.
 * to fetch that data we have to call it and store it in an object.
 * sometimes the API's give data in the array of an objec then we have to use the previously tought methods to deal with them.
 * when the API gives you data in json format then you have to study it deeply in some specific format to get its deep understanding form it.
 * there is a website named as json formator which is used to get a understanding of the data in the different format based on developer's need.
 * 
 * in the industry all the data is travellin gin json format weather it is on ruby on rails or js itself.
 */