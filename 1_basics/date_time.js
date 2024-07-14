/**
 * in js the date represents a single moment in time which is started from 1 jan 1970 (UTC) after that the time is mentioned calculated by it 
 * you can use some of the predefiend memory functions to perform the specific operations and make the format of the data according to you.
 * 
 * they are calculated in miliseconds.
//  * we already have the API of date which is quite complex for its specific taks so the temporal API T39(javascript organization) could be the globle API for the javascript for the management of date in future.
//  * 
//  * for now we have to learn the dates ap per the previous method.
//  * the date is an object in javascript (asked in interviews).
//  * let's make the dates familer to us.
//  */

// let myDate = new Date();
// console.log(myDate);//2024-06-17T04:58:01.227Z(output)
// console.log(myDate.toDateString());//Mon Jun 17 2024
// console.log(myDate.toISOString());//2024-06-17T05:03:43.348Z
// console.log(myDate.toString());//Mon Jun 17 2024 05:03:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString());//6/17/2024(this format is quite good for display).
// console.log(myDate.toLocaleString());//6/17/2024

// //TO DISPLAY THE SPECIFIC TIME AND DATE.
// let specificDate = new Date(12, 43, 12);// format of the date.
// console.log(specificDate.toDateString());
// let specificDate1 = new Date(12, 0, 12, 4, 3, 43)//format of the date.
// console.log(specificDate1.toLocaleString()); //the month starts with 0 in js**

// //there are several more ways to declare the date in js you can search them:)
// //++++++++++++++++++++++++++++++++++TIMESTAMPS++++++++++++++++++++++++++++
// /**
//  * in js there are timestamps also:-
//  * used to select winner from the quizes and the matches( basicslly the time is recorded when the player finishes the races line)
//  */

// let Timestamp = Date.now(); 
// console.log(Timestamp);//1718603949836
// console.log(specificDate1.getTime());//-1829418977000

// //now you can compare the date in an hotel management system for booking the rooms.


// //now you have to compare the values in seconds you can use math function in it as follows:-
// console.log(Math.floor(Date.now()/1000));//1718604222(value in seconds)


//there are functions that are tailor made for specific purposes in js.
/**
 * you can do them by just adding them as 
 * getday()
 * getmonth()
 * getyear()
 * 
 * and many more
 * 
 */

// you can have more customizations in ja by the use of locale string.
let newDate = Date.now();
newDate.toLocaleString('default',{
    weekday: "long"
})