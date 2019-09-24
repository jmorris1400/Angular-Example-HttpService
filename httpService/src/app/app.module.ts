import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameService } from './gameService';
import { GamelistComponent } from './gamelist/gamelist.component';

@NgModule({
  declarations: [
    AppComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
