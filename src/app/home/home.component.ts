import { Component, OnInit } from '@angular/core';
import {ThrowStmt} from '@angular/compiler';
import {alunos} from '../model/alunos';
import { professores } from '../model/professores';
import { cursos } from '../model/cursos';
@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibetabela: boolean =false;

 

  listaAlunos: alunos[] = [
    { nome: 'Gabriela', idade: 18, email: 'gabrielasmunizf@gmail.com', curso: 'ADS' },
    { nome: 'Jhonatan', idade: 18, email: 'jhonatanspereira@gmail.com', curso: 'MSI' },
    { nome: 'Beatriz', idade: 19, email: 'mariabalbuquerque@gmail.com', curso: 'Direito' },
    { nome: 'Pedro', idade: 18, email: 'pedrohsilva@gmail.com', curso: 'Fisioterapia' }
  ];

  valor1: number;
  exibeTabela: boolean = false;

  listaProfessores: professores [] = [
    {nome: 'Lucas',email:'lucas@gmail.com',cadeira:'Banco de dados'},
    {nome: 'Pedro',email:'pedro@gmail.com',cadeira:'Software'},
    {nome: 'Henrique',email:'henrique@gmail.com',cadeira:'Angular'}
  ];

  valor2: number;
  exibetable: boolean = false;

  listaCursos: cursos[] = [
    {curso: 'Análise e Desenvolvimento de Sistemas',duracao:'5 períodos',tipo:'Tecnólogo'},
    {curso: 'Direito',duracao:'10 períodos',tipo:'Bacharelado'}, 
    {curso: 'Manutenção e Suporte de Informática',duracao:'3 períodos',tipo:'Tecnico'}, 
    {curso: 'Fisioterapia',duracao:'10 períodos',tipo:'Bacharel'} 
  ];

   

  displayedColumns: string [] = ['Nome','Idade','E-mail','Curso'];

  ngOnInit(): void {
    this.valor =5;
  }

  mudarValor(){
    this.valor++;
  }

  reiniciarValor(){
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

  mudarvalor(){
    this.valor1++;
  }

  reiniciarvalor(){
    this.valor1 = 0;
  }

  exibirtabela(){
    this.exibetabela = true;
  }

  mudarvalor1(){
    this.valor2++;
  }

  reiniciarvalor1(){
    this.valor2= 0;
  }

  exibirtable(){
    this.exibetable = true;
  }

}
