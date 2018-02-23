import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { BooksvService } from './services/booksv.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './components/email/email.component';
import { BookComponent } from './components/book/book.component';
import { BookListCompnent } from './components/book/book-list/book-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard, CanDeactivateGuard } from './auth.guard';
import { environment } from './../environments/environment';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBC093EqkiuDc4X6GbbZ3Bwtz5JpRBYc0A',
//   authDomain: 'finalangular-45642.firebaseapp.com',
//   databaseURL: 'https://finalangular-45642.firebaseio.com',
//   projectId: 'finalangular-45642',
//   storageBucket: '',
//   messagingSenderId: '34616618954'
// };


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
    ChatComponent,
    BookAddComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CanDeactivateGuard, AuthService, BooksvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
