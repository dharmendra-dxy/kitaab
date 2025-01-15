import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Lists from "./pages/Lists"
import BookDetail from "./pages/BookDetail"

const App = () => {


  return (
    <Routes>  

      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/list" element={<Lists/>}/>
      <Route path="/book/view/:bookId" element={<BookDetail/>}/>


    </Routes>
  )
}

export default App