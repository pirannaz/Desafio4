import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TeamComponent } from './team/team.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactComponent } from './contact/contact.component';
import { BoxComponent } from './services/box/box.component';
import { Box2Component } from './services/box2/box2.component';
import { Box3Component } from './services/box3/box3.component';
import { HttpClientModule } from '@angular/common/http';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { UsuariosComponent } from './testimonials/usuarios/usuarios.component';
import { OneUserComponent } from './one-user/one-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    WhyUsComponent,
    TeamComponent,
    OurClientsComponent,
    ContactComponent,
    BoxComponent,
    Box2Component,
    Box3Component,
    TestimonialsComponent,
    UsuariosComponent,
    OneUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
