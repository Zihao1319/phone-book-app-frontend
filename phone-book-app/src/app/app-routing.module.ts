import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactOverviewComponent } from './phonebook/contact-overview.component';

const routes: Routes = [
  {
    path : "**",
    loadChildren: () => import('./phonebook/phonebook.module').then(m => m.PhonebookModule)
  },
  // {
  //   path: "list",
  //   component: ContactOverviewComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
