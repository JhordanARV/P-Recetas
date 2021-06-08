import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//requests
import { HttpClientModule } from '@angular/common/http'

//services
import { RecipesService } from './recipes.service'

//Components
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { TopRecipeComponent } from './top-recipe/top-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRecipeComponent,
    TopRecipeComponent,
    ViewRecipeComponent,
    CreateRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
