import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbAccordionBody, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Moshoeshoe Kgotso - Resume');
  }


  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();

  }
}
