import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit {

  id: string;
  character: any;

  constructor( private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://rickandmortyapi.com/api/character/${this.id}`)
    .subscribe((res: any) => {
      this.character = res
      console.log(this.character)
    })
  }

}
