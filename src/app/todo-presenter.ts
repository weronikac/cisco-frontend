import {TodoItem} from "./todo-item";
import {ITodoPresenter} from "./itodo-presenter";

export class TodoPresenter implements ITodoPresenter{

  public Items: TodoItem[] = [
    {
      id:1,
      title: "title1",
      content: "content1",
      completed: false
    },
    {
      id:2,
      title: "title2",
      content: "content2",
      completed: false
    },
    {
      id:3,
      title: "title3",
      content: "content3",
      completed: true
    }
  ];

  addItem(title: string, content: string):void{
    let maxId = Math.max.apply(Math,this.Items.map(function(o){return o.id;}));

    this.Items.push({
      id: maxId+1,
      title: title,
      content: content,
      completed: false
    });
    console.log(`Item ${maxId+1}, content: ${content}, title: ${title} has been added`)
  }

  removeItem(id:number):void{
    this.Items = this.Items.filter(item=>item.id!=id);
    console.log(`Item ${id} removed`);
  }

  setCompleted(id:number, isCompleted:boolean):void{
    this.Items.forEach(item=>{
      if(item.id!=id)
      {
        return;
      }

      item.completed = isCompleted;
      console.log(`Items ${item.id} status changed to ${isCompleted}`);
    });
  }
}
