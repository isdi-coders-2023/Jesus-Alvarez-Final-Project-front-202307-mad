import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserLoginData } from '../model/user';
import { ApiUserRepository } from '../services/userRepository';

export const createThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    data: FormData;
  }
>('users/create', async ({ repo, data }) => {
  console.log(data);
  const fullUser = await repo.create(data);

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
  return loggedUser;
});
