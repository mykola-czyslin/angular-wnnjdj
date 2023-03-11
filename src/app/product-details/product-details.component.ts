import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    const routeParamMap =  this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParamMap.get('productId'));

    this.product = products.find(p => p.id === productIdFromRoute);
  }

  addToCart() {
    if(this.product) {
      this.cartService.addToCart(this.product);
      window.alert(`Product "${this.product.name}" has been added to the cart`);
    } else {
      window.alert('No product is selected');
    }
  }

}
