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

  title:string = 'Currículo';

  constructor() { }
  
  ngOnInit(): void {
  }

  objetivo: string = 'Atuar como desenvolvedor fullstack, aprender novas tecnologias e cumprir metas.';

  habilidades: Section[] = [
    {
      nome: 'Angular',
      habilidade: '90',
      img: '../../../assets/sistema/svg-clean/angular.svg',
    },
    {
      nome: 'Flutter',
      habilidade: '85',
      img: '../../../assets/sistema/svg-clean/flutter.svg',
    },
    {
      nome: 'CSS - SCSS',
      habilidade: '60',
      img: '../../../assets/sistema/svg-clean/Sass_Logo_Color.svg',
    },
    {
      nome: 'DotNET',
      habilidade: '10',
      img: '../../../assets/sistema/svg-clean/NET_Logo.svg',
    },


  ];

}
