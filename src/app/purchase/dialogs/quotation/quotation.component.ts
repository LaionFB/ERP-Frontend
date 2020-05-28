import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.sass']
})
export class QuotationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuotationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
