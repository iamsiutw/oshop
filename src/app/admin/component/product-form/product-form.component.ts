import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../shared/service/product.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).valueChanges().pipe(
      take(1)
    ).subscribe(p => this.product = p);
  }
  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['admin/products']);
  }
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    this.productService.delete(this.id);
    this.router.navigate(['admin/products']);
  }

  ngOnInit() {
  }

}
