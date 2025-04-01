
import { Router } from '@angular/router';
import { StateService } from 'app/products/data-access/service.state';

import { Component, OnInit, inject, signal } from "@angular/core";
import { Product } from "app/products/data-access/product.model";
import { ProductsService } from "app/products/data-access/products.service";
import { ProductFormComponent } from "app/products/ui/product-form/product-form.component";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton'; 


@Component({
  selector: 'app-my-shop',
  standalone: true,
   imports: [
              DataViewModule,
              CardModule,
              ButtonModule,
              DialogModule, 
              ProductFormComponent,
              TagModule,
              RatingModule,
              ButtonModule,
              CommonModule,
              SelectButtonModule,
              FormsModule],
  templateUrl: './my-shop.component.html',
  styleUrl: './my-shop.component.css'
})
export class MyShopComponent {

   constructor(private stateService: StateService, private router: Router) {}

   product: Product[] = [];

  ngOnInit(): void {
    // S'abonner pour obtenir la liste des produits dans le panier
    this.stateService.currentPaniers$.subscribe(paniers => {
      this.product = paniers;
      console.log(this.products);
    });
  }

  products() {
    return this.product;
  }

  onDelete(item: Product){
    this.removeProductFromCart(item.id);
  }

  // Méthode pour supprimer un produit du panier
  removeProductFromCart(productId: number): void {
    this.stateService.removeProductFromPaniers(productId); // Utilisation du service pour supprimer un produit
  }

}
