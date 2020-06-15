import Home from "../controllers/index.controller";

let content=document.querySelector("#root");


const router=(route)=>{
    content.innerHTML="";
switch (route) {

    case "#/":{
       return content.appendChild(Home());
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
