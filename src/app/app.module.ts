import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path : 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'conversation/:id', component: ConversationComponent},
  { path: 'conversations', component: ConversationsComponent},
  { path: '', component: WelcomeComponent},
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    SignUpComponent,
    SignInComponent,
    ConversationComponent,
    ConversationsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
