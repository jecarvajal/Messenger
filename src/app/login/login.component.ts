import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  password : string = '';
  email    : string = '';
  
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authenticationService.loginWithEmail(this.email,this.password).then((data) =>{
      alert('Loggeado correctamente');
      console.log(data);
    }).catch((error)=>{
      alert('Ocurrio un error');
      console.log(error);
    })
  }
  
  register(){
    console.log('Este es el mail:' + this.email)
    this.authenticationService.registerWithEmail(this.email,this.password).then((data) =>{
      alert('Loggeado correctamente');
      console.log(data);
    }).catch((error)=>{
      alert('Ocurrio un error');
      console.log(this.email);
      console.log(error);
    })
  }
}
