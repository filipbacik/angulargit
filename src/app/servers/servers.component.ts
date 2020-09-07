import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< HEAD
 // selector: '.app-servers',
 selector: 'app-servers',
 // template: `
//   <app-server></app-server> 
 // <app-server></app-server>`, */
=======
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
>>>>>>> abba41b... Third commit
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
<<<<<<< HEAD
allowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName= '';
  constructor() { 
     setTimeout(() => {
       this.allowNewServer = true;
     }, 2000);
  }

  ngOnInit():  void{
  }
onCreateServer() {
this.serverCreationStatus = 'Server was created';
}
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
=======
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'serverName';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
onCheckServer(){

}
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
>>>>>>> abba41b... Third commit
}
