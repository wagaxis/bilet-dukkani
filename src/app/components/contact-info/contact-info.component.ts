import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  phoneAreaList = [{label: '(+90)', value: 'TR'}, {label: '(+91)', value: 'AR'}];

  constructor() { }

  ngOnInit() {
  }

}
