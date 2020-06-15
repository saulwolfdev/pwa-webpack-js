import {pages} from "../controllers/index";

const router= async(route)=>{
    let content=document.querySelector("#root");
    content.innerHTML="";
switch (route) {
    case "#/":{
       return content.appendChild(await pages.home());
      
    }
    case"#/posts":
    return content.appendChild(await pages.posts());
    default:
    return content.appendChild(await pages.notFound());
}    

}
export {router};
