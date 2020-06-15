import {pages} from "../controllers/index";

const router= async(route)=>{
    let content=document.querySelector("#root");
    content.innerHTML="";
switch (route) {
    case "#/":{
       return content.appendChild(await pages.home());
      
    }
    default:{
        console.log("nada")
    }
    case"#/posts":
    return content.appendChild(pages.posts());
       
        // case "#/posts":
        // return console.log("home")
        // case "#/product":
        //     return console.log("home")
        // default:
        // return console.log("404")
}    

}
export {router};
