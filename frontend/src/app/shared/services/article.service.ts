import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleType} from "../../../types/article.type";
import {environment} from "../../../environments/environment.development";
import {CategoryType} from "../../../types/category.type";
import {ActiveParamsType} from "../../../types/active-params.type";
import {DetailArticleType} from "../../../types/detail-article.type";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesTop(): Observable<ArticleType[]> {
    return this.http.get<ArticleType[]>(environment.api + 'articles/top');
  }
  getArticlesRelated(url: string): Observable<ArticleType[]> {
    return this.http.get<ArticleType[]>(environment.api + 'articles/related/' + url);
  }
  getArticles(params: ActiveParamsType): Observable<{count: number, pages: number, items: ArticleType[]}> {
    return this.http.get<{count: number, pages: number, items: ArticleType[]}>(environment.api + 'articles', {params});
  }
  getArticle(url: string): Observable<DetailArticleType> {
    return this.http.get<DetailArticleType>(environment.api + 'articles/' + url);
  }
  getCategories(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(environment.api + 'categories');
  }
}
