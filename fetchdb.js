async function db(){
    let a= await fetch("http://localhost:3000/Friends")
    let b= await a.json()
    
    var d = b.map((e)=>
        `<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.place}</td>
        <td>${e.company}</td>
        <td> <button onclick="mydelete(${e.id})">Delete</button></td>
        <td> <button onclick="update(${e.id})">Edit</button></td>
      
        </tr>
        `
    ).join(" ")

    let c=document.getElementById("table");
    c.innerHTML=d;
}

db()

function mydelete(id){
    fetch(`http://localhost:3000/Friends/${id}`,
        {
            method:"DELETE"
        }
    ).then(res=>alert("One Value Deleted"))
    
}

function add(){
    let data={
    id:document.getElementById('id').value,
    name:document.getElementById('name').value,
    place:document.getElementById('place').value,
    company:document.getElementById('company').value
}
fetch("http://localhost:3000/Friends",{
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(data)
}

)

}


var stid=0

async function update(id){
    
    stid=id
    let ab =  await fetch(`http://localhost:3000/Friends/${id}`)
    let bc =  await ab.json()
    let cd =  document.getElementById("frm")  

    let de=
    `
    <input type="text" value="${bc.id}" id="id1" readonly required> <br>
    <input type="text" value="${bc.name}" id="name1" required > <br>
    <input type="text" value="${bc.place}" id="place1" required > <br>
    <input type="text" value="${bc.company}" id="company1" required > <br>
    <input type="submit" onclick="edit()" value="update">
    
    `
    cd.innerHTML=de
}

function edit(){
   let myfun={ 
        id:document.getElementById('id1').value,
        name:document.getElementById('name1').value,
        place:document.getElementById('place1').value,
        company:document.getElementById('company1').value

    }
    fetch(`http://localhost:3000/Friends/${stid}`,
        {
            method:"PUT",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(myfun)
        }
    )
    .then(res=>alert("Data Edited"))
    .catch(res=>alert("Data did not edit"))
}

setInterval(() => {
        
    fun()}, 1000);

    function fun(){
        let dt=new Date();

        let dt1=dt.toLocaleTimeString();
       
        
        let abc=document.getElementById("inh")
        abc.innerHTML=dt1;
    }


