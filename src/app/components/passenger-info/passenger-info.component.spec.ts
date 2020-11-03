import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInfoComponent } from './passenger-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('PassengerInfoComponent', () => {
  let component: PassengerInfoComponent;
  let fixture: ComponentFixture<PassengerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerInfoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Form boşken çalıştı', () => {
    expect(component.passengerForm.valid).toBeFalsy();
   });

  it('Cinsiyet kontrolü', () => {
    const Gender = component.passengerForm.controls['Gender'];
    expect(Gender.valid).toBeFalsy();

    Gender.setValue("");
    expect(Gender.hasError('required')).toBeTruthy();
  });

  it('İsim input kontrolü', () => {
    const Name = component.passengerForm.controls['Name'];
    expect(Name.valid).toBeFalsy();

    Name.setValue("");
    expect(Name.hasError('required')).toBeTruthy();
  });

  it('Soyad kontrolü', () => {
    const Surname = component.passengerForm.controls['Surname'];
    expect(Surname.valid).toBeFalsy();

    Surname.setValue("");
    expect(Surname.hasError('required')).toBeTruthy();
  });

  it('Doğum günü kontrolü', () => {
    const BirthDate = component.passengerForm.controls['BirthDate'];
    expect(BirthDate.valid).toBeFalsy();

    BirthDate.setValue("");
    expect(BirthDate.hasError('required')).toBeTruthy();
  });

  it('Tc no kontrolü', () => {
    const TCNo = component.passengerForm.controls['TCNo'];
    expect(TCNo.valid).toBeFalsy();

    TCNo.setValue("");
    expect(TCNo.hasError('required')).toBeTruthy();
  });

  it('Ülke kodu kontrolü', () => {
    const PhoneArea = component.passengerForm.controls['PhoneArea'];
    expect(PhoneArea.valid).toBeFalsy();

    PhoneArea.setValue("");
    expect(PhoneArea.hasError('required')).toBeTruthy();
  });

  it('Telefon kontrolü', () => {
    const Phone = component.passengerForm.controls['Phone'];
    expect(Phone.valid).toBeFalsy();

    Phone.setValue("");
    expect(Phone.hasError('required')).toBeTruthy();
  });

  it('E-posta kontrolü', () => {
    const Email = component.passengerForm.controls['Email'];
    expect(Email.valid).toBeFalsy();

    Email.setValue("");
    expect(Email.hasError('required')).toBeTruthy();
  });

  it('Pasaport numarası kontrolü', () => {
    const PassportNumber = component.passengerForm.controls['PassportNumber'];
    expect(PassportNumber.valid).toBeFalsy();

    PassportNumber.setValue("");
    expect(PassportNumber.hasError('required')).toBeTruthy();
  });

  it('Ülke kontrolü', () => {
    const Country = component.passengerForm.controls['Country'];
    expect(Country.valid).toBeFalsy();

    Country.setValue("");
    expect(Country.hasError('required')).toBeTruthy();
  });

  it('Pasaport bitiş tarih kontrolü', () => {
    const PassportEndDate = component.passengerForm.controls['PassportEndDate'];
    expect(PassportEndDate.valid).toBeFalsy();

    PassportEndDate.setValue("");
    expect(PassportEndDate.hasError('required')).toBeTruthy();
  });

  it('Mil kod kontrolü', () => {
    const MilCode = component.passengerForm.controls['MilCode'];
    expect(MilCode.valid).toBeFalsy();

    MilCode.setValue("");
    expect(MilCode.hasError('required')).toBeTruthy();
  });

  it('Hes kod kontrolü', () => {
    const HESCode = component.passengerForm.controls['HESCode'];
    expect(HESCode.valid).toBeFalsy();

    HESCode.setValue("");
    expect(HESCode.hasError('required')).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.Save();
    expect(component.formSubmit).toBeTruthy();
  });
});
