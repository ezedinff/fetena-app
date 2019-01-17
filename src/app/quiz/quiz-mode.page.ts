import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-quiz-mode',
    templateUrl: './quiz-mode.page.html',
    styles: ['.sub-image{position: relative; top: -15%; left: 35%; }']
})
export class QuizModePage {
    mode: boolean;
    subject: string;
    year: string;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            this.subject = params['subject'];
            this.year = params['year'];
        });
    }
    start() {
        this.router.navigateByUrl(`subject/${this.subject}/year/${this.year}/exam/${this.mode}`);
    }
}
