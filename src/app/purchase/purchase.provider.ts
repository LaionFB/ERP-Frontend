import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseProvider {
  private baseUrl = '';
  constructor(private http: HttpClient){
    this.baseUrl = environment.production ? '/api/purchase' : 'http://localhost:3030/api/purchase';
  }

  getPurchaseOrders(){
    return this.http.get(this.baseUrl + '/purchase-order')
    .toPromise() as Promise<any[]>;
  }
  
  getQuotations(){
    return this.http.get(this.baseUrl + '/quotation')
    .toPromise() as Promise<any[]>;
  }

  getPurchases(){
    return this.http.get(this.baseUrl + '/purchase')
    .toPromise() as Promise<any[]>;
  }

  getProviders(){
    return this.http.get(this.baseUrl + '/provider')
    .toPromise() as Promise<any[]>;
  }

  getProducts(){
    return this.http.get(this.baseUrl + '/product')
    .toPromise() as Promise<any[]>;
  }

  getPurchaseOrder(id){
    return this.http.get(this.baseUrl + '/purchase-order/' + id)
    .toPromise() as Promise<any>;
  }
  
  getQuotation(id){
    return this.http.get(this.baseUrl + '/quotation/' + id)
    .toPromise() as Promise<any>;
  }

  getPurchase(id){
    return this.http.get(this.baseUrl + '/purchase/' + id)
    .toPromise() as Promise<any>;
  }

  getProvider(id){
    return this.http.get(this.baseUrl + '/provider/' + id)
    .toPromise() as Promise<any>;
  }

  getProduct(id){
    return this.http.get(this.baseUrl + '/product/' + id)
    .toPromise() as Promise<any>;
  }

  insertPurchaseOrder(data){
    return this.http.post(this.baseUrl + '/purchase-order', data)
    .toPromise() as Promise<any>;
  }
  
  insertQuotation(data){
    return this.http.post(this.baseUrl + '/quotation', data)
    .toPromise() as Promise<any>;
  }

  insertPurchase(data){
    return this.http.post(this.baseUrl + '/purchase', data)
    .toPromise() as Promise<any>;
  }

  insertProvider(data){
    return this.http.post(this.baseUrl + '/provider', data)
    .toPromise() as Promise<any>;
  }

  insertProduct(data){
    return this.http.post(this.baseUrl + '/product', data)
    .toPromise() as Promise<any>;
  }

  updatePurchaseOrder(data){
    return this.http.put(this.baseUrl + '/purchase-order', data)
    .toPromise() as Promise<any>;
  }
  
  updateQuotation(data){
    return this.http.put(this.baseUrl + '/quotation', data)
    .toPromise() as Promise<any>;
  }

  updatePurchase(data){
    return this.http.put(this.baseUrl + '/purchase', data)
    .toPromise() as Promise<any>;
  }

  updateProvider(data){
    return this.http.put(this.baseUrl + '/provider', data)
    .toPromise() as Promise<any>;
  }

  updateProduct(data){
    return this.http.put(this.baseUrl + '/product', data)
    .toPromise() as Promise<any>;
  }
  
  deletePurchaseOrder(data){
    return this.http.delete(this.baseUrl + '/purchase-order/' + data.id)
    .toPromise() as Promise<any>;
  }
  
  deleteQuotation(data){
    return this.http.delete(this.baseUrl + '/quotation/' + data.id)
    .toPromise() as Promise<any>;
  }

  deletePurchase(data){
    return this.http.delete(this.baseUrl + '/purchase/' + data.id)
    .toPromise() as Promise<any>;
  }

  deleteProvider(data){
    return this.http.delete(this.baseUrl + '/provider/' + data.id)
    .toPromise() as Promise<any>;
  }

  deleteProduct(data){
    return this.http.delete(this.baseUrl + '/product/' + data.id)
    .toPromise() as Promise<any>;
  }
    
  getPurchaseOrderSituations(){
    return this.http.get(this.baseUrl + '/situation/purchase-order')
    .toPromise() as Promise<any[]>;
  }

  getQuotationSituations(){
    return this.http.get(this.baseUrl + '/situation/quotation')
    .toPromise() as Promise<any[]>;
  }

  getPurchaseSituations(){
    return this.http.get(this.baseUrl + '/situation/purchase')
    .toPromise() as Promise<any[]>;
  }
  //private purchaseOrders = [
  //  { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10, situation: 'entregue' },
  //  { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10, situation: 'comprado' },
  //  { id: 3, product: { id: 5, name: 'Cafeteira' }, quantity: 10, situation: 'aberto' },
  //]
//
  //private quotations = [    
  //  { id: 1, order: { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10 }, provider: { id: 1, name: 'Brastemp' }, price: 4800, situation: 'entregue' },
  //  { id: 2, order: { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10 }, provider: { id: 2, name: 'Samsung' }, price: 13000, situation: 'recusado' },
  //  { id: 3, order: { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10 }, provider: { id: 3, name: 'Consul' }, price: 10400, situation: 'comprado' },
  //  { id: 4, order: { id: 3, product: { id: 5, name: 'Cafeteira' }, quantity: 10 }, provider: { id: 3, name: 'Consul' }, price: null, situation: 'aguardando resposta' },
  //]
//
  //private purchases = [
  //  { id: 1, quotation: { id: 1, order: { id: 1, product: { id: 1, name: 'Fogão' }, quantity: 10 }, provider: { id: 1, name: 'Brastemp' }, price: 4800, situation: 'entregue' }, situation: 'entregue', price: 4800 },
  //  { id: 2, quotation: { id: 3, order: { id: 2, product: { id: 4, name: 'Máquina de lavar' }, quantity: 10 }, provider: { id: 3, name: 'Consul' }, price: 10400, situation: 'comprado' }, situation: 'comprado', price: 10400 },
  //]
//
  //private providers = [
  //  { id: 1, name: 'Brastemp' },
  //  { id: 2, name: 'Samsung' },
  //  { id: 3, name: 'Consul' },
  //]
//
  //private products = [
  //  { id: 1, name: 'Fogão', price: 480 },
  //  { id: 2, name: 'Microondas', price: 320 },
  //  { id: 3, name: 'Geladeira', price: 1600 },
  //  { id: 4, name: 'Máquina de lavar', price: 1040 },
  //  { id: 5, name: 'Cafeteira', price: 72 },
  //]
}
