import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Add this line

import { AngularFireModule } from '@angular/fire/compat'; // Import the AngularFireModule
// import { environment } from '../environments/environment'; // assuming you have an environment file

@NgModule({
  declarations: [AppComponent],
  imports: [
    // AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase with your project config
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ], // Add HttpClientModule to imports
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
