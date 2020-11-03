import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';
import { ReservationNoteComponent } from './components/reservation-note/reservation-note.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {MessageModule} from 'primeng/message';
import {InputMaskModule} from 'primeng/inputmask';
import {MenuModule} from 'primeng/menu';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    PassengerInfoComponent,
    FlightInfoComponent,
    ReservationNoteComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    InputTextModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    KeyFilterModule,
    InputTextareaModule,
    FormsModule,
    DropdownModule,
    MessageModule,
    InputMaskModule,
    MenuModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
