import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PurchaseProvider } from '../../purchase.provider';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.sass']
})
export class QuotationDialogComponent implements OnInit {
  public editMode = true;
  public providersList = [];
  public purchaseOrdersList = [];
  public situationsList = [];

  constructor(public dialogRef: MatDialogRef<QuotationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private provider: PurchaseProvider) { }

  async ngOnInit() {
    if(!this.data){
      this.editMode = false;
      this.data = {};
    }
    this.purchaseOrdersList = await this.provider.getPurchaseOrders();
    this.providersList = await this.provider.getProviders();
    this.situationsList = await this.provider.getQuotationSituations();
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
