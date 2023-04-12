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

  announcements: Announcement[] = new Array<Announcement>();

  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Service was called.");
  }

  get(id: number) {
    return this.announcements[id];
  }

  getId(announcement: Announcement) {
    return this.announcements.indexOf(announcement);
  }

  getAnnouncements(): Observable<Announcement[]> {
    console.log("Service announcements: ");
    return this.httpClient.get<Announcement[]>(this.baseURL, this.httpOptions);
  }

  deleteAnnouncement(id: string) {
    console.log("Announcement ", id, " is deleted.");
    return this.httpClient.delete(this.baseURL + "/" + id, this.httpOptions);
  }
}
