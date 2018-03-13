import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  //selector: 'delete',
  templateUrl: './delete.component.html'
})

export class DeleteComponent implements OnInit {
  e: number = 0;
  newList: ProductInventory[];

  constructor(public http: Http, public _route: ActivatedRoute, public _router: Router) {}
  
  model = new Product(0,'', 0, 0, '');
  ngOnInit(): void {
    console.log("reached delete page");
    this.e = this._route.snapshot.params['data'];
    console.log("at delete page", this.e);
    this.http.get('api/SampleData/DeleteProduct1/' + this.e).subscribe(result => {
      console.log(JSON.parse((JSON.parse(JSON.stringify(result)))._body));// as ProductInventory[];
    }, error => console.error(error));
    console.log("sending", this.e);
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
