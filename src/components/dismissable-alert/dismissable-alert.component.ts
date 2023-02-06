import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abn-dismissable-alert',
  standalone: true,
  imports: [CommonModule, NgbAlert],
  templateUrl: './dismissable-alert.component.html',
  styleUrls: ['./dismissable-alert.component.css'],
})
export class DismissableAlertComponent {
  @Input() alertType = 'primary';
  @Input() topic = '';
  @Input() message!: string;
  alertShow = true;

  close(): void {
    this.alertShow = false;
  }
}
