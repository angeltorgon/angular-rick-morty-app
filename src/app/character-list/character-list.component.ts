import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input('characters') characters: any;

  constructor() { }

  ngOnInit() {
  }

}
