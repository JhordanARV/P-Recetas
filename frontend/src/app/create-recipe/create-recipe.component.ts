import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(
    private router: Router,
    private recipe: RecipesService
  ) { }

  ngOnInit(): void {
  }

  newRecipe = {
    title: "",
    description: "",
    images: "",
    preparation: "",
    ingredients: "",
    notes: ""
  }

  createRecipe(){
    this.recipe.createRecipe(this.newRecipe).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
