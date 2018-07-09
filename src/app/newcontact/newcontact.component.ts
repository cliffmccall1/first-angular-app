import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry'
@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {
model: Entry = new Entry();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("New entry successful: ", this.model); 
  }
}
