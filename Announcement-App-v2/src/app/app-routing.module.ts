import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsListComponent } from './pages/announcements-list/announcements-list.component';

const routes: Routes = [
  { path: '', component: AnnouncementsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
