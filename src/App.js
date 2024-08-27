import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import PaginaPrincipal from './Pages/PaginaPrincipal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
