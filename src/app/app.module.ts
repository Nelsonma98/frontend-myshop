import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoArticleComponent } from './components/info-article/info-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormArticleComponent } from './components/form-article/form-article.component';
import { Error404Component } from './components/error404/error404.component';
import { CommercialComponent } from './components/commercial/commercial.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NavbarComponent,
    InfoArticleComponent,
    FooterComponent,
    FormArticleComponent,
    Error404Component,
    CommercialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
