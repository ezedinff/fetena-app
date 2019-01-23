import {Injectable} from '@angular/core';
import {InitService} from '../../init.service';
import {Subject} from '../models/Subject';
import {of} from 'rxjs';
import {Question} from '../models/question';

@Injectable({providedIn: 'root'})
export class DbService {
    constructor(private initService: InitService) {}
    getDefaultUser() {
        return this.initService.userdb.get('default_user');
    }
    getSubjectsDb() {
        return this.initService.subjectdb.get('subjects');
    }
    updateUser(key, value) {
        return this.getDefaultUser().then(userdoc => {
            userdoc[key] = value;
        });
    }
    getSubjects() {
        const s: Subject[] = [];
        this.getSubjectsDb().then(subjects => {
            if (subjects) {
                subjects['values']['subjects'].map((subject: Subject) => {
                    s.push({
                        id: subject.id,
                        title: subject.title,
                        grades: subject.grades,
                        scienceType: subject.scienceType,
                        photo_path: subject.photo_path,
                    });
                });
            }
        });
        return of(s);
    }
    async getQuestions(subject_name, grade) {
        let s = [];
        this.getSubjectsDb().then( async subjects => {
            if ( subjects) {
               s = await subjects['values']['subjects']
                    .find((subject: Subject) => subject.id === subject_name).questions
                    .filter((question: Question) => question.grade === grade);
            }
        });
        return await s;
    }
}
