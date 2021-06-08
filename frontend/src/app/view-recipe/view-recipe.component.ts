import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service'
import { CommentsService } from '../comments.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  constructor(
    private router: Router, 
    private recipe: RecipesService,
    private comment: CommentsService,
    private route: ActivatedRoute
  ) { }

  viewRecipe: any = {
    title: "",
    description: "",
    images: "",
    preparation: "",
    ingredients: "",
    notes: ""
  }

  viewComment: any = {
    id: "",
    usuario: "",
    comment: "",
    id_recipe: "",
    fecha: ""
  }

  listaInit:any = []
  lista:any = []

  ngOnInit(): void {
    this.checkRecipe()
    this.checkComments()
  }

  checkRecipe(){
    let id = this.route.snapshot.params.id
    console.log(id)
    this.recipe.listRecipe(id).subscribe(
      (res) => {
        this.viewRecipe = res
      },
      (err)=>{ 
        console.log(err)
      }
    )
  }

  checkComments(){
    this.comment.listComments().subscribe(
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
