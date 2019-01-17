import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Question} from '../../shared/models/question';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['question.component.scss']
})
export class QuestionComponent {
    @Input()
    question: Question;
    @Input()
    index: number;
    @Output() answer = new EventEmitter();
    @ViewChild('optionA') optionA: ElementRef;
    @ViewChild('optionB') optionB: ElementRef;
    @ViewChild('optionC') optionC: ElementRef;
    @ViewChild('optionD') optionD: ElementRef;
    chosenAnswer;

    chooseAnswer(ans: number, comp: HTMLElement) {
        if (this.chosenAnswer === undefined) {
            this.chosenAnswer = ans;
            this.markTheCorrectAnswer();
            if (Number(this.question.answer.index) === ans) {
                comp.classList.add('correct-answer');
            } else {
                comp.classList.add('incorrect-answer');
            }
            this.answer.emit(ans);
        }
    }
    markTheCorrectAnswer() {
        if (Number(this.question.answer.index) === 0) {
            this.optionA.nativeElement.classList.add('correct-answer');
        } else if (Number(this.question.answer.index) === 1) {
            this.optionB.nativeElement.classList.add('correct-answer');
        } else if (Number(this.question.answer.index) === 2) {
            this.optionC.nativeElement.classList.add('correct-answer');
        } else if (Number(this.question.answer.index) === 3) {
            this.optionD.nativeElement.classList.add('correct-answer');
        }
    }
}
