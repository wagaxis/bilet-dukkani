import {TicketModel} from './TicketModel';
import {TransferModel} from './TransferModel';

export interface FightModel{
  Departure: TicketModel;
  Landing: TicketModel;
  Transfer: TransferModel[];
  FlightTime: string;
  Returning: boolean;
  Open: boolean;
}
