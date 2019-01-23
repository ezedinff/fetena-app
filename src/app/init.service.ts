import {Injectable} from '@angular/core';
import * as PouchDB from 'pouchdb/dist/pouchdb';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Location} from '@angular/common';

@Injectable()
export class InitService {
    private _userdb;
    private _subjectdb;

    constructor(private httpclient: HttpClient, private location: Location) {}

   public load() {
        this.initSubjectDb();
        this.initUserDb();
           return new Promise((resolve => {
               const headerOptions = new HttpHeaders({
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'DataType': 'application/json'
               });
               this.httpclient.get('/assets/questions.json').subscribe(questions => {
                   this._userdb.get('default_user').then(doc => {

                      resolve(true);
                   }).catch(err => {
                       if (err.status === 404) {
                           this._subjectdb.put({
                               _id: 'subjects',
                               values: questions,
                               createdAt: new Date().getTime(),
                               updatedAt: new Date().getTime()
                           });
                           this._userdb.put({
                               _id: 'default_user',
                               uid: new Date().getMilliseconds(),
                               createdAt: new Date().getTime()
                           });
                       }
                   });
               });
           }));
    }

    initUserDb() {
       this._userdb = new PouchDB('user', { skip_setup: true });
    }
    initSubjectDb() {
       this._subjectdb = new PouchDB('subjects', { skip_setup: true });
    }

    get userdb() {
        return this._userdb;
    }

    get subjectdb() {
        return this._subjectdb;
    }
}