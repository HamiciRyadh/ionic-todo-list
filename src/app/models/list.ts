import {Todo} from './todo';

export class List {
  public name: string;
  public todos: Todo[];

  constructor(name: string, todos: Todo[]) {
    this.name = name;
    this.todos = todos;
  }

  public addElement(todo: Todo): void {
    this.todos.push(todo);
  }

  public removeElement(todo: Todo): void {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
