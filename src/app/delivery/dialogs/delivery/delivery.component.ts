import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.sass']
})
export class DeliveryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeliveryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
