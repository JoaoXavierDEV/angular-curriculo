import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './views/component/card/card.component';
import { FooterComponent } from './views/component/footer/footer.component';
import { HeaderComponent } from './views/component/header/header.component';
import { ProjetosComponent } from './views/projetos/projetos.component';

//material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";

import { MatSidenavModule }from '@angular/material/sidenav'
import { MatDividerModule } from'@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';



import { NavComponent } from './views/component/nav/nav.component';
import { SiteV1Component } from './views/site-v1/site-v1.component';

/// flex layout

import { FlexLayoutModule } from '@angular/flex-layout';



import { SobreComponent } from './views/sobre/sobre.component';

import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ProjetosComponent,
    NavComponent,
    SiteV1Component,
    SobreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FlexLayoutModule,
    MatProgressBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   
  }
 }
