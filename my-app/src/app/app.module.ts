import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { appConfig } from "./app.config";
import { BrowserModule } from "@angular/platform-browser";
import { GoogleMapsModule } from '@angular/google-maps';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        MatIconModule,
        FormsModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        GoogleMapsModule,
        MatFormFieldModule, 
        MatSelectModule
    ],
    bootstrap: [AppComponent],
    providers: appConfig.providers,
})
export class AppModule {}