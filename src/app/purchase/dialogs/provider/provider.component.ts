import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.sass']
})
export class ProviderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProviderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if(!this.data){
      this.data = {};
    }
  }

  save(){
    this.dialogRef.close(this.data);
  }
}
