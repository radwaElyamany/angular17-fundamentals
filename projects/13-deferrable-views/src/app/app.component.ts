import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on interaction(loadPosts)) {
        <app-posts />
      } @placeholder (minimum 500ms) {
        <p>placeholder</p>
      } @loading (after 500ms; minimum 1s) { 
        <p>loading</p>
      } @error {
        <p>error</p>
      }
    </section>
  `,
})
export class AppComponent {}
