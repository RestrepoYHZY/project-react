import React from 'react';
import ReactDOM from 'react-dom/client';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import NoEncontrada from './routes/NoEncontrada';
import Post from './routes/Post';
import RutaProtegida from './routes/RutaProtegida';

import UserProvider from './context/UserProvider';
import VerificarUsuario from './components/VerificarUsuario';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Inicio/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Blog/:id' element={<Post/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>

            <Route path='/protegida' element={
              <VerificarUsuario>
                <RutaProtegida/>
              </VerificarUsuario>
            
            }/>

            <Route path="*" element={<NoEncontrada/>}/>
            
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>

);



