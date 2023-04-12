import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {
  announcements: Announcement[];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(){
    //test the service
    this.announcementService.serviceCall();

    this.announcementService.getAnnouncements().subscribe(announcements => {
      console.log("Announcements list: ", announcements);
      this.announcements = announcements;
    });
  }
}
