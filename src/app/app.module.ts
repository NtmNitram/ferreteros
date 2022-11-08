import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//Servicios
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './providers/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
