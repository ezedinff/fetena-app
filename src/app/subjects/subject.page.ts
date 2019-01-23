import {Component} from '@angular/core';
import {Subject} from '../shared/models/Subject';
import {Location} from '@angular/common';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DbService} from '../shared/asyncservices/db.service';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.page.html',
    styleUrls: ['subject.page.scss']
})
export class SubjectPage {
    subjects$;
    constructor(public l: Location,
                public alertController: AlertController,
                private router: Router,
                private dbservice: DbService) {
        this.subjects$ = this.dbservice.getSubjects();
    }
}
