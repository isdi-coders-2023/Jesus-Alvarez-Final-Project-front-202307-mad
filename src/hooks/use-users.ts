import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLoginData } from '../model/user';

import { logout } from '../redux/users-slice';
import { createThunk, loginThunk } from '../redux/users-thunks';
import { ApiUserRepository } from '../services/user-repository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useUsers() {
  const repo = useMemo(
    () => new ApiUserRepository('https://tennis-backend-rx1a.onrender.com'),
    []
  );

  const { userStatus, registerStatus, token, userId, user } = useSelector(
    (state: RootState) => state.tennisZoneUsers
  );
  const usersDispatch = useDispatch<TennisZoneDispatch>();

  const usersRegister = async (data: FormData) => {
    usersDispatch(createThunk({ repo, data }));
  };

  const usersLogin = async (user: UserLoginData) => {
    usersDispatch(loginThunk({ repo, user }));
  };

  const usersLogout = () => {
    usersDispatch(logout());
    return;
  };

  return {
    usersLogin,
    userStatus,
    registerStatus,
    token,
    usersRegister,
    userId,
    user,
    usersLogout,
  };
}
