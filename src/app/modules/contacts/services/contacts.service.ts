import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contact: Contact[] = [
    {
      firstName: 'Andy',
      lastName: 'Dwyer',
      phoneNumber: '334-555-5555',
      email: 'greatestrockstar@gmail.com'
    },
    {
      firstName: 'Leslie',
      lastName: 'Knope',
      phoneNumber: '334-555-2345',
      email: 'lknope@pawnee.gov'
    },
    {
      firstName: 'John',
      lastName: 'Ralphio',
      phoneNumber: '334-333-3333',
      email: 'flushedwithkash@gmail.com'
    }
  ];
  getContacts = (): Observable<Contact[]> => {
    return of(this.contact);
  };
  constructor() {}
}
