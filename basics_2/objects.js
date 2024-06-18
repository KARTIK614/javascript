  /**
   * to construuct an object we have 2 ways:-
   * 1. litrals's way
   * 2. constructor's way 
   * 
   * 
   * litrals->
   * -> when we declare the object via litrals the singleton is not made
   * const jsUser ={}//object declaration by litral method
   * 
   * 
   * 
   * 
   * 
   * constructor->
   * -> when we declare the object via constructor the singleton is made.  
   * -> Object.Create //constructer method -> the singleton is developed by it.
   * 
   */
  const mysym = Symbol("mykey1");
  const jsUser = {
    name: "kartik pareek",
    "first_name": "kartik",
    age: "21",
    email: "kartikpareek614@gmail.com",
    isLoggedIn: "false",
    [mysym]: "mykey1"//this is the syntax of symbol delclaration you have to learn it.
  }

  //to access the elements of the object the here are some ways:-
  //1. by . operator
  console.log(jsUser.name);
  //2. when the key is given in the form of string then you have to use the method in which the values are accessed by the square brackets.
  console.log(jsUser["email"]);
  console.log(jsUser["first_name"]);// this type of data can't accessed by the . operator you have to use this format for it only.  
  console.log(jsUser[mysym]); // you have to declare it in that otherwise it is detcted as a string instead of symbol.

  // to change the data present in the object.
  jsUser.email = "radhey_radhey@gmail.com";

  //to freeze and inhibit the change to the object 
//   Object.freeze(jsUser);// it will not give an error if there is some kind of object change occurs init further in the code.

  //++++++++++++++++++++++++++++++++++++TREATING FUNCTION AS A VARIABLE IN JS++++++++++++++++++++++++++++++++++++++++

  jsUser.greetings = function(){
    console.log("ram ram ladar");
  }
  console.log(jsUser.greetings);//function is not executed its refrence comes to the interperter.
  console.log(jsUser.greetings());//function is executed but the type is undefined.

  //refrencing the same object in js

  console.log(`hello JS user ${this.name}`);

