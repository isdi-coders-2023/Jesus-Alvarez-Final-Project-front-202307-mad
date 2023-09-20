import { Review } from '../model/review';

export class ApiReviewRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Review[]> {
    const request = await fetch(this.urlBase);
    const data = await request.json();
    return data;
  }
  async create(item: FormData): Promise<Review> {
    const response = await fetch(`${this.urlBase}/register`, {
      method: 'POST',
      body: item,
    });

    const data = await response.json();
    return data;
  }
}
