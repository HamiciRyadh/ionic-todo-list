import { Injectable } from '@angular/core';
import {List} from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[];

  constructor() {
    this.lists = [];
  }

  public getOne(id: number): List | undefined {
    return this.lists[id];
  }

  public getAll(): List[] {
    return [];
  }

  public create(list: List): void {
    this.lists.push(list);
  }
}
