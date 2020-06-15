import Home from "./home.controller.js";
import Posts from "./posts.controller.js";
import notFound from "./404.controller.js";
const pages={
    home:Home,
    posts:Posts,
    notFound:notFound
}
export {pages};