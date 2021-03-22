import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventPageComponent } from './pages/event-page/event-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/user-auth/login-page/login-page.component';
import { SignupPageComponent } from './pages/user-auth/signup-page/signup-page.component';

import { CreateBasicInfoComponent } from './pages/create-event/create-basic-info/create-basic-info.component';
import { CreateEventSchedulesComponent } from './pages/create-event/create-event-schedules/create-event-schedules.component';
import { CreateEventDetailsComponent } from './pages/create-event/create-event-details/create-event-details.component';
import { CreateEventTicketingComponent } from './pages/create-event/create-event-ticketing/create-event-ticketing.component';
import { CreateEventPublishComponent } from './pages/create-event/create-event-publish/create-event-publish.component';
import { ValidationPromptComponent } from './pages/user-auth/validation-prompt/validation-prompt.component';
import { EmailConfirmedComponent } from './pages/user-auth/email-confirmed/email-confirmed.component';
import { EmailInvalidComponent } from './pages/user-auth/email-invalid/email-invalid.component';
import { PhoneAuthenticationComponent } from './pages/user-auth/phone-authentication/phone-authentication.component';
import { RecoveryEmailComponent } from './pages/user-auth/recovery-email/recovery-email.component';
import { PasswordResetComponent } from './pages/user-auth/password-reset/password-reset.component';
import { ResetInvalidComponent } from './pages/user-auth/reset-invalid/reset-invalid.component';
import { ResetConfirmedComponent } from './pages/user-auth/reset-confirmed/reset-confirmed.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: SignupPageComponent
  },
  {
    path: 'validation_prompt',
    component: ValidationPromptComponent
  },
  {
    path: 'email_confirmed',
    component: EmailConfirmedComponent
  },
  {
    path: 'email_invalid',
    component: EmailInvalidComponent
  },
  {
    path: 'phone_authentication',
    component: PhoneAuthenticationComponent
  },
  {
    path: 'recovery_email',
    component: RecoveryEmailComponent
  },
  {
    path: 'password_reset',
    component: PasswordResetComponent
  },
  {
    path: 'reset_invalid',
    component: ResetInvalidComponent
  },
  {
    path: 'reset_confirmed',
    component: ResetConfirmedComponent
  },
  {
    path: 'event_details',
    component: EventPageComponent
  },
  {
    path: 'create_event',
    children: [
      {
        path: 'basic_info',
        component: CreateBasicInfoComponent
      },
      {
        path: 'schedule',
        component: CreateEventSchedulesComponent
      },
      {
        path: 'more_details',
        component: CreateEventDetailsComponent
      },
      {
        path: 'ticketing',
        component: CreateEventTicketingComponent
      },
      {
        path: 'publishing',
        component: CreateEventPublishComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
