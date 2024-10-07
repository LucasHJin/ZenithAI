import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from './pages/Layout';
import Bodybuilding from './pages/Bodybuilding';
import Powerlifting from './pages/Powerlifting';
import Literature from './pages/Literature';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NoPage from './pages/NoPage'

import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter> {/* defining all possible routes */}
        <Routes>
          <Route path="/" element={<Layout />}> {/* wrap routes in layout (to always have nav bar) */}
            <Route index element={<Home />} />  {/* route for '/' */}
            <Route path="/bodybuilding" element={<Bodybuilding />} />
            <Route path="/powerlifting" element={<Powerlifting />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
