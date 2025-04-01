import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root', // Assurez-vous que ce service est accessible globalement
})
export class StateService {
  // Utilisation de BehaviorSubject pour maintenir un état initial et permettre la mise à jour
  private listVariableSource = new BehaviorSubject<number>(0); // Remplacez `number` par le type de votre variable
  currentListVariable$ = this.listVariableSource.asObservable(); // Observable pour accéder à la variable

  // Utilisation de BehaviorSubject pour stocker la liste de produits (paniers)
  private paniersSource = new BehaviorSubject<Product[]>([]); // Initialisation avec un tableau vide
  currentPaniers$ = this.paniersSource.asObservable(); // Observable pour accéder à la variable paniers

  constructor() {}

  // Méthode pour ajouter un produit à la liste
  addProductToPaniers(product: Product): void {
    const currentPaniers = this.paniersSource.value;
    this.paniersSource.next([...currentPaniers, product]); // Ajoute le produit à la liste
  }

  // Méthode pour supprimer un produit de la liste par son id
  removeProductFromPaniers(productId: number): void {
    const currentPaniers = this.paniersSource.value;
    this.paniersSource.next(currentPaniers.filter(product => product.id !== productId));
  }

  // Méthode pour mettre à jour la liste entière de paniers
  updatePaniers(paniers: Product[]): void {
    this.paniersSource.next(paniers); // Met à jour la liste entière de paniers
  }

  // Méthode pour mettre à jour la variable
  updateListVariable(value: number): void {
    this.listVariableSource.next(value);
  }
  
}
