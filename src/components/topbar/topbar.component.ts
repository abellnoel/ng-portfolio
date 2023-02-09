import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { NavRoute } from './nav-route';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
    selector: 'abn-topbar',
    standalone: true,
    imports: [CommonModule, NgbNav, RouterLink, RouterTestingModule],
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
    routes: NavRoute[] = [
        { name: 'Home', routerLink: '/home', active: true },
        { name: 'Gallery', routerLink: '/gallery', active: false },
    ];

    getClass(route: NavRoute): string {
        return route.active ? 'nav-link active' : 'nav-link';
    }

    getAriaCurrent(route: NavRoute): string {
        return route.active ? 'page' : 'false';
    }

    resetActive(): void {
        for (const route of this.routes) {
            route.active = false;
        }
    }

    onNavigate(route: NavRoute): void {
        this.resetActive();
        route.active = true;
    }
}
