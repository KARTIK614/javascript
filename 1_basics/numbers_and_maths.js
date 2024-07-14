// const score = 400;
// console.log(score);
//general discription of the integer(detedted by the browser itself)

// const balance = new Number(100);
// console.log(balance);
//explicit defination of the integer as a Number in js for general purpose ambiguity resolution.
// it comes with many predefined browser members(functions) used to manupulate the number(integer).

//they are less in compare to the functions of the string.
// in it some of the important function are named as follows:-
/**
 * toString
 * toFixed(2)-> for the output of the number after the . upto given numbers.
 * toPricision(3)-> takes the priority before the decimal point and round off it.
 * toLocaleString('en-IN')-> puts the comma according to the indian standerds.
 * 
 */

// for example if you convert it into string then you will get the function of the string to impliment on it as well.
// console.log(balance.toString().length);
// like this you can concatinate the functions aand attributes(length) of the string.


// +++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++

/**
 * maths library is inlcuded with the javascript.
 * you can run it in vscode but to understand it you have to go to the browser.
 * it is many functions some of them are as follows:-
 * Math.abs(<integer>)-> returns the absolute value of the integer
 * Math.round(4.5)-> round of the value according to the maths.
 * Math.ceil(4.2)-> Gives the next integer in the number line for it(jra sa bhi jyda aaye to agli value assign kar do.)
 * Math.floor(4.9)-> gives the previous number even if the number id greater than the half of it.-> 4
 * min and max also exixsts in it.
 * 
 * 
 */
// console.log(Math.abs(-4));// this will convert the negative value to +ive value but not in reverse.

//USECASES OF THE MATH FUNCTION 
/**
 * they are used in math.random()-> gives the random value as an output between 0 and 1.
 * for example:-
 * console.log(Math.floor(Math.random()*(max - min+1))+min);
 */