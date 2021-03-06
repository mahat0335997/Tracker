import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from './users/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  email: string;
  password: string;
  private basePath: string = '/Users';
  users: FirebaseListObservable<User[]>;
  user: FirebaseObjectObservable<User>;

  constructor(public authService: AuthService, public db: AngularFireDatabase) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

  addTodo(value: string): void {
    this.users.push({ content: value, done: false });
  }

  deleteTodo(todo: any): void {
   // this.db.object('/Users/' + user.$key).remove();
  }

  updateTodo(todo: any, newValue: string): void {
   // this.db.object('/Users/' + user.$key).update({ content: newValue, done: todo.done });
  }

  getUsersList(): FirebaseListObservable<User[]> {
    this.users = this.db.list(this.basePath);
    return this.users
  }

    // Return a single observable item
  getUser(firstName: string): FirebaseObjectObservable<User> {
    const userPath =  `${this.basePath}/${firstName}`;
    this.user = this.db.object(userPath)
    return this.user
  }


  ngOnInit() {
  
  }

}
