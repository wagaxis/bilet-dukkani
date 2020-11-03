import { Injectable } from '@angular/core';

import staticFlight from '../../assets/jsons/flight.json';
import {FightModel} from '../models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  FlightData: FightModel[];

  constructor() {
  }

  Get(){
    this.FlightData = staticFlight[Math.floor(Math.random() * Math.floor(3))];
    return this.FlightData;
  }
}
