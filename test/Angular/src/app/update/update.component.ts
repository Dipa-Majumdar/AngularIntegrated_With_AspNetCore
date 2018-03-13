import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'update',
  templateUrl: './update.component.html'
})

export class UpdateComponent implements OnInit{
  e: number = 0;
  prod: any;
  prodnew= new Product(0, '', 0, 0, '');

  newList: ProductInventory[];
  constructor(public http: Http, public _route: ActivatedRoute, public _router: Router) {}


  async ngOnInit() {
    this.e = this._route.snapshot.params['data'];
    await this.http.get('api/SampleData/UpdateProduct/' + this.e).subscribe(result => {
      this.prod = result.json() as ProductInventory;
     // console.log(result.text());
      console.log(JSON.parse((JSON.parse(JSON.stringify(result)))._body));
    }, error => console.error(error));
  }
  onAddClick() {



    this.prodnew.Name = this.prod.name;
    this.prodnew.Price = this.prod.price;
    this.prodnew.Quantity = this.prod.quantity;
    this.prodnew.Type = this.prod.type;

 

    return this.http.post('api/SampleData/AddCustomer', this.prodnew).subscribe(result => {
      this.newList = result.json() as ProductInventory[];
    }, error => console.error(error));

    
  }
  onViewClick() {
    
    this._router.navigate(['/index']);
  }
 
}
class ProductInventory {
 
  Name: string;
  Price: string;
  Quantity: string;
  Type: string;
}
