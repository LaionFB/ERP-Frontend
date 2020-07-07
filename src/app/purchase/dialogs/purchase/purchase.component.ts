import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PurchaseProvider } from '../../purchase.provider';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.sass']
})
export class PurchaseDialogComponent implements OnInit {
  public editMode = true;
  public quotationsList = [];
  public situationsList = [];

  constructor(public dialogRef: MatDialogRef<PurchaseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private provider: PurchaseProvider) { }

  async ngOnInit() {
    if(!this.data){
      this.editMode = false;
      this.data = {};
    }
    this.quotationsList = await this.provider.getQuotations();
    this.situationsList = await this.provider.getPurchaseSituations();
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
