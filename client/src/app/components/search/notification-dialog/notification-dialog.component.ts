import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationData } from 'src/app/shared/models/notification-data.model';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NotificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NotificationData) { }
}
