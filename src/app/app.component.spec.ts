import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TodolistComponent} from "./todolist/todolist.component";
import {TodoPresenter} from "./todo-presenter";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodolistComponent
      ],
      providers:[
        TodoPresenter
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app');
  });

});
