import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QBitService {
    private apiUrl = 'http://192.168.1.104:8080/api/v2/transfer';

    constructor(private http: HttpClient) { }

    setDownloadLimit(limit: number): Observable<any> {
        const formData = new FormData();
        formData.append('limit', limit.toString());
        return this.http.post(`${this.apiUrl}/setDownloadLimit`, formData, { responseType: 'text' });
    }

    setUploadLimit(limit: number): Observable<any> {
        const formData = new FormData();
        formData.append('limit', limit.toString());
        return this.http.post(`${this.apiUrl}/setUploadLimit`, formData, { responseType: 'text' });
    }

    setSlowMode(): void {
        // 1 MiB/s download, 500 KiB/s upload
        this.setDownloadLimit(1048576).subscribe();
        this.setUploadLimit(512000).subscribe();
    }

    setFastMode(): void {
        // Unlimited
        this.setDownloadLimit(0).subscribe();
        this.setUploadLimit(0).subscribe();
    }
}
