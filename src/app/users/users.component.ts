import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from './user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private basePath: string = '/Users';
  users: FirebaseListObservable<User[]>;
  user: FirebaseObjectObservable<User>;

  constructor(public db: AngularFireDatabase) { }

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
