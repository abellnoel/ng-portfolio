import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { Routes, provideRouter } from '@angular/router';
import '@angular/localize/init';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
});
