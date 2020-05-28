import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private routes = [
    { href: '/delivery', icon: 'local_shipping', text: 'Logística' },
    { href: '/sales', icon: 'trending_up', text: 'Vendas' },
    { href: '/inventory', icon: 'all_inbox', text: 'Estoque' },
    { href: '/purchase', icon: 'add_shopping_cart', text: 'Compras' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
