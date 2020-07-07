import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PurchaseProvider } from '../../purchase.provider';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.sass']
})
export class PurchaseOrderDialogComponent implements OnInit {
  public editMode = true;
  public productsList = [];
  public situationsList = [];

  constructor(public dialogRef: MatDialogRef<PurchaseOrderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private provider: PurchaseProvider) { }

  async ngOnInit() {
    if(!this.data){
      this.editMode = false;
      this.data = {};
    }
    this.productsList = await this.provider.getProducts();
    this.situationsList = await this.provider.getPurchaseOrderSituations();
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
