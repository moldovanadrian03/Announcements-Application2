import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Announcement } from 'src/app/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {
  // @Input() id: string;
  // @Output() getAnn2 = new EventEmitter<boolean>();

  announcements: Announcement[];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(){
    //test the service
    this.announcementService.serviceCall();
    //get the announcements from the service
    this.announcementService.getAnnouncements().subscribe(announcements => {
      console.log("Announcements list: ", announcements);
      this.announcements = announcements;
    });
  }

  // deleteAnnouncement(id: string) {
  //   console.log("id: ", id);
  //   this.announcementService.deleteAnnouncement(id).subscribe(announcement => {
  //     console.log(announcement);
  //     this.getAnn2.emit(true);
  //   })
  // }
}
