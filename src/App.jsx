import { Route, Routes } from "react-router"


const App = () => {


  return (
    <Routes>  

      <Route path="/" element={<h1>Hoome</h1>}/>
      <Route path="/login" element={<h1>login</h1>}/>

    </Routes>
  )
}

export default App