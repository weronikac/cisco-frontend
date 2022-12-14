import {TodoItem} from "./todo-item";

export interface ITodoPresenter {
  Items : TodoItem[];
  addItem(title: string, content: string) : void
  removeItem(id: number) : void;
  setCompleted(id: number, isCompleted: boolean) : void;
}
