import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  private urlGeneral = 'http://localhost:3000/api/comment/'

  createComment(comment:any){
    return this.http.post<any>(this.urlGeneral, comment)
  }

  listComments(){
    return this.http.get<any>(this.urlGeneral)
  }

  deleteComment(comment:any){
    const id = comment.id
    return this.http.delete<any>(this.urlGeneral+id)
  }
}
