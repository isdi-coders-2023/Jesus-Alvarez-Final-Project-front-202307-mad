import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserLoginData, UserNoId } from '../model/user';
import { ApiUserRepository } from '../services/userRepository';

export const createThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    user: UserNoId;
  }
>('users/create', async ({ repo, user }) => {
  const fullUser = await repo.create(user);
  return fullUser;
});

export const loginThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    user: UserLoginData;
  }
>('users/login', async ({ repo, user }) => {
  const loggedUser = await repo.login(user);
  console.log(loggedUser);
  return loggedUser;
});
