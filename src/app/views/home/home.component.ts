import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Section {
  nome: string;
  habilidade: string;
  img: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: ThemePalette = 'accent';

  title: string = 'Currículo';

  constructor() { }

  ngOnInit(): void {
    
  }




  objetivo: string = 'Atuar como desenvolvedor fullstack, aprender novas tecnologias e cumprir metas.';

  habilidades: Section[] = [
    {
      nome: 'Angular',
      habilidade: '80',
      img: '../../../assets/sistema/svg-clean/angular.svg',
    },
    {
      nome: 'ASP.NET CORE MVC',
      habilidade: '100',
      img: '../../../assets/sistema/svg-clean/NET_Core_Logo.svg',
    },
    {
      nome: 'C#',
      habilidade: '60',
      img: '../../../assets/sistema/svg-clean/csharp.svg',
    }, {
      nome: 'Flutter',
      habilidade: '60',
      img: '../../../assets/sistema/svg-clean/flutter.svg',
    },
    {
      nome: 'CSS - SCSS',
      habilidade: '60',
      img: '../../../assets/sistema/svg-clean/Sass_Logo_Color.svg',
    },
    {
      nome: 'PHP',
      habilidade: '50',
      img: '../../../assets/sistema/svg-clean/php.svg',
    },


  ];

  
  cursos = [{
    nome: 'Dominando o ASP.NET MVC Core',
    link: "https://desenvolvedor.io/curso-online-dominando-o-asp-net-mvc-core",
    linkCertificado: "https://desenvolvedor.io/certificados/e8051804-ce28-43a9-9251-2081f94db2a6",
    andamento: '100',
    img: '../../../assets/sistema/svg-clean/NET_Core_Logo.svg',
  },
  {
    nome: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
    link: "https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/",
    linkCertificado: "",
    andamento: '35',
    img: '../../../assets/sistema/svg-clean/csharp.svg',
  },
  {
    nome: 'Angular - Loiane.training',
    link: "https://loiane.training/curso/angular",
    linkCertificado: "",
    andamento: '10',
    img: '../../../assets/sistema/svg-clean/angular.svg',
  },
  {
    nome: 'Aprenda Flutter e Desenvolva Apps Para Android e IOS 2021',
    link: "https://www.udemy.com/course/curso-flutter/",
    linkCertificado: "",
    andamento: '20',
    img: '../../../assets/sistema/svg-clean/flutter.svg',
  }
  
  
  ,];


}
