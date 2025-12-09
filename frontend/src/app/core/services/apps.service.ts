import { Injectable } from '@angular/core';
import { AppLink } from '../models/app-link.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppsService {

    private apps: AppLink[] = [
        {
            name: 'Jellyfin',
            url: 'http://localhost:8096',
            icon: 'fa-solid fa-play',
            description: 'Media Server',
            category: 'media'
        },
        {
            name: 'Jellyseerr',
            url: 'http://localhost:5055',
            icon: 'fa-solid fa-magnifying-glass',
            description: 'Request Manager',
            category: 'media'
        },
        {
            name: 'Sonarr',
            url: 'http://localhost:8989',
            icon: 'fa-solid fa-tv',
            description: 'TV Series Manager',
            category: 'download'
        },
        {
            name: 'Radarr',
            url: 'http://localhost:7878',
            icon: 'fa-solid fa-film',
            description: 'Movie Manager',
            category: 'download'
        },
        {
            name: 'Bazarr',
            url: 'http://localhost:6767',
            icon: 'fa-solid fa-language',
            description: 'Subtitle Manager',
            category: 'download'
        },
        {
            name: 'qBittorrent',
            url: 'http://localhost:8080',
            icon: 'fa-solid fa-magnet',
            description: 'Download Client',
            category: 'download'
        },
        {
            name: 'Prowlarr',
            url: 'http://localhost:9696',
            icon: 'fa-solid fa-rss',
            description: 'Indexer Manager',
            category: 'system'
        },
        {
            name: 'Tdarr',
            url: 'http://localhost:8265',
            icon: 'fa-solid fa-file-video',
            description: 'Transcoding Manager',
            category: 'system'
        },
        {
            name: 'Portainer',
            url: 'http://localhost:9000',
            icon: 'fa-brands fa-docker',
            description: 'Docker Management',
            category: 'system'
        },
        {
            name: 'Dozzle',
            url: 'http://localhost:8888',
            icon: 'fa-solid fa-list-ul',
            description: 'Log Viewer',
            category: 'system'
        }
    ];

    constructor() { }

    getApps(): Observable<AppLink[]> {
        return of(this.apps);
    }
}
