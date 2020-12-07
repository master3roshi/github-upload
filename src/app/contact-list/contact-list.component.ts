import { Component, OnInit } from '@angular/core';
import { DataService, IContact } from '../data.service';
import { EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  
  contacts : IContact[];
  selectedContact;
  contact: IContact[];
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.contacts = this.dataService.getContacts();
  }
  public selectContact(contact){
    this.selectedContact = contact;
  }
  delete(contact) {
    this.dataService.removeContact(contact);
  }

}
