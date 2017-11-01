import { Component } from '@angular/core';
import {Soldier} from "./entities/Soldier";
import {Order} from "./entities/Order";
import {HttpClient} from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZOMBIO';
  text;
  gameId : number = 1;

  constructor(private http: HttpClient) {}

  create(){

    var json = '{ ' +
      '"wavesToR un": 30, ' +
      '"waveOrders": ' +
      '{ ' +
      '"1": { "supportRecruitment": 1 }, ' +
      '"2": { "wallImproving": 1}, ' +
      '"3": { "wallImproving": 1, "supportRecruitment": 1},' +
      '"4": { "wallImproving": 3} ' +
      '}, ' +
      '"soldiers": ' +
      '[' +
      '{ "id": 1, "level": 5},' +
      '{"id": 2,"level": 5},' +
      '{"id": 3,"level": 5},' +
      '{"id": 4,"level": 5},' +
      '{"id": 5,"level": 5}' +
      ']}';

    this.text = json;

    const req = this.http.post('localhost:8888/games', json);
    req.subscribe();


  }

  getGame(){
    const req = this.http.get('localhost:8888/games/' + this.gameId);
    req.subscribe();
  }
}
