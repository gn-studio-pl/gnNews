import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/country/:id' element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
