import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PhonebookService } from '../../services/phonebook.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contactForm !: FormGroup
  editMode: Boolean = false;
  info!: any;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    if (this.data.mode === "edit"){
      this.info = this.data.data
      this.editMode = true;
    }
    this.contactForm = new FormGroup({
      name: new FormControl(this.info ? this.info.name : " ", {
        validators: [Validators.required],
      }),
      phone: new FormControl(this.info ? this.info.phone : " ", {
        validators: [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(5), Validators.maxLength(10)],
      }),
      address: new FormControl(this.info ? this.info.address : " "),
    });
  }

  onEditClick(){
    const payload = this.contactForm.value
    payload["id"] = this.data.data.id
    this.data.onUpdateContact(payload)
    this.dialogRef.close()
  }

  onDeleteClick(){
    const payload = this.contactForm.value
    payload["id"] = this.data.data.id
    this.data.onDeleteContact(payload)
    this.dialogRef.close()
  }

  onCreateClick(){
    const value = this.contactForm.value
    this.data.onCreateContact(value)
    this.dialogRef.close()
  }

  isFormValid() {
    return this.contactForm.valid
  }
}
