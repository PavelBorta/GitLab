import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/types';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.styles.css']
})
export class CrudComponent implements OnInit {

  selectionOpened = false;

  message = null;

  menuItems = ['Create', 'Read', 'Update', 'Delete'];
  selectedItem = this.menuItems[0];

  user: User = null;

  users: User[] = [];

  constructor(
    private router: Router,
    private usersService: UsersService,
  ) { }

  async ngOnInit() {
    this.user = this.emptyUser;

    this.initUsers();
  }

  tabChange(tab: string) {
    this.selectedItem = tab;

    if (tab === this.menuItems[0]) {
      this.user = this.emptyUser;
    } else {
      this.user = null;
    }
  }

  async selectUser(user: User) {
    this.user = await this.usersService.get(user._id);
  }

  async create() {
    const validated = this.validate();
    if (!validated) {
      this.message = 'Fill fields.';
      return;
    }

    this.message = '';

    const user = await this.usersService.create(this.user);
    this.tabChange(this.menuItems[1]);

    this.user = user;

    this.initUsers();
  }

  async update() {
    const validated = this.validate();
    if (!validated) {
      this.message = 'Fill fields.';
      return;
    }

    this.message = '';

    const user = await this.usersService.update(this.user._id, this.user);
    this.tabChange(this.menuItems[1]);

    this.user = user;

    this.initUsers();
  }

  async delete() {
    try {
      await this.usersService.delete(this.user._id);
    } catch (e) { }

    this.router.navigate(['data']);
  }

  private validate(): boolean {
    const { country, birthday, lastName, firstName } = this.user;

    return !!country && !!birthday && !!lastName && !!firstName;
  }

  private async initUsers() {
    this.users = await this.usersService.getAll();
  }

  private get emptyUser(): User {
    return {
      firstName: '',
      lastName: '',
      country: '',
      birthday: null,
    };
  }

}
