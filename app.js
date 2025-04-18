const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fullname=document.getElementById("name").value
    const email=document.getElementById("email").value
    const message=document.getElementById("message").value
    const gender=document.querySelector("input[name='gender']:checked").value
    const hobbies=Array.from(document.querySelectorAll("input[name='hobbies']:checked"))
    
    .map((checkbox)=>checkbox.value).join("/")
    
    const phone =document.querySelector("#phone").value
    const otherfield =document.querySelector("#otherfield").value
    console.log({fullname,email,message,gender,hobbies,phone,otherfield})
    
    const storeData=JSON.parse(localStorage.getItem("FormData"))||[]
    storeData.push({fullname,email,message,gender,hobbies,phone,otherfield})
    console.log(storeData)
    localStorage .setItem("FormData",JSON.stringify(storeData))
    document.getElementById("contactform").reset();
    loadData()
});

function loadData(){
    const tablebody=document.querySelector("#dataTable").children[1]
    console.log(tablebody)
    const storeData=JSON.parse(localStorage.getItem("FormData")) || []
    storeData.forEach((ele)=>{
        // console.log(ele)
        const newRow=tablebody.insertRow();
        // console.log(newRow)
        newRow.innerHTML=`
        <td>${ele.fullname}</td>
            <td>${ele.email}</td>
            <td>${ele.message}</td>
            <td>${ele.gender}</td>
            <td>${ele.hobbies}</td>
            <td>${ele.phone}</td>
            <td>${ele.otherfield}</td>
            <td></td>
            `;
        })
        if(storeData.length>0){
            document.getElementById("dataTable").style.display="table";
        }
    }
    window.onload=loadData;

    