import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryMockData } from "../services/server.service";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { appConfig } from "./app.config";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        // InMemoryWebApiModule.forRoot(InMemoryMockData),
    ],
    bootstrap: [AppComponent],
    providers: appConfig.providers,
})
export class AppModule {}