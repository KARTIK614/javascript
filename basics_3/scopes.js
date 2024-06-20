/**
 * scope(game of variable declaration between brackets(paranthesis)).
 * in it we are studing about the variable validation in code upto a certain level.
 * it means that the variable is declared in a function can or cannot be used outside of the function (we have to study it) 
 * var can be used outside of the function and let and const are not permitted to use outside of the code.
 * thats why the term globle scope and block scope is generated.
 * 
 * scope : {}
 * 
 * in braces the preferance is given to the inner variable if there is a declaration of that variable outside of the braces of same name.
 * 
 * the scope of the browser is differnt from the scope declared in the node enviroment.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IN NESTED FUNCTIONS/LOOPS/CONTROLLERS THE CHILDREN HAS AN ACCESS OF PARENT'S VARIABLES BUT THE PARENT DON'T HAVE THE ACCESS TO THE CHILDREN'S VARIABLES.
//FOR EXAMPLE
const username = "kartik pareek";
function one()
{
    function two()
    {
        const website = "my_portfolio";
        console.log(username)

    }
    two();
    console.log(website);
}
one();
//when you use the function beefore its declaration then the JS got confused and returns an error in it.
