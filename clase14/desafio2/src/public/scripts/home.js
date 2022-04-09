let form = document.getElementById("newUserForm");

form.addEventListener("submit",evt=>{
    evt.preventDefault();
    let obj = {};
    let data = new FormData(form);
    data.forEach((value,key)=>obj[key]=value)
    fetch('/api/users ', {
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content-Type":"application/json"
    }
}).then(result=>result.json()).then(json=>console.log(json));
})