import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryProvider {
  constructor(private http: HttpClient){
  }

  getSaleOrders(){
    return this.saleOrders;
  }
  
  getProducts(){
    return this.products;
  }
  
  getPurchaseOrders(){
    return this.purchaseOrders;
  }

  private saleOrders = [
    { id: 1, customer: 'Adriano', situation: 'mercadorias separadas', products: [ { id: 1, name: 'Fogão', qtd: 2 } ]},
    { id: 2, customer: 'José', situation: 'aberto', products: [ { id: 1, name: 'Fogão', qtd: 3 } ]},
    { id: 3, customer: 'Loja ABC', situation: 'mercadorias separadas', products: [ { id: 5, name: 'Cafeteira', qtd: 2 } ]},
    { id: 4, customer: 'Renato', situation: 'entregue', products: [ { id: 5, name: 'Cafeteira', qtd: 1 }, { id: 2, name: 'Microondas', qtd: 1 } ]}
  ]

  private products = [
    { id: 1, name: 'Fogão', quantity: 10 },
    { id: 2, name: 'Microondas', quantity: 10 },
    { id: 3, name: 'Geladeira', quantity: 10 },
    { id: 4, name: 'Máquina de lavar', quantity: 0 },
    { id: 5, name: 'Cafeteira', quantity: 0 },
  ]

  private purchaseOrders = [
    { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10, situation: 'entregue' },
    { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10, situation: 'aguardando entrega' },
    { id: 3, product: { id: 5, name: 'Cafeteira' }, quantity: 10, situation: 'aberto' },
  ]
}
