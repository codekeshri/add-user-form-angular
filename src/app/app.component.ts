import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, AddUserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ok Google';
  users = [{name: "arvind", age: 10}, {name: "pravin", age: 1000}, {name: "khopoli", age: 100}];
  

  constructor() {
    console.log('AppComponent constructor');
  }
  ngOnInit(): void {

  }

  addUser() {
    console.log('addUsers');
  }

  deleteUser() {
    console.log('deleteUser');
  }
}
