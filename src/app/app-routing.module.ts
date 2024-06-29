import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { InfoArticleComponent } from './components/info-article/info-article.component';
import { FormArticleComponent } from './components/form-article/form-article.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'article/:id',
    component: InfoArticleComponent,
  },
  {
    path: 'article/create',
    component: FormArticleComponent,
  },
  {
    path: 'article/edit/:id',
    component: FormArticleComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
