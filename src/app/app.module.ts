import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { NgbModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { IndexComponent } from './components/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { ListTeamComponent } from './components/list-team/list-team.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateTaskComponent,
    IndexComponent,
    ListTasksComponent,
    EditTaskComponent,
    CreateTeamComponent,
    ListTeamComponent,
    LoginComponent,
    SignUpComponent,
    EditTeamComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NgbAccordionConfig, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
