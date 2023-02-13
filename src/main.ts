import { bootstrapApplication } from '@angular/platform-browser';
import { BaseComponent } from './components/base/base.component';
import { Routes, provideRouter } from '@angular/router';
import '@angular/localize/init';

import { GalleryComponent } from './components/gallery/gallery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'search', component: SearchResultsComponent },
    { path: 'search/:searchQuery', component: SearchResultsComponent },
];

bootstrapApplication(BaseComponent, {
    providers: [provideRouter(appRoutes)],
});
