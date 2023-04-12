import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  baseURL = "https://newsapi20221108120432.azurewebsites.net/api/Announcements";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Service was called.");
  }

  getAnnouncements(): Observable<Announcement[]> {
    console.log("Service announcements: ");
    return this.httpClient.get<Announcement[]>(this.baseURL, this.httpOptions);
  }

}
