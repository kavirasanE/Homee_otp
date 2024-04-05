import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import {BrowserRouter,Route,Routes } from "react-router-dom";
export default function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/homee" element={<Home/>}/>
        </Routes>
     </BrowserRouter>
      
    </>
  )
}