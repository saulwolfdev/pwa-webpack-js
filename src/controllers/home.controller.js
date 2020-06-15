import views from "../views/home.html";

export default ()=>{
   const divElement=document.createElement("div");
   divElement.className="text-title"
   divElement.innerHTML=views;
   
   const buttonClick=divElement.querySelector("#btnClick");
   buttonClick.addEventListener("click",()=>{
       alert("hola wolf")
   })
   
   
   return divElement; 
}