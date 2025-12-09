import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsService } from '../../core/services/apps.service';
import { AppLink } from '../../core/models/app-link.model';
import { AppCardComponent } from '../../shared/components/app-card/app-card.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, AppCardComponent],
    template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-extrabold dark:text-white mb-8 text-center">BlackRaider Dashboard</h1>
      
      <div *ngIf="apps$ | async as apps">
        
        <div class="mb-8">
            <h2 class="text-2xl font-bold dark:text-white mb-4 border-b border-gray-700 pb-2">Media</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <app-app-card *ngFor="let app of getAppsByCategory(apps, 'media')" [app]="app"></app-app-card>
            </div>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl font-bold dark:text-white mb-4 border-b border-gray-700 pb-2">Downloads</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <app-app-card *ngFor="let app of getAppsByCategory(apps, 'download')" [app]="app"></app-app-card>
            </div>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl font-bold dark:text-white mb-4 border-b border-gray-700 pb-2">System</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <app-app-card *ngFor="let app of getAppsByCategory(apps, 'system')" [app]="app"></app-app-card>
            </div>
        </div>

      </div>
    </div>
  `,
    styles: []
})
export class DashboardComponent implements OnInit {

    apps$!: Observable<AppLink[]>;

    constructor(private appsService: AppsService) { }

    ngOnInit(): void {
        this.apps$ = this.appsService.getApps();
    }

    getAppsByCategory(apps: AppLink[], category: string): AppLink[] {
        return apps.filter(app => app.category === category);
    }
}
