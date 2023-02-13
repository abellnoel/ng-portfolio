import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { TopbarRoute } from './topbar-route';
import { SearchbarComponent } from '../searchbar/searchbar.component';

//TODO: Solve for initial redirect to a defined TopbarRoute
//TODO: Remove active route highlighting after search
@Component({
    selector: 'abn-topbar',
    standalone: true,
    imports: [CommonModule, NgbNav, RouterLink, SearchbarComponent],
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
    @Input() routes: TopbarRoute[] = [];
    @Output() colorThemeChanged = new EventEmitter<string>();

    activeRoute = '';
    colorTheme = 'dark';

    constructor(private location: Location) {}

    ngOnInit() {
        this.activeRoute = this.location.path();
    }

    isActiveRoute(route: TopbarRoute) {
        return this.activeRoute === route.path;
    }

    handleNavigation(route: TopbarRoute) {
        this.activeRoute = route.path;
    }

    toggleColorTheme() {
        this.colorTheme = this.colorTheme === 'dark' ? 'light' : 'dark';
        this.colorThemeChanged.emit(this.colorTheme);
    }
}
