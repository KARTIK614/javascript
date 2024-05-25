/**
 * after variables and data types we are heading towards conditionals and operators
 * we don't see the basic operators here we are going to see the javascript specific operators.
 * 
 */

//  to the power operator
// in c language if we have to see the power of any number then we have to include a library name as math or cmath in case of cpp, in js we are going to use the ** operator to perform that operation.
// console.log(2**5);

// LOOSE EQULITY(name of the datatype or value is same in this type of data type)
// if(5==5);

//STRICT EQUALITY (VALUE AND DATA TYPE)
/**
 * IN IT the value of the data should be same and the type of the data is also same, this type of equality is known as strict equality
 * denoted by ===
 * 
 * example
 */
// console.log(5===5); // same data type
// console.log('5'===5)// different data type.
//this is also applicable on !== and ==! for the comparisn of datatype and the data


//FALSY AND TRUTHY(working with non-bullions)

/**
 * the things which are coming in to the falsy are:-
 * undefined
 * NULL
 * false
 * NaN(not a number)
 * ' ' (empty string)
 * 
 * remaing of them anything which are coming outside from the falsy is considered as truthy.
 *  
 */
//examples
// let a;
// if(''&&'radhey')
// {
//     a = true;
// }else{
//     a = false;
// }

// console.log(a);

// SHORT CIRCUITING.
// if(a<b||a>b||a>=b||a<=b||a==b)
/**
 * in the above expression if the first condition is true then the OR gate will not look at the next condition this is known as short circuiting in javascript.
 * 
 */