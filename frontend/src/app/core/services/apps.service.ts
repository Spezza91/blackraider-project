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
            url: 'http://192.168.1.104:8096',
            icon: 'fa-solid fa-play',
            description: 'Media Server',
            category: 'media',
            color: 'from-purple-600 to-blue-600'
        },
        {
            name: 'Jellyseerr',
            url: 'http://192.168.1.104:5055',
            icon: 'fa-solid fa-magnifying-glass',
            description: 'Request Manager',
            category: 'media',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            name: 'Sonarr',
            url: 'http://192.168.1.104:8989',
            icon: 'fa-solid fa-tv',
            description: 'TV Series Manager',
            category: 'download',
            color: 'from-blue-400 to-cyan-300'
        },
        {
            name: 'Radarr',
            url: 'http://192.168.1.104:7878',
            icon: 'fa-solid fa-film',
            description: 'Movie Manager',
            category: 'download',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            name: 'Bazarr',
            url: 'http://192.168.1.104:6767',
            icon: 'fa-solid fa-language',
            description: 'Subtitle Manager',
            category: 'download',
            color: 'from-orange-400 to-red-500'
        },
        {
            name: 'qBittorrent',
            url: 'http://192.168.1.104:8080',
            icon: 'fa-solid fa-magnet',
            description: 'Download Client',
            category: 'download',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            name: 'Prowlarr',
            url: 'http://192.168.1.104:9696',
            icon: 'fa-solid fa-rss',
            description: 'Indexer Manager',
            category: 'system',
            color: 'from-red-500 to-pink-600'
        },
        {
            name: 'Tdarr',
            url: 'http://192.168.1.104:8265',
            icon: 'fa-solid fa-file-video',
            description: 'Transcoding Manager',
            category: 'system',
            color: 'from-blue-700 to-indigo-800'
        },
        {
            name: 'Portainer',
            url: 'http://192.168.1.104:9000',
            icon: 'fa-brands fa-docker',
            description: 'Docker Management',
            category: 'system',
            color: 'from-blue-500 to-blue-700'
        },
        {
            name: 'Dozzle',
            url: 'http://192.168.1.104:8888',
            icon: 'fa-solid fa-list-ul',
            description: 'Log Viewer',
            category: 'system',
            color: 'from-gray-600 to-gray-800'
        }
    ];

    constructor() { }

    getApps(): Observable<AppLink[]> {
        return of(this.apps);
    }
}
