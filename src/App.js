import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import GamesPage from './Pages/GamesPage';
import ProjectsPage from './Pages/ProjectsPage';
import OtherPage from './Pages/OtherPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/other" element={<OtherPage />} />
        </Routes>
    );
}

export default App;