import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit{
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
      this.announcementService.getAnnouncements().subscribe(response => {
        console.log(response);
      });
  }

}
