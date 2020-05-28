import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseProvider {
  constructor(private http: HttpClient){
    http.get('http://localhost:3000/hello-world')
    .toPromise()
    .then(x => console.log('result', x))
    .catch(e => console.error(e))
  }

  getPurchaseOrders(){
    return this.purchaseOrders;
  }
  
  getQuotations(){
    return this.quotations;
  }

  getPurchases(){
    return this.purchases;
  }

  getProviders(){
    return this.providers;
  }

  getProducts(){
    return this.products;
  }
    
  private purchaseOrders = [
    { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10, situation: 'entregue' },
    { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10, situation: 'comprado' },
    { id: 3, product: { id: 5, name: 'Cafeteira' }, quantity: 10, situation: 'aberto' },
  ]

  private quotations = [    
    { id: 1, order: { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10 }, provider: { id: 1, name: 'Brastemp' }, price: 4800, situation: 'entregue' },
    { id: 2, order: { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10 }, provider: { id: 2, name: 'Samsung' }, price: 13000, situation: 'recusado' },
    { id: 3, order: { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10 }, provider: { id: 3, name: 'Consul' }, price: 10400, situation: 'comprado' },
    { id: 4, order: { id: 3, product: { id: 5, name: 'Cafeteira' }, quantity: 10 }, provider: { id: 3, name: 'Consul' }, price: null, situation: 'aguardando resposta' },
  ]

  private purchases = [
    { id: 1, quotation: { id: 1, order: { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10 }, provider: { id: 1, name: 'Brastemp' }, price: 4800, situation: 'entregue' }, situation: 'entregue', price: 4800 },
    { id: 2, quotation: { id: 3, order: { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10 }, provider: { id: 3, name: 'Consul' }, price: 10400, situation: 'comprado' }, situation: 'comprado', price: 10400 },
  ]

  private providers = [
    { id: 1, name: 'Brastemp' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Consul' },
  ]

  private products = [
    { id: 1, name: 'Fogão', price: 480 },
    { id: 2, name: 'Microondas', price: 320 },
    { id: 3, name: 'Geladeira', price: 1600 },
    { id: 4, name: 'Máquina de lavar', price: 1040 },
    { id: 5, name: 'Cafeteira', price: 72 },
  ]
}
