// let student={
//     name:"Gowtham",
//     usn:"Gowtham756",
//     age:19,
//     marks:[92,95,76],
// };
// let jsonstring=JSON.stringify(student);
// console.log("stringified json=",jsonstring);
// let stringobject=JSON.parse(jsonstring);
// console.log("stingobject=",stringobject);

// let book=[
//     {title:"my die my die why you want",author:"mohan",price:1000},
//     {title:"you",author:"sivagami",price:1000},
//     {title:"me",author:"bicchaladeva",price:1000}
// ]

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response=>response.json())//converts to json
//  .then(json=>console.log(json))
//  .catch(err=>console.log("error=",err));
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())//converts to json
//  .then(json=>console.log(json))
.then(users=>{
     let output="<h3>Users</h3>";
     users.forEach(user=>{
        output+=`<li>${user.username}-${user.email})</li>`;
     });
     output+="</ul>";
        document.body.innerHTML+=output;

})
