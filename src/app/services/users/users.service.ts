import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {

  readonly tableName = 'Users';

  constructor() {
    super();
  }

  async getAll(): Promise<User[]> {
    return this.connection.select({ from: this.tableName });
  }

  async create(value: any): Promise<User> {
    const [user] = await this.connection.insert({ into: this.tableName, return: true, values: [value] }) as any;

    return user;
  }

  async get(id: number): Promise<User> {
    const result = await this.connection.select({ from: this.tableName, where: { id } }) as any;

    return result.length ? result[0] : null;
  }

  async update(id: number, body: User): Promise<User> {
    await this.connection.update({ in: this.tableName, where: { id }, set: body });

    return this.get(id);
  }

  async delete(id: number) {
    return this.connection.remove({ from: this.tableName, where: { id } });
  }

}
