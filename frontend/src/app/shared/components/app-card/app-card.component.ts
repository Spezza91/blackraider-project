import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLink } from '../../../core/models/app-link.model';

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="app.url" 
       target="_blank" 
       class="group relative block p-6 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10"
       [ngClass]="'hover:border-opacity-50'">
       
      <!-- Glassmorphism Background -->
      <div class="absolute inset-0 bg-white/5 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10"></div>
      
      <!-- Gradient Glow Effect -->
      <div class="absolute -inset-1 opacity-0 group-hover:opacity-20 bg-gradient-to-r transition-opacity duration-500 blur-xl"
           [ngClass]="app.color || 'from-blue-500 to-purple-600'"></div>

      <div class="relative flex items-center space-x-5">
        <!-- Icon Container with Gradient -->
        <div class="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg text-white"
             [ngClass]="app.color || 'from-gray-700 to-gray-900'">
            <i [class]="app.icon || 'fa-solid fa-link'" class="text-3xl drop-shadow-md"></i>
        </div>
        
        <div class="flex-1">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                [ngClass]="app.color || 'from-white to-gray-300'">
                {{app.name}}
            </h5>
            <p class="font-medium text-gray-400 group-hover:text-gray-200 transition-colors">{{app.description}}</p>
        </div>
        
        <!-- Arrow Icon opacity transition -->
        <div class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
             <i class="fa-solid fa-chevron-right text-xl"></i>
        </div>
      </div>
    </a>
  `,
  styles: []
})
export class AppCardComponent {
  @Input() app!: AppLink;
}
