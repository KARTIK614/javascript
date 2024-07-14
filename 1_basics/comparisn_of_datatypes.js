// console.log("kartik pareek");
console.log(null>0); // this will return false.
console.log(null==0);// this will return false also.
console.log(null>=0);// this will return true.
/**
 * the reason is that the equality check(==) and the comparisons >, <, <= works differently 
 * comparisn converts the null to a number, treating it as 0.
 * that's why there is a slight differnece in their outputs.    
 *  */ 