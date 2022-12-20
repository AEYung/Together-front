import { Routes, Route } from 'react-router-dom';
import * as P from './Pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.MainPageMain />} />
      <Route path="/*" element={<P.NotFoundPage />} />
      <Route path="/signup" element={<P.SignupPageSignup />} />
    </Routes>
  );
};

export default Router;
