import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Announcement } from 'src/app/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      //ENTRY ANIMATION
      transition('void => *', [ //void transition to any state
        //INITIAL STATE
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,

        }),
        //we first want to animate the spacing (which includes height and margin)
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(100)
      ]),
      transition('* => void',[ //any state transition to void
        //first scale up
        animate(50, style({
          transform: 'scale(1.05)'
        })),
        //then scale down to normal size while beginning to scale down
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        //scale down and fade out completely
        animate('120ms ease-out', style({
          transform: 'scale(0.65)',
          opacity: 0
        })),
        //then animate the spacing (which includes the height margin and padding )
        animate('150ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          'margin-bottom': 0,
          display: 'block',
        }))
      ])
    ]),
    trigger('listAnim', [
      transition('* => *', [ //any state to any state
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [ //delay between each animation
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class AnnouncementsListComponent implements OnInit {

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
  updateAnnList(isUpdated: boolean) {
    if(isUpdated) {
      this.announcementService.getAnnouncements().subscribe(announcements => {
        console.log("Announcements list: ", announcements);
        this.announcements = announcements;
      })
    }
  }

}
