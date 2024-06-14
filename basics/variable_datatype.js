// variable creation in js is done by:-
let a =10;
/*
    1. dynamically typed variable.
    2. block scoped :- if declared between 2 brackets the only the inner code of the brackets can access the variable, if outside from the brackets someone tries to access the variable then it throws an error saying variable if not defiend.

    example
    let a =78;
    console.log(a)// print a on execution.
    {let a =32;}console.log(a)//gives error on execution.
    3. redefination is not possible in it just like the var keyword.
    4. let allows you to type the code dynamically means 
    let a=10;
    a="radhey"
    after sturying the code the int is converted to string in it the datatype of variable is dynamically changed according to the need of the user. also you can convert the datatypes to boolean and null.
    5. 
*/
var b = 30;
/**
 * function scoped and globle scoped not block scoped thats why we stop using it in current js.
 * matlab agar function ke aandar declared hain to bahar nahi chalega, but agar bahar declared hain to bahar ke sath sath sabhi jagha chalega.
 * this can be redclared so ambhiguity can be generated.
 * issues are occured when the variable is declared globally. 
 * if(true)
{
    console.log(b);
}
    in today's development the var is not used as a primary variable declarer.
 */

const c =90;
/*
1. value can't be changes further.
2. redeclaration and redefination is not possible.
*/

// VARIABLE NAMING CONVENTION:-
/*
1. naming can be start by number, _, $ sign in js
2. no space is present in the declaration of variable.
3. declaration should be in order of camel case.
example: 
variable name is 'number of students' so it is declared as.
numberOfStudent
the first letter of the next word should be in capital.
4. name should be meaning full
5. don't use the reserved keywords as a name of variable.

*/
/**
 * TYPES OF DATA TYPES:-
 * 1. PRIMITIVE 
 * 2. NON PRIMITIVE
 * 
 * PRIMITIVE
 * rest is same but 
 * isatead of long here we are using the BigInt 
 * typeof(datatype) function is used to get the data type
 * 
 * symbol data type.
 * 
 */

// CONSOLE.TABLE([])
// console.table([a,b,c]);
/**
 * this is used to display the data in a tabular format.    
 */

// if you declare the variable and don't define it then the value of that variable is considered as undefined.
// null is itself a standslone value in javascript itself.used when the 0 is itself is a marking on the scale.
// INTERVIES QUESTIONS:- 
/**
 * null is considered as a object in js while undefined is considered as a undefined itself in js, this can be considered as flaw in js but can be asked in interview as well.
 * 
 */