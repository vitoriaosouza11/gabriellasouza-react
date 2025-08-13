import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home.jsx';
import Facial from './pages/PaginaFacial.jsx';
import Corporal from './pages/PaginaCorporal.jsx';
import Epilacao from './pages/PaginaEpilacao.jsx';
import Luz from './pages/PaginaLuz.jsx';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facial" element={<Facial />} />
          <Route path="/corporal" element={<Corporal />} />
          <Route path="/epilacao" element={<Epilacao />} />
          <Route path="/luz" element={<Luz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


