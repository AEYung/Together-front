import { Routes, Route } from 'react-router-dom';
import * as P from './Pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/signup" element={<P.SignupPage />} />
      <Route path="/signin" element={<P.SigninPage />} />
      <Route path="/study-room" element={<P.StudyRoomPage />} />
      <Route path="/meeting-room" element={<P.MeetingRoomPage />} />
      <Route path="/*" element={<P.NotFoundPage />} />
    </Routes>
  );
};

export default Router;
