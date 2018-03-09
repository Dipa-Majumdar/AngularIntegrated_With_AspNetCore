import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  newList: ProductInventory[];
 
  constructor(public http: Http, public _route: ActivatedRoute, public _router: Router) {
    
  }

  model = new Product('', 0, 0, '');


  onAddClick() {

    console.log("Got the Data");
    console.log(this.model);
    return this.http.post('api/SampleData/AddCustomer', this.model).subscribe(result => {
      this.newList = result.json() as ProductInventory[];
    }, error => console.error(error));


  }
  onViewClick()
  {
    this._router.navigate(['/index']);
  }
}
class ProductInventory {
  Name: string;
  Price: string;
  Quantity: string;
  Type: string;
}
