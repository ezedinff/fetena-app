import {Component, OnInit} from '@angular/core';
import {DbService} from '../shared/asyncservices/db.service';
import {Question} from '../shared/models/question';
import {Observable, of} from 'rxjs';
import {Subject} from '../shared/models/Subject';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.page.html',
    styleUrls: ['./quiz.page.scss']
})
export class QuizPage implements OnInit {
    currentQuestion$: Observable<Question>;
    currentQuestionAnswered: boolean;
    questions;
    currentIndex = 0;
    constructor(private dbservice: DbService) {
    }

    getAnswer(ans) {
        this.currentQuestionAnswered = true;

    }
    back() {}
    nextOrSkip() {
        if (this.questions.length > this.currentIndex ) {
            this.currentIndex++;
        }
        this.currentQuestion$ = of(this.questions[this.currentIndex]);
        this.currentQuestionAnswered = false;
    }

    ngOnInit(): void {
        this.dbservice.getSubjectsDb().then( async subjects => {
            if ( subjects) {
                this.questions = await subjects['values']['subjects']
                    .find((subject: Subject) => subject.id === 'amharic').questions
                    .filter((question: Question) => question.grade === '10');
                if (this.questions.length > 0 ) {
                    this.currentQuestion$ = of(this.questions[this.currentIndex]);
                }
            }
        });
    }
}
