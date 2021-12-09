import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { EnterPage } from '../pages/enter-page/';
import { GamePage } from '../pages/game-page';

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<EnterPage />}/> */}
        <Route path="/" element={<GamePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;