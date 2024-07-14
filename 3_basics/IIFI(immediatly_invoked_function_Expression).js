/**
 * In JS when you want to execute the function immidiately after the execution of the script file then you construct the function named as IIFI 
 * in it some syntaxiel change into a function can convert it into a IIFE function.
 * This type of functions used in many places where when we open the software or website then immidiately it perfoms an operation for example:-
 * connects to the Database just after the compilation of the program.
 * 
 * PROPER DEFINATION OF IIFE:- to remove the pollution in a specific area of code produced by the global scope we use the IIFE function decalration in code and also it is used in many ways to write a proper code.
 * always use the semicolon in the ending of the IIFE function because the IIFE function dosen't know where to stop the execution of the code.
 * if you write the no name function then also ti works but semicolon is must for error free execution.
 * for example
 * (()=>{<function_implimentation>})()
 * 
 * if you give a name to a IIFE function then it is known as a named IIFE
 */


(IIFI_sample = ()=>
    {
        console.log("DB Connected");
    })()//this is the example of IIFE Typed function.this will invoke just after the execution of the file.


    //to do this with any function we perform a simple operation on existing function as:-
    /**
     * (<function_defination>)()
     * 
     * just put the material of the function inside a parenthesis.
     * 
     */