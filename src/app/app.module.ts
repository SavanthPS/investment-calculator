import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.modules";

@NgModule({
    declarations: [AppComponent,HeaderComponent,InvestmentResultsComponent],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})
export class AppModule { }