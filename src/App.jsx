import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Lists from "./pages/Lists"
import BookDetail from "./pages/BookDetail"
import ViewBooks from "./pages/ViewBooks"
import ViewBooksOrders from "./pages/ViewBooksOrders"

const App = () => {


  return (
    <Routes>  

      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/book/list" element={<Lists/>}/>
      <Route path="/book/view/:bookId" element={<BookDetail/>}/>
      <Route path="/book/mybooks" element={<ViewBooks/>}/>
      <Route path="/book/mybooks/:bookId" element={<ViewBooksOrders/>}/>


    </Routes>
  )
}

export default App