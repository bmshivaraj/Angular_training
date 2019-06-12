import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() // this is to say that this component receives data from parent components html for ex: <app-product-card [product]="p"> in product-list.component.html
  product: Product;

  quantity: number =1;
  inCart: boolean = false;

  constructor(private cs: CartService) { }

  ngOnInit() {
    // this.product = {

    //   "id": 9,
    //   "category": "vegitable",
    //   "name": "Capsicum",
    //   "brand": "Malnad",
    //   "description": "Capsicum Hybrid Green",
    //   "quantity_per_unit": "250 GM, approx. 2 to 3 nos",
    //   "unit_price": 13,
    //   "picture": "http://kvinod.com/images/products/10000068_17-fresho-capsicum-hybrid-green.jpg",
    //   "discount": 5
    // }

    if(this.cs.isProductInCart(this.product.id)) {
      this.inCart = true;
      this.quantity = this.cs.getQuantityForProduct(this.product.id);
    }
  }

  addToCart() {
    this.inCart = true;
    this.cs.addToCart(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
    this.cs.addToCart(this.product, this.quantity);
  }

  decrementQuantity()
  {
    this.quantity--;
    this.cs.addToCart(this.product, this.quantity);
    if(this.quantity === 0)
    {
      this.inCart = false;
      this.quantity = 1;
    }
  }

}
