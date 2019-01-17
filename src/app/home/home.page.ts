import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    constructor(public alertController: AlertController) {
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
                    }
                }
            ]
        }).then(alert => {
            alert.present();
        });
    }
}
