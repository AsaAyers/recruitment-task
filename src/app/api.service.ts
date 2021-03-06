import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = '/api';
const user = 'John';

export interface Post {
  id: number;
  title: string;
  author: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: string;
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${BASE_URL}/posts?author=${user}`);
  }

  getComments(postId) {
    return this.http.get<Comment[]>(`${BASE_URL}/comments?postId=${postId}`);
  }
}
