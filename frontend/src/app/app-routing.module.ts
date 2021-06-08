import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRecipeComponent } from './top-recipe/top-recipe.component'
import { ListRecipeComponent } from './list-recipe/list-recipe.component'
import { ViewRecipeComponent } from './view-recipe/view-recipe.component'

const routes: Routes = [
  { 
    path: "", redirectTo: '/Inicio', pathMatch: 'full' 
  },
  {
    path:"Inicio",
    component: TopRecipeComponent
  },
  {
    path: "Recetas",
    component: ListRecipeComponent
  },
  {
    path: "Receta/:id",
    component: ViewRecipeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
