import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, distinct, distinctUntilChanged, Observable } from 'rxjs';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { PhonebookService } from './services/phonebook.service';

@Component({
  selector: 'app-contact-overview',
  templateUrl: './contact-overview.component.html',
  styleUrls: ['./contact-overview.component.scss']
})
export class ContactOverviewComponent implements OnInit {

  searchPromptSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  searchPromptSubject$ : Observable<any[]> = this.searchPromptSubject.asObservable();

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'name',
    'phone',
    'address',
    'actions',
  ];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private phonebookSvc: PhonebookService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.refreshData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  refreshData(){
    this.phonebookSvc.fetchContacts().subscribe((data) => {
      this.dataSource.data = data
    })
  }

  openEditDialog(contact: any) {
    this.dialog.open(EditContactComponent, {
      // width: '400px',
      // height: '500px',
      data: {
        data: contact,
        mode: "edit",
        onUpdateContact: (payload: any) => this.updateContact(payload),
        onDeleteContact: (payload: any) => this.deleteContact(payload),
      },

    });
  }

  editContact(contact: any){
    this.openEditDialog(contact);
  }

  updateContact(payload: any){
    console.log(payload)
    const sub$ = this.phonebookSvc.updateContact(payload).subscribe((res) => {
      console.log(res)
      this.refreshData();
      sub$.unsubscribe();
      })
  }

  deleteContact(payload: any){
    console.log(payload)
    const sub$ = this.phonebookSvc.deleteContact(payload).subscribe((res) => {
      console.log(res)
      this.refreshData();
      sub$.unsubscribe();
      })
  }

  createContact(payload: any){
    console.log(payload)
    const sub$ = this.phonebookSvc.createContact(payload).subscribe((res) => {
      console.log(res)
      this.refreshData();
      sub$.unsubscribe();
      })
  }

  openCreateDialog(){
    this.dialog.open(EditContactComponent, {
      // width: '400px',
      // height: '500px',
      data: {
        data: "",
        mode: "create",
        onCreateContact: (payload: any) => this.createContact(payload),
      },
    });
  }

  search(){
    const sub$ = this.searchPromptSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((prompt) => {
      this.phonebookSvc.searchTerm(prompt).subscribe((res) => {
        this.dataSource.data = res
      })
    })
  }

  onSearchTermEmitted(event: any){
    this.searchPromptSubject.next(event)
    this.search();
  }
}
