import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterDatabaseComponent } from './components/character-database/character-database.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"character-database", component: CharacterDatabaseComponent, pathMatch:"full"},
  {
    path:"profile/:id", 
    component: CharacterProfileComponent,
  },
  {path:"**", component: PageNotFoundComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
