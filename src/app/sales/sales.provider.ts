import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesProvider {
  constructor(private http: HttpClient){
  }

  getSaleRequests(){
    return this.saleRequests;
  }
  
  getQuotations(){
    return this.quotations;
  }
  
  getCustomers(){
    return this.customers;
  }

  getCustomerServices(){
    return this.customerServices;
  }

  getProducts(){
    return this.products;
  }

  private saleRequests = [
    { id: 1, customer: { name: 'Adriano', address: 'rua dos Bobos nº 0, SBC' }, situation: 'pago', products: [ { id: 1, name: 'Fogão', qtd: 2 } ]},
    { id: 2, customer: { name: 'José', address: 'estrada dos Alvarengas nº 1000, SBC' }, situation: 'esperando mercadorias', products: [ { id: 1, name: 'Fogão', qtd: 3 } ]},
    { id: 3, customer: { name: 'Loja ABC', address: 'av. Kennedy nº 300, SBC' }, situation: 'pronto para entregar', products: [ { id: 5, name: 'Cafeteira', qtd: 2 } ]},
    { id: 4, customer: { name: 'Renato', address: 'av. Jurubatuba nº 540, SBC' }, situation: 'entregue', products: [ { id: 5, name: 'Cafeteira', qtd: 1 }, { id: 2, name: 'Microondas', qtd: 1 } ]},
    { id: 5, customer: { name: 'Juliana', address: 'estrada dos Casa nº 200, SBC' }, situation: 'aguardando pagamento', products: [ { id: 2, name: 'Microondas', qtd: 1 } ]}
  ]

  private quotations = [
    { id: 1, customer: { name: 'Adriano', address: 'rua dos Bobos nº 0, SBC' }, situation: 'feito', products: [ { id: 1, name: 'Fogão', qtd: 2 } ], value: 1200 },
    { id: 2, customer: { name: 'Juliana', address: 'estrada dos Casa nº 200, SBC' }, situation: 'pendente', products: [ { id: 1, name: 'Fogão', qtd: 3 } ], value: null },
  ]

  private customers = [
    { id: 1, name: 'Adriano', address: 'rua dos Bobos nº 0, SBC', type: 'PF' },
    { id: 2, name: 'José', address: 'estrada dos Alvarengas nº 1000, SBC', type: 'PF' },
    { id: 3, name: 'Loja ABC', address: 'av. Kennedy nº 300, SBC', type: 'PJ' },
    { id: 4, name: 'Renato', address: 'av. Jurubatuba nº 540, SBC', type: 'PF' },
    { id: 5, name: 'Juliana', address: 'estrada dos Casa nº 200, SBC', type: 'PF' },
  ]

  private customerServices = [
    { id: 1, customer: { name: 'José', address: 'estrada dos Alvarengas nº 1000, SBC' }, status: 'aberto', messages: [{ from: 'cliente', text: 'meu pedido não chegou' }] },
    { id: 2, customer: { name: 'Loja ABC', address: 'av. Kennedy nº 300, SBC' },  status: 'respondido', messages: [{ from: 'cliente', text: 'o produto está com defeito' }, { from: 'atendente', text: 'vamos trocar' }] },
    { id: 3, customer: { name: 'Renato', address: 'av. Jurubatuba nº 540, SBC' },  status: 'fechado', messages: [{ from: 'cliente', text: 'teste' }] },
  ]  

  private products = [
    { id: 1, name: 'Fogão', price: 600 },
    { id: 2, name: 'Microondas', price: 400 },
    { id: 3, name: 'Geladeira', price: 2000 },
    { id: 4, name: 'Máquina de lavar', price: 1300 },
    { id: 5, name: 'Cafeteira', price: 90 },
  ]
}
