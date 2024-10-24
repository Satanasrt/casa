import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import MainComponent from './components/MainComponent';
import OneVsOne from './components/1vs1';
import Depositos from './components/depositos';
import Login from './components/Login';
import Registro from './components/Registro';
import Torneos from './components/Torneos';
import SobreNosotros from './components/sobreNosotros';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; // Importa la ruta protegida

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        {/* Ruta protegida para el dashboard */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
        {/* Otras rutas protegidas */}
        <Route
          path="/1vs1"
          element={token ? <OneVsOne /> : <Navigate to="/login" />}
        />
        <Route
          path="/depositos"
          element={token ? <Depositos /> : <Navigate to="/login" />}
        />
        <Route
          path="/torneos"
          element={token ? <Torneos /> : <Navigate to="/login" />}
        />
        <Route
          path="/sobreNosotros"
          element={token ? <SobreNosotros /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
