import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { BookComponent } from './components/book/book.component';
import { ChatComponent } from './components/chat/chat.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { AuthService } from './services/auth.service';
import { CanDeactivateGuard } from './auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'book', component: BookComponent},
  { path: 'chat', component: ChatComponent, canDeactivate: [CanDeactivateGuard]},
  { path: 'add-book', component: BookAddComponent},
  { path: '**', component: HomepageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
