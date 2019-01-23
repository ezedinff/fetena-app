import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DbService} from '../shared/asyncservices/db.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    constructor(public alertController: AlertController,
                private router: Router,
                private dbservice: DbService) {
    }

    openDialog(grade: string) {
        return this.alertController.create({
            header: 'SOCIAL OR NATURAL SCIENCE?',
            inputs: [
                {
                    name: 'Social Science',
                    type: 'radio',
                    label: 'Social Science',
                    value: 'social',
                    checked: true
                },
                {
                    name: 'Natural Science',
                    type: 'radio',
                    label: 'Natural Science',
                    value: 'natural',
                    checked: false
                }
            ],
            buttons: [
                {
                    text: 'Select',
                    handler: (val) => {
                       // this.scienceType = val.toUpperCase();
                       // this.saveUserSettings();
                        this.handleUserChoice(grade);
                    }
                }
            ]
        }).then(alert => {
            alert.present();
        });
    }
    handleUserChoice(grade, scienceType?) {
        if (scienceType) {
            this.dbservice.updateUser('grade', grade).then(() => {
                this.dbservice.updateUser('scienceType', scienceType).then(() => {
                    this.router.navigate(['subjects', grade]);
                });
            });
        }
        this.dbservice.updateUser('grade', grade).then(() => {
            this.router.navigate(['subjects', grade]);
        });
        this.dbservice.getSubjects();
    }
}
