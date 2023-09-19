import { ImageData } from '../model/image';
import { Review } from './review';

export type Court = {
  name: string;
  surface: string;
  location: string;
  pictures: ImageData;
  reviews: Review[];
  id: string;
};
