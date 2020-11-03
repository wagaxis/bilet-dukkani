import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss'],
  providers: [MessageService]
})
export class PassengerInfoComponent implements OnInit {

  passengerForm: FormGroup;
  selectedGender = '0';
  disabled = true;
  formSubmit: boolean;

  phoneAreaList = [{label: '(+90)', value: 'TR'}, {label: '(+91)', value: 'AR'}];
  countyList = [{label: 'Ülke Seçiniz', value: null} , {label: 'Türkiye', value: 'TR'}];

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
  }

  ngOnInit() {
    this.passengerForm =  this.formBuilder.group({
      Gender: ['0', Validators.required],
      Name: ['', Validators.required],
      Surname: ['',  Validators.required],
      BirthDate: ['', Validators.required],
      HasTc: [''],
      TCNo: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      PhoneArea: [this.phoneAreaList[0].value, Validators.required],
      Phone: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PassportNumber: ['',  Validators.required],
      Country: ['',  Validators.required],
      PassportEndDate: ['',  Validators.required],
      MilCode: ['',  Validators.required],
      HESCode: ['',  Validators.required]
    });
    this.passengerForm.get('HasTc').valueChanges.subscribe(x => {
      if (x){
        this.passengerForm.get('TCNo').enable();
      }
      else{
        this.passengerForm.get('TCNo').disable();
      }
    });
  }
  validate(key: string){
    return ((this.passengerForm.get(key).invalid && (this.passengerForm.get(key).dirty || this.passengerForm.get(key).touched)) ||
      this.formSubmit);
  }

  Save(){
    this.formSubmit = true;

    if (this.passengerForm.valid)
    {
      this.messageService.add({severity: 'success', summary: 'Başarılı', detail: 'Tıklandım.'});
      console.log(this.passengerForm.value);
    }
  }
}
