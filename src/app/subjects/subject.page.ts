import {Component} from '@angular/core';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.page.html',
    styleUrls: ['subject.page.scss']
})
export class SubjectPage {
    subjects = [
        'Chemistry',
        'Biology',
        'Mathematics'
    ];
}
