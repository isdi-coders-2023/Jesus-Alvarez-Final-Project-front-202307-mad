import { Court } from './court';
import { ImageData } from './image';
import { User } from './user';

export type ReviewNoId = {
  userId: User;
  courtId: Court;
  description: string;
  date: Date;
  image: ImageData;
};

export type ReviewId = {
  id: string;
};

export type Review = ReviewNoId & ReviewId;
