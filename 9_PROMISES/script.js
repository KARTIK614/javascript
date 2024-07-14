// // const promiseOne = new Promise(function(resolve, reject){//resolve and reject are like of complited then resolve else reject.

// //     //DB connect.
// //     //DB calls, cryptography, network.
// //     console.log("async task is complited");
// //     resolve();//to execute the work if the promise is fullfulled.
// // })

// // promiseOne.then(function(){
// //     console.log("Promise consumed");
// // })

// // //the upper work is done in two parts, first of all the promise is created then after that the then is used fo, when the task of the promise is complited then the .then function is executed and perform the task assigned to the then function, nut you can do this task in a aingle manner also by.

// // new Promise(function(resolve, reject){
// //     console.log("Asynk task 2");
// // }).then(function(){
// //     console.log("async taks 2 resolved");
// // })


// //PROMISE THREE:- PASSING THE VALUES GOT FROM THE PROMISES TO THEN FUNCTION.

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "warewolf", email: "warewolf@gmail.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//      setTimeout(function(){
//         let error= true
//         if(!error){
//             resolve({username: "kartik", pass: "123"})
//         }else{
//             reject("Errpr Something went wrong");
//         }
//      }, 1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })//if this is executed then after this.
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{//handles the errors in jS
//     console.log("error");
// })
// .finally(()=>console.log("finally promises complited"))//this will execute in all cases either failure or succestion.

// ASYNC AWAIT

// const promiseFive  = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "javascript", pass:"123"});
//         }else{
//             reject('Error JS went wrong');
//         }
//     }, 1000)
// })

// // async function consumePromiseFive(){
// //     const response = await promiseFive
// //     console.log(response)
// // }//if you write it like this this will through an warning to you to use the try and catch in it as a part of exceptional handling.
// //this will help you in developing the good concepts.
// // we have a probleum with async and await they can't handle the probleum directly on their own so we have to put them inside the try and catch. 


// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();

//SCRATCHING THE FETCH OBJECT.

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');//this requires time to function.
//         const data = await response.json()//this also requires time to function.
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
// }

// getAllUser();

//LETs DO THE SAME UPPER THING WITH THE USE OF .THEN AND .CATCH.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{//get the data from url and convert it into json format
    return response.json()
})
.then((data)=>{//print the data in the console.
    console.log(data);
})
.catch((console.error()))//handle the error