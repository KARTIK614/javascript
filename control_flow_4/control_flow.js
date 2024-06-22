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

let val1 = null??90;//this could be the return values from the function.
console.log(val1);//this will return the value as 90 not null.
