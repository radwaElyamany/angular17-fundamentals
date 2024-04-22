import { Component } from '@angular/core';


// to fix => Property 'miles' does not exist on type 'never'.
interface Car {
  make: string;
  model: string;
  miles: number;
  price: number;
  year: number;
  transmission: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->

      @for(item of carList; track item; let idx = $index) {
        <article class="listing">
          <div class="image-parent">
            <img class="product-image" src="https://placehold.co/100x100" />
          </div>
          <section class="details">
            <p class="title">{{ item.make }} {{  item.model }}</p>
            <hr />
            <p class="detail">
              <span>Year</span>
              <span>{{ item.year }}</span>
            </p>
            <div class="detail">
              <span>Transmission</span>
              <span>{{ item.transmission }}</span>
            </div>
            <p class="detail">
              <span>Mileage</span>
              <span>{{ item.miles }}</span>
            </p>
            <p class="detail">
              <span>Price</span>
              <span>{{ item.price }}</span>
            </p>
          </section>
        </article>
      } @empty {
        <p>Empty</p>
      }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
}
