import {AirportModel} from './AirportModel';
import {CompanyModel} from './CompanyModel';

export interface TicketModel{
  Date: string;
  Time: string;
  Airport: AirportModel;
  Company: CompanyModel;
  Seat: string;
  Luggage: number;
}
