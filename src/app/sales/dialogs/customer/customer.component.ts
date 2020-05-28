import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
