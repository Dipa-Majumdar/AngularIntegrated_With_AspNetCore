import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor(public _route: ActivatedRoute, public _router: Router) { }
 
  onClickView() {
    this._router.navigate(['/index']);
  }
  onClickAdd() {
    this._router.navigate(['/add']);
  }
  

}



