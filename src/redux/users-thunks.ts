import { createAsyncThunk } from '@reduxjs/toolkit';
import { Payload, User, UserLoginData } from '../model/user';
import { ApiUserRepository } from '../services/user-repository';

export const createThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    data: FormData;
  }
>('users/create', async ({ repo, data }) => {
  const fullUser = await repo.create(data);
  return fullUser;
});

export const loginThunk = createAsyncThunk<
  Payload,
  {
    repo: ApiUserRepository;
    user: UserLoginData;
  }
>('users/login', async ({ repo, user }) => {
  const loggedUser = await repo.login(user);
  localStorage.setItem('userToken', loggedUser.token as string);
  localStorage.setItem('currentUserId', loggedUser.user.id as string);
  localStorage.setItem(
    'currentUserFirstName',
    loggedUser.user.firstName as string
  );
  return loggedUser;
});
