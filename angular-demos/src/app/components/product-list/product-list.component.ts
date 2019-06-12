import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Observable<Product[]>;

//we are depended on router module to pass by_what and by_val etc... so use ActivatedRoute in constructor
  constructor(private ps: ProductsService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
//get the route parameters
// this.activatedRoute.snapshot.params  -> this is synchronous
// this.activatedRoute.params  -> this is asynchronous via observable


// const params = this.activatedRoute.snapshot.params;
// console.log('params is',params);

// if(params['by_what']){
//   //by_what may be brand or category
//   const { by_what,by_val } = params; // equal to const by_what = params.by_what and const by_val = params.by_val (this is called object destructring)
//   this.products = this.ps.getProductsBy(by_what,by_val);
// }
// else
// {
//    //this must now be conditional
//    this.products = this.ps.getProducts();
// }
  
    //use activatedRoute.params instead of activatedRoute.snapshot.params
    //if you want to do something on change of route parameters
    this.activatedRoute.params.subscribe(({by_what, by_val}) => {
      if(by_what){
        this.products = this.ps.getProductsBy(by_what,by_val);
      } else {
        this.products = this.ps.getProducts();
      }
    });

  }

}
