import {NgModule} from '@angular/core';
import {SubjectPage} from './subject.page';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SubjectPage],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: SubjectPage
            }
        ])
    ]
})
export class SubjectModule {
}
