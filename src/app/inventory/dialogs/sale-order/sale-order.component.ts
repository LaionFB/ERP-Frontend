import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: ['./sale-order.component.sass']
})
export class SaleOrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SaleOrderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
