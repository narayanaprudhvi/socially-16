import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'login', component:SigninComponent, title:'Login', pathMatch: 'full' },
  {path:'signup', component: SignupComponent ,title:'Signup' },
  {path:'home', component:HomeComponent, title:'Home' },
  {path:'conversations', component:ConversationsComponent, title:'Conversations' },
  {path:'profile', component:ProfileComponent, title:'Profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
