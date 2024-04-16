import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from "@angular/cdk/overlay";

const MaterialComponents = [
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatIconModule,
  MatSortModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatBadgeModule,
  MatStepperModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatCheckboxModule,
  MatTooltipModule,
  OverlayModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[MaterialComponents],
})
export class MaterialModule { }
