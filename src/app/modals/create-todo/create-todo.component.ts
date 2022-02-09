import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Todo} from '../../models/todo';
import {Validators, FormBuilder} from '@angular/forms';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: "./create-todo.component.html",
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {

  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  });

  private listId: number;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private listService: ListService,
    private navParams: NavParams
  ) {
  }

  ngOnInit() {
    this.listId = this.navParams.data.listId;
  }

  save() {
    const todo = this.createFromForm();
    this.listService.getOne(this.listId)?.addElement(todo);
    this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  protected updateForm(todo: Todo): void {
    this.editForm.patchValue({
      name: todo.name,
      description: todo.description,
    });
  }

  protected createFromForm(): Todo {
    return {
      ...new Todo('', '', false),
      name: this.editForm.get(['name'])?.value,
      description: this.editForm.get(['description'])?.value,
      isDone: false,
    };
  }
}
