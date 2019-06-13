import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
window['$'] = $;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // commenting because async does not work on array... only on observable... we need to fetch more records for scroll feature
//  products: Observable<Product[]>;
 

products: Product[] = [];
 pageNum: number = 1

//we are depended on router module to pass by_what and by_val etc... so use ActivatedRoute in constructor
  constructor(private ps: ProductsService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {

    //scrol feature

  const w = $(window);
  const d = $(document);

  //this keyword will not have scope within window onscroll as this is a window function and not a angular one
  const self = this;
  //register an event handler for the windows scroll event
    window.onscroll = function() {
        const windowHeight = w.height();
        const windowTopPosition = w.scrollTop();
        const documentHeight = d.height();

        if((windowHeight + windowTopPosition) >= (documentHeight - 50 ))
        {
          self.loadData();
            
        }
      }
      this.loadData();
    }
  
    //use activatedRoute.params instead of activatedRoute.snapshot.params
    //if you want to do something on change of route parameters
    loadData(){
    this.activatedRoute.params.subscribe(({by_what, by_val}) => {
      if(by_what){
        this.ps.getProductsBy(by_what,by_val, this.pageNum++).subscribe(data => this.products.push(...data));
      } else {
        this.ps.getProducts(this.pageNum++).subscribe(data => this.products.push(...data));
      }
    });
  }

  

}
