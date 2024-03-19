import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/containers/login-page/login-page.component';
import { BoardPageComponent } from './kanban/containers/board-page/board-page.component';
import { RegisterPageComponent } from './auth/containers/register-page/register-page.component';
import { HomePageComponent } from './kanban/containers/home-page/home-page.component';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { AuthGuard } from './auth.guard'; // Importez AuthGuard

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'board', component: BoardPageComponent, canActivate: [AuthGuard] }, // Protégez la route avec AuthGuard
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] }, // Protégez la route avec AuthGuard
  { path: '**', component: NotFoundPageComponent },
];
