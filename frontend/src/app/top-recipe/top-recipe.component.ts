import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-top-recipe',
  templateUrl: './top-recipe.component.html',
  styleUrls: ['./top-recipe.component.css']
})
export class TopRecipeComponent implements OnInit {

  constructor(
    private router: Router,
    private recipe: RecipesService
  ) { }

  listaInit:any = []
  lista:any = []

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

}
