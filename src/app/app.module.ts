import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { PanelComponent } from './panel/panel.component';
import { CurriculoComponent } from './panel/curriculo/curriculo.component';
import { CandidaturasComponent } from './panel/candidaturas/candidaturas.component';
import { ProfileComponent } from './panel/profile/profile.component';
import { DataprofileComponent } from './panel/dataprofile/dataprofile.component';
import { ProComponent } from './panel/pro/pro.component';
import { HelpbookComponent } from './panel/helpbook/helpbook.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    JobsComponent,
    JobinfoComponent,
    PanelComponent,
    CurriculoComponent,
    CandidaturasComponent,
    ProfileComponent,
    DataprofileComponent,
    ProComponent,
    HelpbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'search/:job/:city', component: SearchComponent},
      {path: 'emprego/:id', component: JobinfoComponent},
      {path: 'dashboard', component: PanelComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
