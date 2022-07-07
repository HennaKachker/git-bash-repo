import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerviewComponent } from './components/customerview/customerview.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CessationviewComponent } from './components/cessationview/cessationview.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { FeedbackComponent } from './components/feedback/feedback.component';




@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomerviewComponent,
    HeaderComponent,
    CessationviewComponent,
    ChecklistComponent,
    FeedbackComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   


    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'customer_view',
        component:CustomerviewComponent
      },
      {
        path:'header',
        component:HeaderComponent
       },
       {
        path:'cessation',
        component:CessationviewComponent
       },
       {
        path:'checklist',
        component:ChecklistComponent
       },
       {
        path:'feedback',
        component:FeedbackComponent
       }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
