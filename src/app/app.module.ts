import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';


const config = {
  apiKey: "AIzaSyD9Pb2JzEsyUTQmMhJAIH_r671b81-lY-4",
  authDomain: "e-donna.firebaseapp.com",
  databaseURL: "https://e-donna.firebaseio.com",
  projectId: "e-donna",
  storageBucket: "",
  messagingSenderId: "291087375880",
  appId: "1:291087375880:web:091b497b267ecaafa9fbbd"
};


@NgModule({
  declarations: [
    AppComponent,
    SuperSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
