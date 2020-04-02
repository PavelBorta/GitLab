import { Injectable } from '@angular/core';
import { Connection, DATA_TYPE, IDataBase, ITable } from 'jsstore';

import { IndexedDbProvider } from '../database/database.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {

  databaseName = 'DATABASE_USERS_TEST';

  get connection() {
    return IndexedDbProvider.connection as Connection;
  }

  constructor() {
    this.initDatabase();
  }

  private async initDatabase() {
    const exists = await this.connection.isDbExist(this.databaseName);

    if (exists) {
      this.connection.openDb(this.databaseName);
    } else {
      const database = this.getDatabase();
      this.connection.initDb(database);
    }
  }

  private getDatabase() {
    const tableUsers: ITable = {
      name: 'Users',
      columns: {
        id: { primaryKey: true, autoIncrement: true },
        firstName: { notNull: true, dataType: DATA_TYPE.String },
        lastName: { notNull: true, dataType: DATA_TYPE.String },
        birthday: { notNull: true, dataType: DATA_TYPE.String },
        country: { notNull: true, dataType: DATA_TYPE.String },
      },
    };

    return {
      name: this.databaseName,
      tables: [tableUsers],
    } as IDataBase;
  }

}
