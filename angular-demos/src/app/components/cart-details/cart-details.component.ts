import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LineItem } from 'src/app/models/line-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: LineItem[];

  constructor(private cs:CartService, private router: Router) { }

  ngOnInit() {
    this.cart = [...this.cs.cart] // shallow copy; do not mutate model
  }


  decrementQuantity(item: LineItem){
    item.quantity--;
    this.cs.addToCart(item.product, item.quantity);

    if(item.quantity === 0){
      const index = this.cart.findIndex(it => it === item);
      // const index = this.cart.findIndex(function(itm){return itm === item}); // without above lamda expression
      if(index !== -1)
      {
        this.cart.splice(index,1);
      }
    }
  }

  incrementQuantity(item: LineItem){
    item.quantity++;
    this.cs.addToCart(item.product, item.quantity);
   
  }

  proceedToCheckout() {
    //programatically navigate to different URl
    this.router.navigate(['/checkout']);
  }

  emptyCart(){
    if(window.confirm('Are you sure? this cannot be reversed!')){
      this.cs.emptyCart();
      this.cart = [];
    }
    
    }
  
    
  
}
