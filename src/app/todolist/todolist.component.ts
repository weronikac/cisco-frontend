import {Component, Inject} from '@angular/core';
import {TodoPresenter} from "../todo-presenter";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ITodoPresenter} from "../itodo-presenter";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  public presenter: TodoPresenter;

  newTitle: string = "";
  newContent:string = "";

  constructor( @Inject(TodoPresenter) presenter: ITodoPresenter) {
    this.presenter = presenter;
  }

  onCompletedChanged(id: number, event: any){
    this.presenter.setCompleted(id, event.target.checked);
  }

  onDelete(id: number) {
    this.presenter.removeItem(id);
  }

  AddItem() {
    this.presenter.addItem(this.newTitle, this.newContent);
  }

}
