import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { DismissableAlertComponent } from '../dismissable-alert/dismissable-alert.component';

@Component({
  selector: 'abn-base',
  standalone: true,
  imports: [CommonModule, TopbarComponent, DismissableAlertComponent],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  alertType = 'warning';
  topic = 'Notice: ';
  message =
    'This is an experimental application. It do suck. Thank you for your understanding!';
}
