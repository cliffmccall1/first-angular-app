import { Component, OnInit } from "@angular/core";
import { Contact } from "../../../../shared/models/contact";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { of } from "rxjs";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  private contactRoute = "http://localhost:3000/contact";
  public contact: Contact[];

  constructor(private http: HttpClient) {}

  getContact() {
    this.http.get<Contact[]>(this.contactRoute).subscribe(contact => {
      this.contact = contact;
      console.log("Contact", this.contact);
    });
  }
  ngOnInit() {
    this.getContact();
  }
}
