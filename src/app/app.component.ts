import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  submit = false;
  users = []
  user = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confrimPW:"",
    state:""
  }
  onSubmit(){
    this.submit = true;
    this.users.push(this.user)
    console.log(this.user)    
    this.user = {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confrimPW:"",
      state:""
    }
  }
}
