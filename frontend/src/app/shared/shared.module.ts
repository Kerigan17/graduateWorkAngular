import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import {RouterLink} from "@angular/router";
import { CommentComponent } from './components/comment/comment.component';
import { NameValidatorDirective } from './directives/name-validator.directive';
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule
  ],
  exports: [
    ArticleCardComponent,
    CommentComponent,
    LoaderComponent
  ],
  declarations: [
    ArticleCardComponent,
    CommentComponent,
    NameValidatorDirective,
    PhoneValidatorDirective,
    LoaderComponent
  ]
})
export class SharedModule { }
