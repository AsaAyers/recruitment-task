import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../api.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  @Input() post: Post;
  @Output() loadComments = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.loadComments.emit(this.post.id);
  }

}
