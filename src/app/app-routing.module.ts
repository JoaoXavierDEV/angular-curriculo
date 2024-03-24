import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './views/projetos/projetos.component';
import { MatListOption } from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  , {
    path: 'projetos',
    component: ProjetosComponent
  }
  , {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  ngOnInit() {
  
  }
  
}
