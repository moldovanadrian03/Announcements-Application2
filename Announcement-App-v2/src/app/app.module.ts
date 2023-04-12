import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsListComponent } from './pages/announcements-list/announcements-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAnnouncementComponent } from './pages/add-announcement/add-announcement.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ByAuthorPipe } from './by-author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsListComponent,
    MainLayoutComponent,
    AddAnnouncementComponent,
    AnnouncementComponent,
    ByAuthorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatSelectModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
