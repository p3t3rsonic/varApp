import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public mensagem = "Olá mundo";
public nome: string;
public idade: number;
public ativo: boolean;

public situacao: any;

  constructor() {

    // alert ("Olá mundo!");

    // alert ("Mensagem: " + this.mensagem);

    //console.log ("Mensagem: " + this.mensagem);

    this.mensagem = "Olá pessoal";
    this.situacao = "teste";

    // this.idade = 52;
  }

public msg(){

  this.mensagem = this.nome + ", você informou que sua idade é, " + this.idade + ", anos.";
  if (this.idade >= 18){
    this.situacao = "Você é maior de idade."
  }else{
      this.situacao = "Você é menor de idade."
    }

  }
}


