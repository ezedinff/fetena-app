import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {QuizPage} from './quiz.page';
import {QuizModePage} from './quiz-mode.page';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {QuestionComponent} from './question/question.component';

@NgModule({
    declarations: [QuizPage, QuizModePage, QuestionComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: QuizModePage
            },
            {
                path: 'exam/:mode',
                component: QuizPage
            }
        ])
    ],
})
export class QuizModule { }
