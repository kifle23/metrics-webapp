import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Cities from './pages/Cities';
import NoMatch from './pages/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default App;
