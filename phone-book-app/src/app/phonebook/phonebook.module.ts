import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebookRoutingModule } from './phonebook-routing.module';
import { ContactOverviewComponent } from './contact-overview.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    ContactOverviewComponent,
    EditContactComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    PhonebookRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class PhonebookModule { }
