import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

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

  it('should every item have title, content and completed status', () => {
    expect(component.presenter.Items.every( item => {item.title})).not.toBeNull();
    expect(component.presenter.Items.every( item => {item.content})).not.toBeNull();
    expect(component.presenter.Items.every( item => {item.completed})).not.toBeNull();
  });

  it('should contain list with 3 items', () => {
      expect(component.presenter.Items.length).toBe(3);
      expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    });

  it('should contain list with 4 items after adding one', () => {
       component.AddItem();
       fixture.detectChanges();
       expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(4);
  });

  it('should contain list with 2 items after adding one', () => {
       component.onDelete(1);
       fixture.detectChanges();
       expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(2);
   });

});


