let agr = "45";
let ageInString = Number(agr);
console.log(typeof(ageInString));
console.log(typeof(agr));
//if the string is not convertable in number then the typeof operator will return the NaN(Not a Number) in that condition 
// this can be considered as one of the flaws in javascript, that's why people is still working on typescript in many feilds in the industry.
/**
 * 1 = true
 * 0= false
 * "" = false
 * "some kind of text" = true
 * 
 */

//SOME IMPORTANT OPERATIONS:-
// -> two primitive summitions for example
console.log("1"+2);
console.log(2+"1");
console.log("1"+2+2);
console.log("1"+2+"4");
console.log(1+2+"4")
//these are the rules defined at the time of development of js.
//they are dealed in a specific manner which will be discusses in futhter lectures.
// these type of outputs are given by browser in many cases so you have to know that how to deal with them.
