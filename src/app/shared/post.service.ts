import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post'; 
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private post: Post;
    private baseUri: string = "http://localhost:8080";
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient) { }

    createPost(post: Post){
      return this.http.post(this.baseUri+'/create',post, {headers:this.headers});
    }

    readPost(){
      return this.http.get(this.baseUri+'/read', {headers:this.headers});
    }

    updatePost(post: Post){
      return this.http.put(this.baseUri+'/update',post, {headers:this.headers});
    }

    deletePost(id: string){
      return this.http.delete(this.baseUri+'/delete/'+id, {headers:this.headers});
    }


    setter(post: Post){
      this.post = post;
    }

    getter(){
      return this.post;
    }


}
