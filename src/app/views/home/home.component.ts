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

  objetivo: string = 'Atuar como desenvolvedor fullstack - Lorem ipsum, dolor sit amet consectetur adipisicing elit. A maxime vel atque illum quidem, deserunt ullam ex nesciunt cum maiores, reiciendis tenetur temporibus! Quo incidunt dignissimos minus dolor! Ullam, earum.';

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
