import {Component} from '@angular/core';
import {Question} from '../shared/models/question';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.page.html',
    styleUrls: ['./quiz.page.scss']
})
export class QuizPage {
    currentQuestion;
    currentQuestionAnswered: boolean;
    questions: Question[] = [
        {
            id: 'fddasfasfafdagerq343',
            question: [
                {
                    type: 'paragraph',
                    value: 'this the first paragraph'
                }
            ],
            option_a: [
                {
                    type: 'paragraph',
                    value: 'paragraph for option a'
                }
            ],
            option_b: [
                {
                    type: 'paragraph',
                    value: 'paragraph for option b'
                }
            ],
            option_c: [
                {
                    type: 'paragraph',
                    value: 'paragraph for option c'
                }
            ],
            option_d: [
                {
                    type: 'paragraph',
                    value: 'pragraph for option d'
                }
            ],
            grade: '10',
            answer: {
                index: '0',
                verified: true
            },
            origin: {
                from: 'National Exam',
                year: 1990
            }
        }
    ];
    getAnswer(ans) {
        this.currentQuestionAnswered = true;
    }
    back() {}
}
