import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StorePageComponent } from "./pages/store-page/store-page.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, StorePageComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "clothes-store";
}
