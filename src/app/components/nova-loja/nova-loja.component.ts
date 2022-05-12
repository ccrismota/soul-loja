import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-loja',
  templateUrl: './nova-loja.component.html',
  styleUrls: ['./nova-loja.component.css']
})
export class NovaLojaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  novaLojaForm = this.fb.group({ //Esse é um array e funcões
    nome: ['', [Validators.required, Validators.minLength(5)]],
    ramo: ['',[Validators.required, Validators.minLength(10)]],
    parceiros: ['',[Validators.required, Validators.maxLength(30)]],
    aboutUs: ['',[Validators.required, Validators.minLength(8)]]
  });

  get nome(){
    return this.novaLojaForm.get('nome');
  }
  
  get ramo(){
    return this.novaLojaForm.get('ramo');
  }

  get parceiros(){
    return this.novaLojaForm.get('parceiros');
  }

  get aboutUs(){
    return this.novaLojaForm.get('aboutUs');
  }

  onSubmit(){
    alert('Bem vindo');
    console.log(this.novaLojaForm.value);
  }

  ngOnInit(): void {
  }

}
