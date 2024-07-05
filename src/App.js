import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Paginas/Home';
import NovoFormulario from './Components/NovoFormulario/index';



function App() {

  const categoriaVideos = [
    { nome: 'Selecione', },
    { nome: 'Musicas', corNome: '#fff', corfundo: '#6BD1FF' },
    { nome: 'Filmes', corNome: '#E53935', corfundo: '#00C86F' },
    { nome: 'Series', corNome: '#000', corfundo: '#FFBA05' },
    { nome: 'Animes', corNome: '#00C86F', corfundo: '#E53935' }
];

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/novo-formulario" element={<NovoFormulario categorias={categoriaVideos} />}>     
             
            </Route>
            <Route path="*" element={<div>Pagina não encontrada</div> }/>
            
          </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;