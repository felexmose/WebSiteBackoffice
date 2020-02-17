import { ReferenceEditComponent } from './category/sub-category/references/reference-edit/reference-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { ReferenceComponent } from './category/sub-category/references/reference.component';
import { AzureLoginComponent } from './azure-login/azure-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CategoryComponent,
    SubCategoryComponent,
    ReferenceComponent,
    AzureLoginComponent,
    ReferenceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
