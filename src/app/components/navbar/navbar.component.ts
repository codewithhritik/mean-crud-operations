import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
  }

  newPost(event: any){
    event.preventDefault();
    this.postService.setter(new Post());
    this.router.navigate(['/createUpdate']);
  }

}
