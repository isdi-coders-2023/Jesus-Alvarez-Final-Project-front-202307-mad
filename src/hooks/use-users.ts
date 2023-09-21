import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLoginData } from '../model/user';
import { logout } from '../redux/users-slice';
import { createThunk, loginThunk } from '../redux/users-thunks';
import { ApiUserRepository } from '../services/user-repository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useUsers() {
  const repo = useMemo(
    () => new ApiUserRepository('http://localhost:4300/users'),
    []
  );

  const { userFirstName, userId, userStatus, registerStatus, token } =
    useSelector((state: RootState) => state.tennisZoneUsers);
  const usersDispatch = useDispatch<TennisZoneDispatch>();

  const usersRegister = async (data: FormData) => {
    usersDispatch(createThunk({ repo, data }));
  };

  const usersLogin = async (user: UserLoginData) => {
    usersDispatch(loginThunk({ repo, user }));
  };

  const usersLogout = () => {
    usersDispatch(logout());
    localStorage.clear();
    return;
  };

  return {
    usersLogin,
    userFirstName,
    userId,
    userStatus,
    registerStatus,
    token,
    usersRegister,
    usersLogout,
  };
}
