import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles() {}
  getArticle(id: string) {}
  createArticle() {}
  updateArticle(id: string, article: Article) {}
  deleteArticle(id: string) {}
}
