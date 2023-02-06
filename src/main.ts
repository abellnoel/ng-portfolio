import { bootstrapApplication } from '@angular/platform-browser';
import { BaseComponent } from './components/base/base.component';
import { Routes, provideRouter } from '@angular/router';
import '@angular/localize/init';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BaseComponent },
];

bootstrapApplication(BaseComponent, {
  providers: [provideRouter(appRoutes)],
});
