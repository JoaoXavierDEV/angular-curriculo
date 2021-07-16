import { SobreComponent } from './views/sobre/sobre.component';
import { SiteV1Component } from './views/site-v1/site-v1.component';
import { FooterComponent } from './views/component/footer/footer.component';
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
  , {
    path: 'site-v1',
    component: SiteV1Component
  }, {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
