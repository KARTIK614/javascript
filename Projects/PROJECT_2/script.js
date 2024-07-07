const form = document.querySelector('form');
form.addEventListener('submit', function(e));
e.preventDefault()
//if you write the given values upwards then the values of height and weight are assignd to empty because the event has not happened yet.
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')
if(height<0 || isNaN(height)||height==='')
{
    result.innerHTML = `Please enter a valid height${height}`;
}else if(weight<0 || isNaN(weight)||weight===''){
       result.innerHTML = `Please enter a valid weight${weight}`;
} else{
    const bmi = ((weight /(height*height)/1000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
}
