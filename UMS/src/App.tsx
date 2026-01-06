// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Components/Home/Home"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
