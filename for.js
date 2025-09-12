let title=document.getElementById('title');
title.innerText="Dom changed";
let greetBtn=document.getElementById('greetBtn')
greetBtn.addEventListener('click',()=>{
    let name=document.getElementById('nameInput').value;
   if(name){
    document.getElementById('title').innerText="Hello";
   }
   else{
    alert("please enter name");
   }
    
})
let isBlue=false;
let toggleBtn=document.getElementById('toggleBtn')
toggleBtn.addEventListener('click',()=>{
    if(isBlue){
        document.body.style.background='White';
    }
    else{
        document.body.style.background='Blue';
    }
    
})