import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import GamesPage from './Pages/GamesPage';
import ProjectsPage from './Pages/ProjectsPage';
import MiscPage from './Pages/MiscPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/misc" element={<MiscPage />} />
        </Routes>
    );
}

export default App;