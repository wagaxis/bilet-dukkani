import { Component, OnInit } from '@angular/core';
import {FightModel} from '../../models/FlightModel';
import {FlightService} from '../../services/flight.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {

  Data: FightModel[];
  transfer: string;

  constructor(private flightService: FlightService) {
    this.Data = flightService.Get();
    console.log(this.Data);
    console.log('this.Data');
  }

  ngOnInit() {
  }

}
