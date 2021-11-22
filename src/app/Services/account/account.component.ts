import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LogingService } from '../loging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private loggingService: LogingService,
    private accountsService: AccountService
  ) {}
  ngOnInit(){
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log("A server status changed, new status: " + status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
