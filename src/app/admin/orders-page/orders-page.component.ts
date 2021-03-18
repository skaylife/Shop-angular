import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders = []
  pSub: Subscription
  rSub: Subscription


  constructor(
    private orderServ: OrderService
  ) { }

  ngOnInit(): void {
    this.pSub = this.orderServ.getAll().subscribe( orders => {
      this.orders = orders
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove (id) {
    this.rSub = this.orderServ.remove(id).subscribe( () => {
      this.orders = this.orders.filter( product => product.id !==id) // В массив с products предается нужный id и заново массив products пересобирается 
    })
  }

}
