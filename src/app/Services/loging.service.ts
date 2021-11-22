import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogingService {

  constructor() { }
  logStatusChange(status: string) {
    console.log("A service status change, new status: " + status);
  }
}
