import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const App = () => {


  return (
    <Routes>  

      <Route path="/" element={<h1>Hoome</h1>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  )
}

export default App