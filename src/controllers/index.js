import Home from "./home.controller.js";
import Posts from "./post.controller.js";
import notFound from "./404.controller.js";
const pages={
    home:Home,
    post :Posts,
    notFound:notFound
}
export {pages};