// import "./scss/main.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

// import  {router} from "./router/index.routes";

// window.addEventListener("hashchange",()=>{
//     console.log()
// })
import { router } from "./router/index.routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";

const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);