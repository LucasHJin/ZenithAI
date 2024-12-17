import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from './pages/Layout';
import Overview from './pages/Overview';
import Literature from './pages/Literature';
import Media from './pages/Media';
import Home from './pages/Home';
import NoPage from './pages/NoPage'
import SpecificStudy from './pages/SpecificStudy';

import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter> {/* defining all possible routes */}
        <Routes>
          <Route path="/" element={<Layout />}> {/* wrap routes in layout (to always have nav bar) */}
            <Route index element={<Home />} />  {/* route for '/' */}
            <Route path="/overview" element={<Overview />} />
            <Route path="/literature/:page" element={<Literature />} />
            <Route path="/media" element={<Media />} />
            <Route path="/study/:id" element={<SpecificStudy />} /> {/* route to any instance of a study */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
