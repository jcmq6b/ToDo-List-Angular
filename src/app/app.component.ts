import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  //This is a global variable, have to use 'this' to reference
  todoArray = [];

  //Grabbing front end #todoForm and creating a backend variable with it
  @ViewChild('todoForm', {static: false}) todoForm;

  addTodo(value){
    if(value!=""){
      //Places the value onto the array
      this.todoArray.push(value);
      console.log(this.todoArray);

      this.todoForm.resetForm();
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

  // Submitting form and want to add the todo element to the array
  todoSubmit(form: any){
    if(form != ""){
      console.log("submit ");
      console.log(form);
      this.todoArray.push(form.todo);

      this.todoForm.resetForm();
    }else{
      alert("ToDo Required");
    }
  }
}
