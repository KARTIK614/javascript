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