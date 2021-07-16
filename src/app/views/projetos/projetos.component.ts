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

}
