import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { BooksvService } from './booksv.service'
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';
import { BookComponent } from './book/book.component';
import { BookListCompnent } from './book/book-list/book-list.component';
import { ChatComponent } from './chat/chat.component';


const firebaseConfig = {
  apiKey: "AIzaSyBC093EqkiuDc4X6GbbZ3Bwtz5JpRBYc0A",
  authDomain: "finalangular-45642.firebaseapp.com",
  databaseURL: "https://finalangular-45642.firebaseio.com",
  projectId: "finalangular-45642",
  storageBucket: "",
  messagingSenderId: "34616618954"
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EmailComponent,
    BookComponent,
    BookListCompnent,
    ChatComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule
    
  ],
  providers: [ AuthService, BooksvService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
