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
  status?: string;
};

export type UserWithId = {
  id: string;
  token?: string;
};

export type Payload = {
  token: string;
  user: User;
};

export type User = UserNoId & UserWithId;
