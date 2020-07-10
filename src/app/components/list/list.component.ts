import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { Post } from '../../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public posts: Post[];

  constructor(private _postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.readPosts();
  }

  readPosts(){
    this._postService.readPost().subscribe(
        data => {
          console.log(data);
          this.posts = data['msg'];
        }, 
        error =>{
          console.log(error);
        }
    )
  }

  doUpdate(posts){
    this._postService.setter(posts);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(posts){
    this._postService.deletePost(posts._id).subscribe(
      data=>{
        this.posts.splice(this.posts.indexOf(posts), 1);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
