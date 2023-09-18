import { ImageData } from './image';

export type UserLoginData = {
  email: string;
  password: string;
};

export type UserNoId = UserLoginData & {
  firstName: string;
  lastName: string;
  imageData: ImageData;
  reviews: string[];
};

export type UserWithId = {
  id: string;
  token?: string;
};

export type User = UserNoId & UserWithId;
