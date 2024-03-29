import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TimeagoModule } from 'ngx-timeago';
import { InputComponent } from './input/input.component';
import { PostComponent } from './post/post.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';

@NgModule({
  declarations: [WrapperComponent, InputComponent, PostComponent, NotificationDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    TimeagoModule.forChild()
  ], 
  entryComponents: [
    NotificationDialogComponent
  ],
})
export class SearchModule { }
