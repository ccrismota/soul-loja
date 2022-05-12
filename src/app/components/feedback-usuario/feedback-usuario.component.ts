import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

//função para permitir só email @soulcodeacademy.org
function onlySoulcode(control: AbstractControl): ValidationErrors | null{
  if(Validators.email(control) === null && Validators.required(control) === null){
    if(!control.value.includes('@soulcodeacademy.org')){
      return { onlySoulcode: true}
    }
  }
  return null;
}


@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.css']
})
export class FeedbackUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  feedbackForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(10)]],
    email: ['',[Validators.required, Validators.email, onlySoulcode]],
    comentario: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(200)]],
    nota: ['',[Validators.required, Validators.min(0), Validators.max(5)]]
  });

  get nome(){
    return this.feedbackForm.get('nome');
  }
  
  get email(){
    return this.feedbackForm.get('email');
  }

  get comentario(){
    return this.feedbackForm.get('comentario');
  }

  get nota(){
    return this.feedbackForm.get('nota');
  }

  onSubmit(){
    alert('Obrigado por seu feedback');
    console.log(this.feedbackForm.value);
  }





  ngOnInit(): void {
  }

}
