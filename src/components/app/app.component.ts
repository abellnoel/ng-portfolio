import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, NgbAlert],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  alertType = 'warning';
  alertShow = true;

  close(): void {
    console.log('alert closed!');
    this.alertShow = false;
  }
}
