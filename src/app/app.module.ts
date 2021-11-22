import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from'@angular/common/http';
import { PhoeListComponent } from './phoe-list/phoe-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighLightDirective } from './basic-highLight/basic-high-light';
import { BatterHighLightDirective } from './batter-high-light.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './Services/account/account.component';
import { NewAccountComponent } from './Services/new-account/new-account.component';
import { LogingService } from './Services/loging.service';
import { AccountService } from './Services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserListComponent,
    PhoeListComponent,
    UserAddComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighLightDirective,
    BatterHighLightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [LogingService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
