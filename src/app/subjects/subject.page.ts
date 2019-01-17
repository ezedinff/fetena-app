import {Component} from '@angular/core';
import {Subject} from '../shared/models/Subject';
import {Location} from '@angular/common';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.page.html',
    styleUrls: ['subject.page.scss']
})
export class SubjectPage {
    subjects: Subject[] = [
        {
            id: 'Biology',
            title: 'Biology',
            grades: ['8', '10', '12'],
            scienceType: ['natural'],
            photo_path: '/assets/images/biology.png'
        },
        {
            id: 'Chemistry',
            title: 'Chemistry',
            grades: ['8', '10', '12'],
            scienceType: ['natural'],
            photo_path: '/assets/images/chemistry.png'
        },
        {
            id: 'English',
            title: 'English',
            grades: ['8', '10', '12'],
            scienceType: ['natural', 'social'],
            photo_path: '/assets/images/english.png'
        },
        {
            id: 'Civics',
            title: 'Civics',
            grades: ['8', '10', '12'],
            scienceType: ['natural', 'social'],
            photo_path: '/assets/images/civics.png'
        },
        {
            id: 'Amharic',
            title: 'Amharic',
            grades: ['8', '10', '12'],
            scienceType: ['natural', 'social'],
            photo_path: '/assets/images/amharic.png'
        },
    ];

    constructor(private location: Location,
                public alertController: AlertController,
                private router: Router) {
    }
    back() {
        this.location.back();
    }
    goToQuizPage(subject_id) {
        return this.alertController.create({
            header: 'Select year?',
            inputs: [
                {
                    name: '1995',
                    type: 'radio',
                    label: '1995',
                    value: '1995',
                    checked: true
                },
                {
                    name: '2005',
                    type: 'radio',
                    label: '2005',
                    value: '2005',
                    checked: false
                }
            ],
            buttons: [
                {
                    text: 'Select',
                    handler: (val) => {
                        console.log(`subject/${subject_id}/year/${val}`);
                        this.router.navigateByUrl(`subject/${subject_id}/year/${val}`);
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
