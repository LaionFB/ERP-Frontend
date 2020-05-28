import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public currentRoute = 'Home';
  public routes = [
    { href: '/home', icon: 'home', text: 'Home' },
    { href: '/delivery', icon: 'local_shipping', text: 'Logística' },
    { href: '/sales', icon: 'trending_up', text: 'Vendas' },
    { href: '/inventory', icon: 'all_inbox', text: 'Estoque' },
    { href: '/purchase', icon: 'add_shopping_cart', text: 'Compras' },
  ]

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if(location.path())
        this.currentRoute = this.routes.find(x => x.href == location.path())['text'];
    });
  }
}
