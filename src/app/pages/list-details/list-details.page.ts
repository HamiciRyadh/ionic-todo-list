import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {List} from '../../models/list';
import {Todo} from '../../models/todo';
import { ModalController } from '@ionic/angular';
import {CreateTodoComponent} from '../../modals/create-todo/create-todo.component';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
})
export class ListDetailsPage implements OnInit {

  public list: List;

  constructor(protected listService: ListService,
              protected modalController: ModalController) {
    listService.create(new List('Default', []));
    this.list = listService.getOne(0);
    this.list.addElement(new Todo('Todo', 'Description', true));
    this.list.addElement(new Todo('Todo2', 'Description2', true));
  }

  ngOnInit() {}

  delete(item: Todo): void {
    this.list.removeElement(item);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateTodoComponent,
      componentProps: {
        listId: 0,
      },
      keyboardClose: true,
      swipeToClose: true,
    });

    return await modal.present();
  }
}
