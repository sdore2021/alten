import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ProductListComponent } from "./features/product-list/product-list.component";
import { MyShopComponent } from "./features/product-list/my-shop/my-shop.component";
import { ContactComponent } from "./features/contact/contact.component";

export const PRODUCTS_ROUTES: Routes = [
	{
		path: "list",
		component: ProductListComponent,
	},
	{
		path: "shop",
		component: MyShopComponent,
	},
	{
		path: "contact",
		component: ContactComponent,
	},
	{ path: "**", redirectTo: "list" },
];
