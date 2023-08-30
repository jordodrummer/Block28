import Red from "./components/Red.jsx"
import Blue from "./components/Blue.jsx"
import Home from "./components/Home.jsx"
import { Routes, Route, Link } from "react-router-dom"


function App() {

  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
      <Link to="/blue">bluey blue</Link>
      <Link to="/red">reddd</Link>
      <Link to="/">home</Link>
        </div>
      <div id="main-section">
   <Routes>
     <Route path="/blue" element={Blue()} />
     <Route path="/red" element={Red()} />
     <Route path="/" element={Home()} />
   </Routes>
</div>
    </div>  )
}

export default App
