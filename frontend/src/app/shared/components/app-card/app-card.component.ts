import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLink } from '../../../core/models/app-link.model';

@Component({
    selector: 'app-app-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <a [href]="app.url" target="_blank" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform hover:scale-105">
      <div class="flex items-center space-x-4">
        <div class="p-3 bg-blue-100 rounded-full dark:bg-blue-900 text-blue-600 dark:text-blue-300">
            <i [class]="app.icon || 'fa-solid fa-link'" class="text-xl"></i>
        </div>
        <div>
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{app.name}}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{app.description}}</p>
        </div>
      </div>
    </a>
  `,
    styles: []
})
export class AppCardComponent {
    @Input() app!: AppLink;
}
