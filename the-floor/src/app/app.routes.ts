import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'lobby',
        pathMatch: 'full'
    },
    {
        path: 'lobby',
        loadComponent: () => import('./pages/lobby/lobby').then((m) => m.Lobby),
    },
    {
        path: 'gameTable',
        loadComponent: () => import('./pages/game-table/game-table').then((m) => m.GameTable)
    }
];
