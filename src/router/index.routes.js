import {pages} from "../controllers/index";

let content=document.querySelector("#root");


const router=(route)=>{
    content.innerHTML="";
switch (route) {
    case "#/":{
       return content.appendChild(pages.home());
    }
       
        // case "#/posts":
        // return console.log("home")
        // case "#/product":
        //     return console.log("home")
        // default:
        // return console.log("404")
}    
    
    
    
    
}
export {router};
