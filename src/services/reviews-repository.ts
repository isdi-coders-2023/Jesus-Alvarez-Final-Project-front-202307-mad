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
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();

    return data;
  }

  async delete(id: string): Promise<void> {
    const response = await fetch(`${this.urlBase}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}
