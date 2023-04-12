import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsListComponent } from './pages/announcements-list/announcements-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAnnouncementComponent } from './pages/add-announcement/add-announcement.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnouncementComponent } from './announcement/announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsListComponent,
    MainLayoutComponent,
    AddAnnouncementComponent,
    AnnouncementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
