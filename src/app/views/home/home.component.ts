import {Component, OnInit, OnChanges} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from 'src/app/components/test-modal/test-modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: []
})
export class HomeComponent {

    constructor(private modalService: NgbModal) {}

    public onClick() {
      // popup the modal
      const modalRef = this.modalService.open(TestModalComponent);
      modalRef.componentInstance.title = 'Create User';
      modalRef.componentInstance.data = {};

      modalRef.result.then(
        (res) => {
          this.refresh();
        }
      );
    }

    public onClick2(event) {
      // popup the modal
      const modalRef = this.modalService.open(TestModalComponent);
      modalRef.componentInstance.username = event.target.dataset['value'];

      modalRef.result.then(
        (res) => {
          this.refresh();
        }
      );

      console.log(event.target);
      console.log(event.target.dataset.value);
      console.log();
    }

    refresh() {
      alert(' modal was closed');
    }
}
