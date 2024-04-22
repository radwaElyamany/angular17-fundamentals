import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` 

    <h1> Welcome to {{ title }}! </h1>

    @for (productTitle of productTitles; track productTitle) {
      <div>
        <a [routerLink]="['details', $index]">{{ productTitle }}</a> 
      </div>
    }
    <router-outlet />
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
