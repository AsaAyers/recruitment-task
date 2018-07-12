import { Component, OnInit } from '@angular/core';

import { ApiService, Post, Comment } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recruitment';
  dataIsAvailable: boolean;
  posts: Post[];
  comments: Map<number, Comment[]>;

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
    this.comments = new Map();
  }

  loadComments(postId) {
    this.apiService.getComments(postId).subscribe(comments => {
      this.comments.set(postId, comments);
    });
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
  }
}
