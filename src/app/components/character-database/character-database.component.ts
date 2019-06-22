import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-database',
  templateUrl: './character-database.component.html',
  styleUrls: ['./character-database.component.css']
})
export class CharacterDatabaseComponent implements OnInit {

  characters: any = [];
  currentPage: number = 1

  constructor(private http: HttpClient) { }

  fetchCharacters() {
    this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.currentPage}`)
    .subscribe((res: any) => {
      this.characters = res.results;
    })
  }

  nextPage() {
    this.currentPage += 1;
    this.fetchCharacters();
  }
  
  prevPage() {
    this.currentPage -= 1;
    this.fetchCharacters();

  }

  ngOnInit() {
    this.fetchCharacters();
  }

}
