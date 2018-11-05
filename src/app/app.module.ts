import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent
},
 { path: 'messages/:name',
  component: MessagesComponent
} ,
{ path: 'messages',
  component: MessagesComponent
},
{ path: 'register',
  component: RegisterComponent
}
];

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, 
  MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
  RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent],
  bootstrap: [AppComponent],
  providers: [WebService],
 
})
export class AppModule {
  constructor(){}
}