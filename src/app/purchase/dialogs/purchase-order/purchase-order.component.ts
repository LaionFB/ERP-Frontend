import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.sass']
})
export class PurchaseOrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PurchaseOrderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
