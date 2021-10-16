import { Character } from './../../models/character.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  @Input() characters!: Character[];
  @Output() typeData = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
