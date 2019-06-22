import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterDatabaseComponent } from './components/character-database/character-database.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterProfileComponent,
    PageNotFoundComponent,
    CharacterDatabaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
