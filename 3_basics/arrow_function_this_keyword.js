/**
 * this:- this is used to refer the current context of the function.
 * for example in the below example the userName is defined as kartik but in future it may change to another username, to solve this probelum we use the this keyword in it to specify the proper context of the function.
 * in arrow function the this keyword is not present.
 * if you use console.log(this); -> this will give you empty in node enviroment, but in browser enviroment it gives you window
 * window-> it is the most global object in the browser(interview question).
 * 
 * reson:-in js when it is runed in node enviroment there is no other things(objects) are present in it, but when you execute it in browser enviroment it has window object declared previously in the browser for execution of some specific events like forms and other things.
 * 
 * you can access the this.<variable name> in objects only you can't access it inside the function.
 * 
 * if you try get what is inside the this keyword then you will get many things that is quite in giving time.
 * 
 */
// const user = {
//     userName: "kartik",
//     price: 9992,
//     welcomeUser: function()
//     {
//         console.log(`${this.userName}, welcome to website`);
        
//     }
// }

// console.log(user.welcomeUser());
// console.log(this);

//++++++++++++++++++++++++++++ARROW FUNCTION+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// in conversion of a normal function to arrow function just remove the function keyword and use =>  between the () and {} for example
const sample = ()=>
    {
        console.log("sample code execution");
        //this keyword return undefined and {} because in it so no need to run it in it.

}
//IMPLICIT RETURN OF THE ARROW FUNCTION(it is a type of arrow function) which is written by.
const addSum = (num1, num2) => num1+num2 //this is the syntax of implicit arrow function which is used to define small but required functions.
//you have to write return keyword if the curly braces is written in the code to manage its scope.
//this techinque is written at a extreme level in react.

//to return an object you have to wrap it into a paranthesis always.
