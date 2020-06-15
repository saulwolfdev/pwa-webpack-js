import views from "../views/404.html";

export default ()=>{
   const divElement=document.createElement("div");
//    divElement.className="text-title"
   divElement.innerHTML=views;
   
   return divElement; 
}
