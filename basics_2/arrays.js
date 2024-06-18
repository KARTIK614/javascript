/**
 * arrays are the storages of different data types in a contigeous manner.
 * in js different data types can be contained in single array, no need to make dedicated array for it it you don't want it for a specific need
 * it makes shallow copies while coping the value in a different place, means that it give refrence to the variable present in the memory.
 * there are several methods to declare an array but you can declare them using the object array like.
 */
const myArray = new Array(1,2,3,4,5)

//arrays also have a prototype access in it you can use the given prototypes to get the values you want in a specific manner.
/**
 * array has many predefined methods, some of them are as follows:-
 * push, pop, etc 
 * you can see them in the console of browser by just declaring the array.
 * in it arr.join converts the array into a string which is used in specific cases in js.
 * 
 * in array the slice and splice are two differnt methods are used to perfomr the operations.
 * slice-> cuts the array in given range excluding the last point, and the shallow copies are made by it.
 * splice -> do the same as slice and includes the last indexed value also, 
 * another thing is it cuts and modifies the array to the remaining values of the array.
 * 
 */

// +++++++++++++++++++++++FURTHER DISCUSSION++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//you can give an array as a another data element inside the new array.
const aadhaar = ["bagra","marathi","janghuji"];
const geca = ["karan","saumya","girija","jitendra"];

//if we puch the geca array to the aadhaar then the array(geca) is considerd as an element in it.
// aadhaar.push(geca);
// console.log(aadhaar);

//to display the element properly we have to use the concat prototype in it, this gives a new array which has to be stored in the a new array.
const arr = aadhaar.concat(geca);
console.log(arr);

//if there is an array which has an array inside another array inside another array then we can use that array.flat to arrange the elements present in the array recursevely.


// to convert he string or any other element in to an array we can use the array as.
console.log(Array.from("thande_papa"));

// if you have the key value pairs and you have to convert it to an arary then you have to specifies that first weather you want to convert the keys or the value into the array.

// if you want to convert the elements into an array then you have to use the Array.of(<number of variables>)

