import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-test-modal',
    template: `
        <app-modal title={{title}} #tempComponentModal>
          <app-test
              username="{{username}}"
              (save)="onSave()"
              (cancel)="onCancel()"
          ></app-test>
        </app-modal>
    `,
    styles: []
})
export class TestModalComponent implements OnInit, AfterViewInit {
    title = '';
    username = '';

    @ViewChild(ModalComponent) activeModal: ModalComponent;

    ngOnInit() {
        if (this.username && this.username != null) {
            this.title = 'Edit User';
        } else  {
            this.title = 'Create User';
        }
    }

    ngAfterViewInit() {
        console.log();
    }

    onSave() {
        //
        console.log();
        this.activeModal.activeModal.close('save');
    }

    onCancel() {
        //
        console.log();
        this.activeModal.activeModal.close('cancel');
    }
}
