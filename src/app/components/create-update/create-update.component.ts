import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { Post } from '../../post';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  public post: Post;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.post = this.postService.getter();
  }

  createOrUpdate(){
    if(this.post._id==undefined){
    this.postService.createPost(this.post).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }else{
    this.postService.updatePost(this.post).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
}
