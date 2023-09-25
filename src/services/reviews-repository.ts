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

  async getById(id: string): Promise<Review> {
    const review = await fetch(`${this.urlBase}/${id}`);
    const data = await review.json();
    return data;
  }

  async updateReview(id: string, data: FormData): Promise<Review> {
    const reviewToUpdate = await fetch(`${this.urlBase}/${id}`, {
      method: 'PATCH',
      body: data,
    });
    const updatedReview = await reviewToUpdate.json();
    return updatedReview;
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
