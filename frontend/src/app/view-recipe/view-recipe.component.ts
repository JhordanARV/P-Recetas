import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { RecipesService } from '../recipes.service'
import { CommentsService } from '../comments.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  ctrl = new FormControl('prueba', [])

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private recipe: RecipesService,
    private comment: CommentsService
  ) { }

  id = this.route.snapshot.params.id

  newComment: any = {
    comment: "",
    id_recipe: this.id
  }

  listComments:any = []
  listRecipe:any = []

  viewRecipe: any = {
    id: "",
    title: "",
    description: "",
    images: "",
    preparation: "",
    ingredients: "",
    notes: ""
  }

  ngOnInit(): void {
    this.checkRecipe()
    this.checkComments()
  }

  checkRecipe(){
    
    this.recipe.listRecipe(this.id).subscribe(
      (res) => {
        for (let item of res){
          this.viewRecipe = item
        }
        console.log(this.viewRecipe)
      },
      (err)=>{ 
        console.log(err)
      }
    )
  }

  checkComments(){
    this.comment.listComments().subscribe(
      (res) => {
        this.listComments = res.reverse()
      },
      (err)=>{ 
        console.log(err)
      }
    )
  }

  createComment(){
    this.comment.createComment(this.newComment).subscribe(
      (res) => {
        //console.log(res)
        this.listComments
        
        /*const commentId = res ? res.id_recipe : null
        console.log(commentId)
        this.router.navigate(["/Receta/" + commentId])*/

        setTimeout(()=>{
          this.ngOnInit()
          this.newComment
        }, 1000);
        
      },
      (err) => {
        console.log(err)
      }
    )
  }

  deleteComment(commentSelect:String){
    this.comment.deleteComment(commentSelect).subscribe(
      (res)=>{
        const index = this.listComments.indexOf(commentSelect)
        if(index > -1){
          this.listComments.splice(index,1)
        }
      },
      (err)=>{
      console.log(err)
      }
    )
  }

}
