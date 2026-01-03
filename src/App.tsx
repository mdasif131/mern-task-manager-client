import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FullScreenLoader from './components/masterLayout/FullScreenLoader';
import CompeletedPage from './pages/CompeletedPage';
import CreatePage from './pages/CreatePage';
import DashBoardPage from './pages/DashBoardPage';
import ForgetPssPage from './pages/ForgetPssPage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import Page404 from './pages/Page404';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import RegistrationPage from './pages/RegistrationPage';
import CanceledPage from './pages/CanceledPage';
import { getToken } from './helper/sessionHelper';
const App = () => {
  if (getToken()) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/all" element={<NewPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/completed" element={<CompeletedPage />} />
            <Route path="/canceled" element={<CanceledPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/forget-password" element={<ForgetPssPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </>
    );
  }
  
};

export default App;
