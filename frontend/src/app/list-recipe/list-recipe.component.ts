import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  constructor(
    private router: Router,
    private recipe: RecipesService
  ) { }

  listaInit:any = []
  lista:any = []
  searchRecetas:any = ''
  searchIngredientes:any = ''
  searchAutores:any = ''

  ngOnInit(): void {
    this.recipe.listRecipes().subscribe(
      (res) => {
        this.lista = res
        this.listaInit = res
      },
      (err)=>{ 
        console.log(err)
      }
    )
  }

  filter(){
    if(this.searchRecetas.length){ 
      this.lista = this.listaInit.filter(
        (list: { title: String | any[]; }) => list.title.includes(this.searchRecetas)
      )
      
    }else if(this.searchIngredientes.length){
      this.lista = this.listaInit.filter(
        (list: { ingredients: String | any[]; }) => list.ingredients.includes(this.searchIngredientes)
      )
    }else if(this.searchAutores.length){
      this.lista = this.listaInit.filter(
        (list: { autor: String | any[]; }) => list.autor.includes(this.searchAutores)
      )
    }else{
      this.lista = this.listaInit
    }
  }

  delete(recipeSelect:String){
    this.recipe.deleteRecipe(recipeSelect).subscribe(
      (res)=>{
        const index = this.lista.indexOf(recipeSelect)
        if(index > -1){
          this.lista.splice(index,1)
          console.log(index)
        }
      },
      (err)=>{
      console.log(err)
      }
    )
  }

}
