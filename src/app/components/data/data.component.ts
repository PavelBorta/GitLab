import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/services/types';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.styles.css'],
})
export class DataComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.initUsers();
  }

  private async initUsers() {
    this.users = await this.usersService.getAll();
  }

}
