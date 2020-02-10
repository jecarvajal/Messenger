import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
const appRoutes: Routes = [
  {path: ''             , component:HomeComponent},
  {path: 'home'         , component:HomeComponent},
  {path: 'login'        , component:LoginComponent},
  {path: 'conversation/:uid' , component:ConversationComponent},
  {path: 'profile'      , component:ProfileComponent}
];
const routes: Routes = appRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
