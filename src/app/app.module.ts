import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterDatabaseComponent } from './character-database/character-database.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterProfileComponent,
    PageNotFoundComponent,
    CharacterDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
