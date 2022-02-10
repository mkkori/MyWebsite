import { addition } from './child.js';
import { animal } from './animal.js';

let a = 1;
let b = {name:'Mohit',work:'Ola',experience:10};
let c = [1,2,3,4,5];

if(b.work == 'Ola'){
    console.log(b.name);
    fetched().then(data=>console.log(data));
}

setInterval(update,1000);
console.log(c.filter(item=> item>2));

function update(){
    document.getElementById("counter").innerHTML = a;
    a=a+1;
}

async function fetched(){
    console.log('Inside Fetch');
    let users = await fetch("https://api.github.com/users");
    let data = await users.json();
    return data;
}

   