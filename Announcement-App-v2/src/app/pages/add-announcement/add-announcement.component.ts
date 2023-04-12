import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/announcement';
import { Category } from 'src/app/category';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit{
  announcement: Announcement[];

  ann: Announcement;
  annId: number;
  new: boolean;

  id: string;
  title: string;
  author: string;
  imageUrl: string;
  message: string;
  selectedCategory: Category;

  categories: Category[] = [
    {
      id: '1',
      name: 'Course'
    },
    {
      id: '2',
      name: 'Laboratory'
    },
    {
      id: '3',
      name: 'General'
    }];

    constructor(private announcementService: AnnouncementService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        //first we find out if we are creating a new ann or is an existing one
        this.activatedRoute.params.subscribe(params => {
          if(params['id']) {
            this.ann = this.announcementService.get(params['id']);
            this.annId = params['id'];
            this.new = false;
          } else {
            this.new = true;
          }
          console.log("note id is: ", this.annId);
          console.log("note new: ", this.new);
        });
    }

  //   addAnnouncement():void {
  //     let announcement:Announcement={
  //     title:this.title,
  //     author:this.author,
  //     imageUrl:this.imageUrl,
  //     message:this.message,
  //     Category:this.selectedCategory,
  //     id:this.id
  //     }
  //     this.announcementService.addAnnouncementToServer(announcement);
  //     console.log(announcement);
  //     this.router.navigateByUrl("''");
  // }

}
function Params(error: any): void {
  throw new Error('Function not implemented.');
}

