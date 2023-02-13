import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { TopbarRoute } from 'src/components/topbar/topbar-route';
import { DismissableAlertComponent } from '../dismissable-alert/dismissable-alert.component';

@Component({
    selector: 'abn-base',
    standalone: true,
    imports: [
        CommonModule,
        TopbarComponent,
        DismissableAlertComponent,
        RouterOutlet,
    ],
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css'],
})
export class BaseComponent {
    alertType = 'warning';
    topic = 'Notice: ';
    message =
        'This is an experimental application. It do suck. Thank you for your understanding!';

    routes: TopbarRoute[] = [
        { name: 'Home', path: '/home' },
        { name: 'Gallery', path: '/gallery' },
    ];
}
