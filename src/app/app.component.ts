import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  //This is a global variable, have to use 'this' to reference
  todoArray = [];

  addTodo(value){
    if(value!=""){
      //Places the value onto the array
      this.todoArray.push(value);
      console.log(this.todoArray);
    }else{
      alert("ToDo field required");
    }
  }

  deleteTodo(value){
    for(let i = 0; i<= this.todoArray.length; i++){
      if(value == this.todoArray[i]){
        this.todoArray.splice(i,1);
        console.log("delete " + value);
      }
    }
  }
}
