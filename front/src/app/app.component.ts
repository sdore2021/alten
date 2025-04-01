import {
  Component,
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { BadgeModule } from 'primeng/badge'; 
import { StateService } from "./products/data-access/service.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent,BadgeModule],
})
export class AppComponent {
  title = "ALTEN SHOP";

  countShop: number = 0; // La variable partagée

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit() {
    // S'abonner pour recevoir les mises à jour
    /*this.stateService.currentListVariable$.subscribe((value) => {
      this.countShop = value;
    });*/

    this.stateService.currentPaniers$.subscribe(paniers => {
      this.countShop = paniers.length;
    });
  }

  showCart(){
    this.router.navigate(['/products/shop']);
  }
}
