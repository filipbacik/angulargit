import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';

>>>>>>> abba41b... Third commit
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

<<<<<<< HEAD
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

=======
>>>>>>> abba41b... Third commit
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
<<<<<<< HEAD
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
  
=======
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
>>>>>>> abba41b... Third commit
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
