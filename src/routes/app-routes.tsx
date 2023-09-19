import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CourtReviews } from '../components/court-reviews/court-reviews';
import HomePage from '../pages/home/home-page';

const LoginPage = lazy(() => import('../pages/login/login-page'));
const RegisterPage = lazy(() => import('../pages/register/register-page'));
const ErrorPage = lazy(() => import('../pages/error/error-page'));
const CourtsPage = lazy(() => import('../pages/courts/courts-page'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/courts" element={<CourtsPage></CourtsPage>}></Route>
        <Route
          path="/courts/:id"
          element={<CourtReviews></CourtReviews>}
        ></Route>
      </Routes>
    </Suspense>
  );
};
