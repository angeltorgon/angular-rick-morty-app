import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-database',
  templateUrl: './character-database.component.html',
  styleUrls: ['./character-database.component.css']
})
export class CharacterDatabaseComponent implements OnInit {

  characters: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character/')
    .subscribe((res: any) => {
      this.characters = res.results;
    })
  }

}
