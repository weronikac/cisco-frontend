import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import {TodoPresenter} from "./todo-presenter";

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoPresenter],
  bootstrap: [AppComponent]
})
export class AppModule { }
