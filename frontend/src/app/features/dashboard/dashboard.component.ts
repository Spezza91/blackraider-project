import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsService } from '../../core/services/apps.service';
import { QBitService } from '../../core/services/qbit.service';
import { AppLink } from '../../core/models/app-link.model';
import { AppCardComponent } from '../../shared/components/app-card/app-card.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, AppCardComponent],
    template: `
    <div class="min-h-screen py-12 px-4 selection:bg-purple-500 selection:text-white">
      <div class="container mx-auto max-w-7xl">
        
        <!-- Header -->
        <header class="mb-16 text-center">
            <h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 drop-shadow-sm">
                BlackRaider
            </h1>
            <p class="text-xl text-gray-400 font-light tracking-wide">
                Your Personal Media Command Center
            </p>
        </header>
      
        <div *ngIf="apps$ | async as apps" class="space-y-16">
        
            <!-- Media Section -->
            <section>
                <div class="flex items-center mb-8">
                    <div class="h-10 w-2 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></div>
                    <h2 class="text-3xl font-bold text-white tracking-tight">Media Server</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <app-app-card *ngFor="let app of getAppsByCategory(apps, 'media')" [app]="app"></app-app-card>
                </div>
            </section>

            <!-- Downloads Section -->
            <section>
                <div class="flex items-center mb-8">
                    <div class="h-10 w-2 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                    <h2 class="text-3xl font-bold text-white tracking-tight mr-8">Downloads</h2>
                    
                    <!-- Utility Buttons -->
                    <div class="flex space-x-4">
                        <button (click)="setFastMode()" 
                                class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm flex items-center gap-2">
                            <i class="fa-solid fa-bolt"></i> Fast Mode
                        </button>
                        <button (click)="setSlowMode()" 
                                class="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm flex items-center gap-2">
                            <i class="fa-solid fa-feather"></i> Slow Mode
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <app-app-card *ngFor="let app of getAppsByCategory(apps, 'download')" [app]="app"></app-app-card>
                </div>
            </section>

            <!-- System Section -->
            <section>
                <div class="flex items-center mb-8">
                    <div class="h-10 w-2 bg-gradient-to-b from-gray-500 to-slate-700 rounded-full mr-4"></div>
                    <h2 class="text-3xl font-bold text-white tracking-tight">System</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <app-app-card *ngFor="let app of getAppsByCategory(apps, 'system')" [app]="app"></app-app-card>
                </div>
            </section>

        </div>
      </div>
    </div>
  `,
    styles: []
})
export class DashboardComponent implements OnInit {

    apps$!: Observable<AppLink[]>;


    constructor(private appsService: AppsService, private qbitService: QBitService) { }

    ngOnInit(): void {
        this.apps$ = this.appsService.getApps();
    }

    getAppsByCategory(apps: AppLink[], category: string): AppLink[] {
        return apps.filter(app => app.category === category);
    }

    setFastMode(): void {
        this.qbitService.setFastMode();
    }

    setSlowMode(): void {
        this.qbitService.setSlowMode();
    }
}
