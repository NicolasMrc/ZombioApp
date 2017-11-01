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

  constructor(private http: HttpClient) {}

  create(){
    let soldiers = new Array<Soldier>();
    soldiers.push(new Soldier(1,5));
    soldiers.push(new Soldier(2,5));
    soldiers.push(new Soldier(3,5));
    soldiers.push(new Soldier(4,5));
    soldiers.push(new Soldier(5,5));

    let ordersToRun = new Map<number, Order>();
    ordersToRun.set(1, new Order(1, null, null, null));
    ordersToRun.set(2, new Order(null, null, null, 1));
    ordersToRun.set(3, new Order(1, null, null, 1));
    ordersToRun.set(4, new Order(null, null, null, 3));

    /*var json = {
      "waveToRun" : 30,
      "soldiers" : soldiers,
      "waveOrders"  : ordersToRun.get(1)
    };*/

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

    const req = this.http.post('/api/items/add', json);
    req.subscribe();


  }
}
