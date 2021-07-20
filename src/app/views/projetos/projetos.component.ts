import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
  

export class ProjetosComponent implements OnInit {
  title: string = 'Projetos';

  constructor() { }
  panelOpenState = false;

  ngOnInit(): void {
  }
  

  public projetos = [{
    nome: 'AutonomoApp',
    linguagem: 'Flutter - App Android',
    descricao: 'App desenvolvido para unir pessoas autônomas a pessoas que buscam algum tipo de serviço.** Projeto criado para fins de aprendizado**',
    img: 'https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg',
    github: 'https://github.com/joaojfmx/Autonomo_app',
  }, {
    nome: 'Site Currículo',
    linguagem: 'Angular',
    descricao: 'Desenvolvido em CSS Grid/Flex, Angular Material.',
    img: 'https://miro.medium.com/max/2000/1*_UY7U-Umohxg-88is_e3mQ.png',
    github: 'https://github.com/joaojfmx/angular-curriculo',
    },
    {
      nome: 'CestaFácil',
      linguagem: 'Ionic - App Android',
      descricao: 'Projeto final feito em 2019 no curso técnico SENAC.',
      img: 'https://www.mundojs.com.br/wp-content/uploads/2018/09/ionic-framework-og.png',
      github: 'https://github.com/joaojfmx/ionic_4-cestafacil',
    },
  ];

}
