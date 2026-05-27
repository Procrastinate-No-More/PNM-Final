import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "../components/Navigation";

import Home from "../pages/home/home";
import Timer from "../pages/timer/timer";
import Todo from "../pages/todo/todo";
import AI from "../pages/ai/ai";

function Router(){

return(

<BrowserRouter>

<Navigation/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/timer" element={<Timer/>}/>

<Route path="/todo" element={<Todo/>}/>

<Route path="/ai" element={<AI/>}/>

</Routes>

</BrowserRouter>

)

}

export default Router;