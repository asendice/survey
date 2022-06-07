import { Routes, Route } from "react-router-dom";
import Hero from "./components/home-page/hero";
import Create from "./components/create-page/create";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />}/>
      <Route path="/create" element={<Create />}/>
    </Routes>
  )
}

export default App;