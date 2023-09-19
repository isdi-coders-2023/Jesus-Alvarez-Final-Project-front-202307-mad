import { Court } from '../model/court';

export class ApiCourtRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Court[]> {
    const request = await fetch(this.urlBase);
    const data = await request.json();
    return data;
  }
}
