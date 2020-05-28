import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.sass']
})
export class CustomerServiceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerServiceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
