import { ImageData } from './image';
import { Review } from './review';

export type UserLoginData = {
  email: string;
  password: string;
};

export type UserNoId = UserLoginData & {
  firstName: string;
  lastName: string;
  imageData: ImageData;
  reviews: Review;
};

export type UserWithId = {
  id: string;
  token?: string;
};

export type User = UserNoId & UserWithId;
