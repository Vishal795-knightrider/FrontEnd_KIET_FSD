let promise=new Promise((resolve,reject)=>{
    let success=true;


if(success){
    resolve("Data Connected");
}

else{
    rejct("error in Connection");
}
})

//consuming promise

fetch("https://jsonplaceholder.typicode.com/users")       //isme url ayega jis website me hm jayenge  (yeh promise return karega)
.then(response=>response.json())
.then(data=>data.map((user)=>console.log(user.name,user.id)))
.catch(error=>console.log(error))
