import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent
{

  public newList: ProductInventory[];
  constructor(http: Http, public _route: ActivatedRoute, public _router: Router) {
    http.get('api/SampleData/GetCustomer').subscribe(result => {
      this.newList = result.json() as ProductInventory[];
    }, error => console.error(error));
  }
  
}
class ProductInventory {
  Name: string;
  Price: number;
  Quantity: number;
  Type: string;
}
