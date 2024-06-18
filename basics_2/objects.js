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

const user = new Object();
user.email= "kartikpareek614@gmail.com";
  user.lastname= "pareek";
  user.firstname= "kartik";

//you can declare an object inside another object also for example

const regularUser  = {
  email: "kartikpareek614@gmail.com",
  name:{
    nickName:"vaibhav",
    userFullname:{
      firstName: "kartik",
      lastName:"pareek"
    }
  }
}
// console.log(regularUser);//for accessing the whole object.
// console.log(regularUser.name.userFullname.firstName);// to access the lst element in the nested object.


//you can merge an object to another objects by following functions:-

// const obj3 = Object.assign({},user, regularUser);//this will arrange the objects in an organised manner and the {}(optional parameter) validates that the result should be in a good manner.
// the syntaz works as like
// Object.assign(target,source) -> in the upper array the empty object is works as a target and the user and the regularUser works as a source for the merging of the objects.

// console.log(obj3);

//BUT MOSTLY USED METHOD IS:-
// const obj3 = {...user, ...regularUser}
// console.log(obj3);


// to get all the keys and values in an object in an array for specific usecases.

console.log(Object.keys(user));
console.log(Object.values(user));
//this seems to be very usefull in performing the operation on the keys and values pairs in when we are trying to make the array of both key and values then we can make this by using.
console.log(Object.entries(user));


