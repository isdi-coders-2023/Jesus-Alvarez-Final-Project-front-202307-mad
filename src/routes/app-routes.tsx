import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';

const LoginPage = lazy(() => import('../pages/login/login-page'));
const RegisterPage = lazy(() => import('../pages/register/register-page'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </Suspense>
  );
};
