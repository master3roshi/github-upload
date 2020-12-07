import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

export interface IContact{
  id: number;
  name: string;
  about: string;
  phoneno: number;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts : IContact[]= [
    
    {id : 1, name: "Varun Mohane", about:"Neta", phoneno: 11111111},
    {id : 2, name: "Prakhar Thorecha", about:"Kalakar", phoneno: 22222222},
    {id : 3, name: "Upanshu Shelke", about:"Humble and Humorous", phoneno: 33333333},
    {id : 4, name: "Ujjawal Singhi", about:"AllRounder", phoneno: 44444444},
    {id : 5, name: "Piyush Chakre", about:"God-Level", phoneno: 55555555}

  ];

  constructor() { }

  public getContacts():IContact[] {

    return this.contacts;
  }

  public createContact(contact: IContact){

    this.contacts.push(contact);
  }
  removeContact(contact: IContact) {
    let index = this.contacts.indexOf(contact);
    if(index != -1) {
      this.contacts.splice(index,1);
    }

    

  }
}
