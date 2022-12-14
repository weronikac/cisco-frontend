import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import {AppComponent} from "../app.component";
import {TodoPresenter} from "../todo-presenter";
import {FormsModule} from "@angular/forms";

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent, AppComponent ],
      providers: [TodoPresenter],
      imports:[
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
