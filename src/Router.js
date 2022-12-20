import { Routes, Route } from 'react-router-dom';
import * as P from './Pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/*" element={<P.NotFoundPage />} />
      <Route path="/signup" element={<P.SignupPage />} />
    </Routes>
  );
};

export default Router;
