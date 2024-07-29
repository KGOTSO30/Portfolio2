import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/Project';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;
  activeModal = inject(NgbActiveModal);
  public bsModalRef!: NgbModalRef

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
