import { Observable } from 'rxjs';
import { Episode } from './../models/episode.model';
import { Location } from './../models/location.model';
import { Character } from './../models/character.model';
import { RepositoryService } from './../services/repository.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private subscription = new Subscription();
  public characters!: Character[];
  title = 'rick-and-morty';

  constructor(private repositoryService: RepositoryService<Character[] & Location[] & Episode[]>) {}
  ngOnInit(): void {
  this.subscription.add(this.getData("character"))
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getData(route:string) {
    this.repositoryService.getData(route).subscribe(data => this.characters = data)
  }
}
