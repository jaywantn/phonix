import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './modules/home/page/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./modules/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./modules/faq/faq.module').then(m => m.FaqModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
