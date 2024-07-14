//XMLHttpRequest:- this is an object and with the help of this you can send or receive your data, there are other ways to do it but they are not relevent yet, we will learn them if it is neede.
const xhr = new XMLHttpRequest();//this is a class which is used to handle the XML work, we have to create it as an objecct thats why i have given it a new keyword.

const requestUrl = 'https://api.github.com/users/KARTIK614';
xhr.open('GET',requestUrl); //to get the data from the url in the Json format.
// console.log("here");
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);//this will show you that the state is changed.This will give a good idea of async programming.
    if(xhr.readyState === 4)
    {
        // const data = this.responseText;//this data is in the format of string to convert it into the fromat of json we will use:-
        const data = JSON.parse(this.responseText);

        console.log(data.followers);//we have to write the this here to get the values and tell the xmlsender to send the data for this particular value.
    }
}
xhr.send()//this will call the open 

//this is all the things by how you can get the data from an API to show it on the frontend of the program through JS.