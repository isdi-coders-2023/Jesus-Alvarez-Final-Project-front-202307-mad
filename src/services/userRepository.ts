import { User, UserNoId } from '../model/user';

export class ApiUserRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async create(item: UserNoId): Promise<User> {
    const response = await fetch(`${this.urlBase}/register`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
