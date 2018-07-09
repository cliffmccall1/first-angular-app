import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../../shared/models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Contact[];
  dataService: ContactsService;

  constructor(private contactsService: ContactsService) {
    this.dataService = this.contactsService;
  }

  ngOnInit(): void {
    this.dataService
      .getContacts()
      .subscribe(contact => (this.contact = contact));
  }
}
