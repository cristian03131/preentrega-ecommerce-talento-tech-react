import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          
          <Route path="/carrito" element={<h1>Carrito</h1>} />
        </Routes>
      </main>
      
    </>
  );
}


export default App
