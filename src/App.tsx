import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompeletedPage from './pages/CompeletedPage';
import CreatePage from './pages/CreatePage';
import DashBoardPage from './pages/DashBoardPage';
import NewPage from './pages/NewPage';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgetPssPage from './pages/ForgetPssPage';
import Page404 from './pages/Page404';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/all" element={<NewPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/completed" element={<CompeletedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/forget-password" element={<ForgetPssPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
