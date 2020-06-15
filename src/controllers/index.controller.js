import views from "../views/home.html";

export default ()=>{
   const divElement=document.createElement("div");
   divElement.className="text-title"
   divElement.innerHTML=views;
   return divElement; 
}