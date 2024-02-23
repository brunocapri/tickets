import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <div class="flex justify-center min-h-screen">
      <div class="w-full max-w-6xl p-4">
        <header class="mb-8">
          <div
            class="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4"
          >
            <h1 class="text-5xl font-semibold">Tickets</h1>
          </div>
        </header>
        <div class="flex flex-col">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'tickets';
}
