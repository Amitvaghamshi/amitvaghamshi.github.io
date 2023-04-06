document.getElementById("subm").addEventListener("click",()=>{
    alert("Thanks I will reach you");
})


//for sending email
function sendmail(){
    var params={
        to_name:document.getElementById("name").value,
        from_name:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }

    const serviceID="service_lepsi82";
    const tampID="template_yh1ejej";

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

    window.open("resume/Amit_Vaghamshi_Resume.pdf");

})

document.getElementById("opentab2").addEventListener("click",()=>{

    window.open("resume/Amit_Vaghamshi_Resume.pdf");

})

// typing text animation script
// var typed = new Typed(".typing", {
//     strings: ["Back-End Developer", "Problem Solver"],
//     typeSpeed: 150,
//     backSpeed: 60,
//     loop: true,
//   });


// for Dinamic Scroll bar

document.getElementById("innerscroll").style.width= "0px";
let th  =  document.getElementById("allbody").offsetHeight-window.innerHeight;
window.addEventListener("scroll",()=>{

  
       const sizex=window.scrollY;
       let wid=(sizex/th)*100;

       document.getElementById("innerscroll").style.width= `${wid}%`;

      // console.log(wid);
     
})