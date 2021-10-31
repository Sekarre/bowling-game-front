import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {GameGuard} from '../../services/GameGuard';
import {NewGameComponent} from '../../components/new-game/new-game.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [GameGuard]},
  { path: 'app-new-game', component: NewGameComponent}
];
