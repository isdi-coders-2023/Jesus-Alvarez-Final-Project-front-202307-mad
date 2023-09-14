import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLoginData } from '../model/user';
import { loginThunk } from '../redux/usersThunks';
import { ApiUserRepository } from '../services/userRepository';
import { RootState, TennisZoneDispatch } from '../store/store';

export function useUsers() {
  const repo = useMemo(
    () => new ApiUserRepository('http://localhost:4300/users'),
    []
  );

  const usersState = useSelector((state: RootState) => state.tennisZoneUsers);

  const usersDispatch = useDispatch<TennisZoneDispatch>();

  const usersLogin = async (user: UserLoginData) => {
    usersDispatch(loginThunk({ repo, user }));
  };

  return {
    usersLogin,
    usersState,
  };
}
