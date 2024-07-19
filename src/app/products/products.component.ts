import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: 109, color: 'Blue' , available: 'Available' , image: '/assets/product_images/1.jpg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: 120, color: 'Black' , available: 'Available' , image: '/assets/product_images/2.jpg'}, 
    {id:3, name: 'APPLE iPhone 12', price: 1500, color: 'Black', available: 'Available', image: '/assets/product_images/3.jpg'}, 
    {id:4, name: 'LG Automatic Washing Machine', price: 2299, color: 'White', available: 'Not Available' , image: '/assets/product_images/4.jpg' }, 
    {id:5, name: 'LG Refrigerator Ultra Cooling', price: '1765', color: 'Gray', available: 'Not Available', image: '/assets/product_images/5.jpg'},
    {id:6, name: 'Dell Inspiron One 27 Ryzen', price: '2815', color: 'Dark Gray' , available: 'Available', image: '/assets/product_images/6.jpg'}
  ]

  getTotalProducts(){
    return this.products.length;
  }
  getAvailableProducts(){
    return this.products.filter(p => p.available == 'Available').length;
  }
  getNotAvailableProducts(){
    return this.products.filter(p => p.available == 'Not Available').length;
  }
  productsCountRadioButton: string = 'All';

  onFilterChange(data: string){
    this.productsCountRadioButton = data;
    // console.log(this.productsCountRadioButton);
  }

  searchTextValue: string = '';

  onSearch(data: string){
    this.searchTextValue = data;
    // console.log(this.searchTextValue);
  }
  

}
