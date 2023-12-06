import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mahasiswa',
    pathMatch: 'full',
  },
  {
    path: 'mahasiswa',
    loadComponent: () => import('./mahasiswa/mahasiswa.page').then( m => m.MahasiswaPage)
  },
];