import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { CreateHeadComponent } from './create/create-head/create-head.component';
import { ExploreComponent } from './explore/explore.component';
import { ExploreHeadComponent } from './explore/explore-head/explore-head.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/form/form.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CreateHeadComponent,
    ExploreComponent,
    ExploreHeadComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
