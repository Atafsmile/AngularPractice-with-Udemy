import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LogingService } from '../loging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(
    private loggingService: LogingService,
    private accountsService: AccountService
  ) {
    accountsService.statusUpdated.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // console.log("A server status changed, new status: " + accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

  ngOnInit(): void {
  }

}
