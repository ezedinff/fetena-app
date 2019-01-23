import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {QuizPage} from './quiz.page';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {QuestionComponent} from './question/question.component';

@NgModule({
    declarations: [QuizPage, QuestionComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: QuizPage
            }
        ])
    ],
})
export class QuizModule { }
