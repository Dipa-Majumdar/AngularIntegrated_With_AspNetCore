import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent
{

  public newList: ProductInventory[];
  constructor(public http: Http, public _route: ActivatedRoute, public _router: Router) {
    http.get('api/SampleData/GetCustomer').subscribe(result => {
      this.newList = result.json() as ProductInventory[];
    }, error => console.error(error));
  }
  model = new Product(0, '', 0, 0, '');
  onHome() {

     this._router.navigate(['/home']);
  }
  onDelete(mod) {
    console.log("sending from index",mod);
    this._router.navigate(['delete', mod]); 
  }
  onUpdate(mod) {
    
    this._router.navigate(['update',mod]);
  }

}
class ProductInventory {
  ID: number;
  Name: string;
  Price: number;
  Quantity: number;
  Type: string;
}
