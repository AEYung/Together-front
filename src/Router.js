import { Routes, Route } from "react-router-dom";
import {
  Main,
  Signup,
} from "./Pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
};

export default Router;