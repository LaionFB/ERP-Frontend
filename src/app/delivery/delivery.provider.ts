import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryProvider {
  constructor(private http: HttpClient){
  }

  getDeliveries(){
    return this.deliveries;
  }
  getDrivers() {
    return this.drivers;
  }
  getProducts() {
    return this.products;
  }
  
  private deliveries = [
    { id: 1, customer: 'Adriano', address:'rua dos Bobos nº 0, SBC', situation: 'aberto', driver: null, products: [ { id: 1, name: 'Fogão', qtd: 2 } ]},
    { id: 2, customer: 'José', address:'estrada dos Alvarengas nº 1000, SBC', situation: 'esperando mercadorias', driver: { id: 2, name: 'Juçara', maxWeight: 5000, maxVolume: 5000 }, products: [ { id: 1, name: 'Fogão', qtd: 3 } ]},
    { id: 3, customer: 'Loja ABC', address:'av. Kennedy nº 300, SBC', situation: 'pronto para entregar', driver: { id: 3, name: 'Antônio', maxWeight: 1300, maxVolume: 4000 }, products: [ { id: 5, name: 'Cafeteira', qtd: 2 } ]},
    { id: 4, customer: 'Renato', address:'av. Jurubatuba nº 540, SBC', situation: 'entregue', driver: { id: 4, name: 'Cleiton', maxWeight: 650, maxVolume: 3000 }, products: [ { id: 5, name: 'Cafeteira', qtd: 1 }, { id: 2, name: 'Microondas', qtd: 1 } ]}
  ]

  private drivers = [
    { id: 1, name: 'Bino', maxWeight: 10000, maxVolume: 8000 },
    { id: 2, name: 'Juçara', maxWeight: 5000, maxVolume: 5000 },
    { id: 3, name: 'Antônio', maxWeight: 1300, maxVolume: 4000 },
    { id: 4, name: 'Cleiton', maxWeight: 650, maxVolume: 3000 },
    { id: 5, name: 'Agnaldo', maxWeight: 2000, maxVolume: 4000 },
  ]

  private products = [
    { id: 1, name: 'Fogão', weight: 40, volume: 270 },
    { id: 2, name: 'Microondas', weight: 10, volume: 40 },
    { id: 3, name: 'Geladeira', weight: 100, volume: 900 },
    { id: 4, name: 'Máquina de lavar', weight: 35, volume: 300 },
    { id: 5, name: 'Cafeteira', weight: 0.5, volume: 2 },
  ]
}
