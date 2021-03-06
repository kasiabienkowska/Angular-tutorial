import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'TestServer';
  // userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  secret = false;
  passwordName = 'Tuna';
  secrets = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is:' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onDisplayDetails() {
    this.secret = !this.secret;
    // this.secrets.push(this.secrets.length + 1);
    this.secrets.push(new Date());
  }
}
