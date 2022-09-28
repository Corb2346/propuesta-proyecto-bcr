import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../../../../services/login-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  title:string = 'formularioPage';
  reactiveForm: FormGroup;

  constructor(public loginService : LoginServiceService) { }

  ngOnInit(): void {
   this.reactiveForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
   });
   this.onSubmit(); 
  }

  onSubmit(){
    console.log(this.reactiveForm);
    
  }

  getData(userName:string,email:string,password:string){
    this.loginService.login(userName,email,password);
  }

  get firstName(){
    return this.reactiveForm.get('firstName');
  }

  get email(){
    return this.reactiveForm.get('email');
  }

  get password(){
    return this.reactiveForm.get('password');
  }


}
