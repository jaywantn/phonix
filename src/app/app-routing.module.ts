import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), data: {title: 'Home'} },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule), data: {title: 'About'} },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule), data: {title: 'Project'} },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule), data: {title: 'Conatct'} },
  { path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule), data: {title: 'FAQ'} },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule), data: {title: 'News'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
