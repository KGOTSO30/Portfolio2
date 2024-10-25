import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { NgbAccordionBody, NgbAccordionModule, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ProjectCardComponent,
    NgbModalModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbAccordionBody,
    
    FormsModule
    
],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
