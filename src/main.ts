import { bootstrapApplication } from '@angular/platform-browser';
import { BaseComponent } from './components/base/base.component';
import { Routes, provideRouter } from '@angular/router';
import '@angular/localize/init';

import { GalleryComponent } from './components/gallery/gallery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    { path: 'gallery', component: GalleryComponent },
];

bootstrapApplication(BaseComponent, {
    providers: [provideRouter(appRoutes)],
});
