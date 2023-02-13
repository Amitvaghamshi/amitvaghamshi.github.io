document.getElementById("subm").addEventListener("click",()=>{
    alert("Thanks I will reach you");
})


//for sending email
function sendmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }

    const serviceID="service_yrkuaag";
    const tampID="template_k5nxr86";

    emailjs.send(serviceID,tampID,params).then(
        res =>{
            document.getElementById("name").value="";
            document.getElementById("amial").value="";
            document.getElementById("message").value="";

            console.log(res);
           
       }).catch((err)=>{
        console.log("Eror");
       })
}



// //navbar color
// window.onscroll = function() {
//     let x=document.getElementById("mydata").scrollHeight
//     if(window.scrollY>x){
//     }
// };

document.getElementById("subm").addEventListener("click",()=>{
    document.getElementById("subm").style.backgroundImage="linear-gradient(to right, rgb(231, 146, 87) , rgb(83, 195, 121))";
    document.getElementById("subm").innerText="Success";
})


// resume open tab

document.getElementById("opentab").addEventListener("click",()=>{

    window.open("https://drive.google.com/file/d/180tKLVCyZoBfH38uJiqa5jXQ1sEL05UR/view?usp=share_link");

})

document.getElementById("opentab2").addEventListener("click",()=>{

    window.open("https://drive.google.com/file/d/180tKLVCyZoBfH38uJiqa5jXQ1sEL05UR/view?usp=share_link");

})

