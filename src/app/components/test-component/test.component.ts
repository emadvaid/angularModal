import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styles: []
})
export class TestComponent implements OnInit {
    @Input() username: String;
    @Output() save: EventEmitter<any> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    isNew = true;

    constructor(private activateRoute: ActivatedRoute) {}

    ngOnInit() {
        if (this.username && this.username != null) {
            this.isNew = false;
        }
    }

    onCreate() {
        //
        this.save.emit('created');
    }

    onSave() {
        //
        this.save.emit('saved');
    }

    onCancel() {
        //
        this.save.emit('canceled');
    }
}
