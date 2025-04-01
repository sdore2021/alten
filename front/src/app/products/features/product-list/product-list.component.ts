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
import { StateService } from "app/products/data-access/service.state";


const emptyProduct: Product = {
  id: 0,
  code: "",
  name: "",
  description: "",
  image: "",
  category: "",
  price: 0,
  quantity: 0,
  internalReference: "",
  shellId: 0,
  inventoryStatus: "INSTOCK",
  rating: 0,
  createdAt: 0,
  updatedAt: 0,
};

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
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
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  public readonly products = this.productsService.products;

  public isDialogVisible = false;
  public isCreation = false;
  public readonly editedProduct = signal<Product>(emptyProduct);


  paniers: Product[] = [];
  

  constructor(private stateService: StateService) {}



  ngOnInit() {
    this.productsService.get().subscribe();
     // S'abonner pour obtenir la liste des produits dans le panier
     this.stateService.currentPaniers$.subscribe(paniers => {
      this.paniers = paniers;
      console.log(this.products);
    });
  }

  public addPaniers(product: Product){
    //this.paniers.push(product);
    this.addProductToCart(product);
    this.updateVariable();
    this.onDelete(product);
    this.updatePaniers();
    console.log(this.paniers);
  }

    // Méthode pour ajouter un produit au panier (par exemple)
    addProductToCart(product: Product): void {
      this.stateService.addProductToPaniers(product); // Utilisation du service pour ajouter le produit
    }

    updatePaniers(): void {
      this.stateService.updatePaniers(this.paniers)
    }

  updateVariable() {
    this.stateService.updateListVariable(this.paniers.length);
  }

  public onCreate() {
    this.isCreation = true;
    this.isDialogVisible = true;
    this.editedProduct.set(emptyProduct);
  }

  public onUpdate(product: Product) {
    this.isCreation = false;
    this.isDialogVisible = true;
    this.editedProduct.set(product);
  }

  public onDelete(product: Product) {
    this.productsService.delete(product.id).subscribe();
  }

  public onSave(product: Product) {
    if (this.isCreation) {
      this.productsService.create(product).subscribe();
    } else {
      this.productsService.update(product).subscribe();
    }
    this.closeDialog();
  }

  public onCancel() {
    this.closeDialog();
  }

  private closeDialog() {
    this.isDialogVisible = false;
  }

  /**
   * '"success" | "danger" | "warn" | null'
   * @param product 
   * @returns 
   */

  getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    }
}
