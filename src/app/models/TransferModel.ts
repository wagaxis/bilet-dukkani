import {TicketModel} from './TicketModel';

export interface TransferModel{
  Departure: TicketModel;
  Landing: TicketModel;
  FlightTime: string;
  WaitTime: null | string;
}
