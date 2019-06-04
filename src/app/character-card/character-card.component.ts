import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input('character') character: any;

  constructor() { }

  ngOnInit() {
    console.log(this.character)
  }

}
