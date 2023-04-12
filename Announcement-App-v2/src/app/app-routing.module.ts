import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsListComponent } from './pages/announcements-list/announcements-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { AddAnnouncementComponent } from './pages/add-announcement/add-announcement.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: AnnouncementsListComponent },
    { path: 'new', component: AddAnnouncementComponent},
    { path: ':id', component: AddAnnouncementComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
