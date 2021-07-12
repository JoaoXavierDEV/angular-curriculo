import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './views/projetos/projetos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  , {
    path: 'projetos',
    component: ProjetosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
