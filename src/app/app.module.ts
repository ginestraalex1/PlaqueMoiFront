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
import { AuthGard } from './service/auth-gard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';


const appRoutes: Routes = [
  { path : 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'conversation/:id', canActivate: [AuthGard],  component: ConversationComponent},
  { path: 'conversations', canActivate: [AuthGard], component: ConversationsComponent},
  { path: '', component: WelcomeComponent},
  { path:'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
