/**
 * JAVASCRIPT EXECUTION CONTEXT:-the pracess by which javascript runs your program in node as well as browser.
 * it runs your program in 2 phases:-
 * first of all GEC(global execution context) is formed in both cases in JS and put it in the variable named as this.
 * GEC is differnt for browser and node enviroment. 
 * in browser the name of GEC is know as window( the same window which is found in this lecture).
 * javascript is a single threaded language everything is completed in a process in it.
 * FEC(functional execution context):-
 * EEC(eval execution context):- used in the study of mongoose and other stuff(no need to see it here), basically it is a property of a globle object.
 * => jitni baar functions execute hote hain utni baar values varible enviroment or execution thread banta hain.
 */

//CODE EXECUTION IN JS:-
/**
 * 1. memory creation phase
 * 2. execution phase
 */

//in js lets study the execution of a code by the help of a code itself by the investigation method:-
/**
 * let val1 = 10;
 * let val2 = 20;
 * function addNum(num1, num2)
 * {
 *  let total = num1+num2;
 * return total;
 * }
 * let result1 = addNum(val1, val2);
 * let result2 = addNum(10,5);
 */
//STEPS OF THE CODE EXECUTION:-
/**
 * 1. global execution context is allocated in This.
 * 2. Memory Creation Phase:- all variables are collected and placed at a place.
 *    all variables are taken and assigned by undefined.
 *    specifically:-
 * ->val1, val2 are asssigned with undefiend
 * ->addNum is assigned with its function defination.
 * -> result 1 and result 2 is assigned by undefuned.
 * 
 * 3. Execution phase:- 
 * -> val1 and val2 are assigned by the values 10 and 20 respectively.
 * -> addNum makes its seperate execution context for perfroming calculation.
 * =>here a new variable enviroment and a new execution thread is built for it.
 *    -> so the memory creation phase and the execution phase is again developed for it in the memory.
 *    3.1:- Memory creation phase for the function:-
 *          val1, val2 and total are assigned with undefined.
 *    3.2:- Execution context phase:-(processing and core tasks of the program are executed here).
 *          num1->10, num2->20 and total has 30(after calculation)
 *          total is retured to the global execution context of the function.
 * =>after the working completed of the execution phase the assigned memory of the code is deleted.
 * 
 * -> the same process is prefromed for the result2 variable and deleted after returning the value to the global execution context.
 * after this the program is executed smoothly.
 *                  
 */

//CALL STACK
/**
 * call stack is defined as the line of calling of the program's fucntion in a specefic manner.
 * they follow the LIFO principal to execute the functions of the program.
 * they follow the recursive method to execute the functions.
 */