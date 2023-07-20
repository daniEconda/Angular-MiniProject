import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { FormNewComponent } from './form-new/form-new.component';
import { CitiesComponent } from './cities/cities.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewComponent,
    CitiesComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    PagenotFoundComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
