import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PouchdbService }   from './services/pouchdb.service';
import { ElearningService }   from './services/elearning.service';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FocuscourseComponent } from './dashboard/focuscourse.component';
import { CoursecardComponent } from './dashboard/coursecard.component';
import { RightpanelComponent } from './dashboard/rightpanel.component';
import { LearningComponent }   from './learningenv/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FocuscourseComponent,
    CoursecardComponent,
    RightpanelComponent,
    LearningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [
    ElearningService,
    PouchdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
	modulename:string = "peejay";
}
