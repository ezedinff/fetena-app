import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Question} from '../../shared/models/question';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['question.component.scss']
})
export class QuestionComponent implements OnChanges {
    @Input()
    question: Question;
    @Input()
    index: number;
    @Output() answer = new EventEmitter();
    @ViewChild('optionA') optionA: ElementRef;
    @ViewChild('optionB') optionB: ElementRef;
    @ViewChild('optionC') optionC: ElementRef;
    @ViewChild('optionD') optionD: ElementRef;
    chosenAnswer = new BehaviorSubject(null);
    chosenAnswer$ = this.chosenAnswer.asObservable();
    chooseAnswer(ans: number, comp: HTMLElement) {
        this.chosenAnswer.next({
            answer: ans,
            component: comp
        });
        this.markTheCorrectAnswer();
        if (Number(this.question.answer.index) !== ans) {
            comp.classList.add('incorrect-answer');
        }
        this.answer.emit(ans);
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

    ngOnChanges(changes: SimpleChanges): void {
        this.chosenAnswer$.subscribe(answer => {
            if (answer) {
                this.removeclass();
                if (answer['answer'] !== Number(this.question.answer.index)) {
                    answer['component'].classList.remove('incorrect-answer');
                }
            }
        });
    }

    removeclass() {
        if (Number(this.question.answer.index) === 0) {
            this.optionA.nativeElement.classList.remove('correct-answer');
        } else if (Number(this.question.answer.index) === 1) {
            this.optionB.nativeElement.classList.remove('correct-answer');
        } else if (Number(this.question.answer.index) === 2) {
            this.optionC.nativeElement.classList.remove('correct-answer');
        } else if (Number(this.question.answer.index) === 3) {
            this.optionD.nativeElement.classList.remove('correct-answer');
        }
    }
}
