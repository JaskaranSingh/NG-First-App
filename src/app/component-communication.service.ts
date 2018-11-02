import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {
 
  message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  changeMessage(latestMessage) {
    this.message.next(latestMessage);
  }
}
