import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
