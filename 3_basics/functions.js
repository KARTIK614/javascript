// /**
//  * in this lecture we are going to learn about the js in depth.
//  * 
//  */
// function saymyname(){//function defination.
//     console.log("heisenberg");
// }
// saymyname();//function calling
// saymyname//function refrencing.

// //here the concept is kind of similar to the cpp functions the they return values, take parameters in defination and many more.
// //passing deafult value whenever we have no parameters passed in it.
// function isUserLogin(username = "thande_papa")
// {
//     return console.log(username);
// }
// isUserLogin("kartik");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//when you have to deal with unmentioned variable where you don't have the information of number of variables.
//like the carting system of an ecommerce website where you can have multiple numbers of varibles.

//here we have to use the rest and spread operator for them.
// they are same operator but used on the types of uescase 
//their syntax are same.
// function hostalDays(...num1)//this is the rest operator in js we can use them to gather all the values passed in the function and collect them then return them in an array.

// {
// return num1;
    
// }
// console.log(hostalDays(200,233,4545,2323));//this is the output.
//if you have some specific variables and remaing are rest variables then you can construct the function just like:-
function schoolDays(val1, val2, ...num4)
{
    return val1+val2, num4
}
console.log(schoolDays(200,300,499,4,556,6767));
console.log("thande_papa");