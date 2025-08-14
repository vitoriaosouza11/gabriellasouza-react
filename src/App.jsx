import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home.jsx';
import Facial from './pages/PaginaFacial.jsx';
import Corporal from './pages/PaginaCorporal.jsx';
import Epilacao from './pages/PaginaEpilacao.jsx';
import Luz from './pages/PaginaLuz.jsx';
import Layout from './pages/Layout.jsx';
import Sobre from './pages/PaginaSobre.jsx';
// import Contato from './pages/PaginaContato.jsx';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="facial" element={<Facial />} />
            <Route path="corporal" element={<Corporal />} />
            <Route path="epilacao" element={<Epilacao />} />
            <Route path="luz" element={<Luz />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* <Route path="/contato" element={<Contato />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


