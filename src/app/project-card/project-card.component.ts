import { Component, inject, Input } from '@angular/core';
import { Project } from '../_models/Project';

import { NgbActiveModal, NgbCarouselModule, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
//import { ProjectModalComponent } from '../project-modal/project-modal.component';


// Here im renaming the ProjectModalComponent and passing it through the Modal as NgbdModalContent
@Component({
	selector: 'app-project-modal',
	standalone: true,
  imports: [NgbCarouselModule],
	 templateUrl: '../project-modal/project-modal.component.html',
  styleUrl: '../project-modal/project-modal.component.css'
})
export class NgbdModalContent {
	public activeModal = inject(NgbActiveModal);
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @Input()  project = {} as Project;


 
}
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  private modalService = inject(NgbModal);

  OpenProjectModal() {
		const modalRef = this.modalService.open(NgbdModalContent,{size: 'lg'});
		modalRef.componentInstance.project=this.project;
	}
}
