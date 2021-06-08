import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient ) { }
  private urlGeneral = 'http://localhost:3000/api/recipe/'

  createRecipe(recipe:any){
    return this.http.post<any>(this.urlGeneral, recipe)
  }

  topRecipe(){
    return this.http.get<any>(this.urlGeneral)
  }

  listRecipes(){
    return this.http.get<any>(this.urlGeneral)
  }

  listRecipe(id:string){
    return this.http.get<any>(this.urlGeneral+id)
  }

  deleteRecipe(recipe:any){
    const id = recipe.id
    return this.http.delete<any>(this.urlGeneral+id)
  }

}
