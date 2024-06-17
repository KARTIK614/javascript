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