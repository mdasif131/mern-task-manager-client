import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullScreenLoader from './components/masterLayout/FullScreenLoader';
import PrivateRoute from './components/PrivateRoute';
import CanceledPage from './pages/CanceledPage';
import CompeletedPage from './pages/CompeletedPage';
import CreatePage from './pages/CreatePage';
import DashBoardPage from './pages/DashBoardPage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import Page404 from './pages/Page404';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import RegistrationPage from './pages/RegistrationPage';
import SendOTP from './components/accountRecover/SendOTP';
import VerifyOTP from './components/accountRecover/VerifyOTP';
import CreatePassword from './components/accountRecover/CreatePassword';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />   
          <Route path="/send-otp" element={<SendOTP />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/create-password" element={<CreatePassword />} />
          

          {/* Protected Routes */}
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<DashBoardPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/all" element={<NewPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/completed" element={<CompeletedPage />} />
            <Route path="/canceled" element={<CanceledPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Catch-all 404 - MOVED TO THE END */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
};

export default App;
