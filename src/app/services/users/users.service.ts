import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private readonly baseUrl = `http://localhost:3001/users`;

  constructor(
    private readonly http: HttpClient
  ) { }

  async getAll(): Promise<User[]> {
    return this.http.get<User[]>(this.baseUrl).toPromise();
  }

  async create(value: any): Promise<User> {
    return this.http.post<User>(this.baseUrl, value).toPromise();
  }

  async get(id: number): Promise<User> {
    return this.http.get<User>(this.baseUrl + `/${id}`).toPromise();
  }

  async update(id: number, body: User): Promise<User> {
    return this.http.put<User>(this.baseUrl + `/${id}`, body).toPromise();
  }

  async delete(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`).toPromise();
  }

}
