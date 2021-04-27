import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventPageComponent } from './pages/event-page/event-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LearnMoreComponent } from './pages/learn-more/learn-more.component';
import { HappeningNowComponent } from './pages/happening-now/happening-now.component';
import { LoginPageComponent } from './pages/user-auth/login-page/login-page.component';
import { SignupPageComponent } from './pages/user-auth/signup-page/signup-page.component';

import { CreateBasicInfoComponent } from './pages/create-event/create-basic-info/create-basic-info.component';
import { CreateEventSchedulesComponent } from './pages/create-event/create-event-schedules/create-event-schedules.component';
import { CreateEventDetailsComponent } from './pages/create-event/create-event-details/create-event-details.component';
import { CreateEventTicketingComponent } from './pages/create-event/create-event-ticketing/create-event-ticketing.component';
import { CreateEventPublishComponent } from './pages/create-event/create-event-publish/create-event-publish.component';
import { EmailConfirmedComponent } from './pages/user-auth/email-confirmed/email-confirmed.component';
import { EmailInvalidComponent } from './pages/user-auth/email-invalid/email-invalid.component';
import { PhoneAuthenticationComponent } from './pages/user-auth/phone-authentication/phone-authentication.component';
import { RecoveryEmailComponent } from './pages/user-auth/recovery-email/recovery-email.component';
import { PasswordResetComponent } from './pages/user-auth/password-reset/password-reset.component';
import { UserProfilePageComponent } from './pages/profile/user-profile-page/user-profile-page.component';
import { OrganizationProfilePageComponent } from './pages/profile/organization-profile-page/organization-profile-page.component';
import { EditBasicInfoComponent } from './pages/edit-event/edit-basic-info/edit-basic-info.component';
import { EditEventSchedulesComponent } from './pages/edit-event/edit-event-schedules/edit-event-schedules.component';
import { EditEventDetailsComponent } from './pages/edit-event/edit-event-details/edit-event-details.component';
import { UserEventsComponent } from './pages/user-events/user-events.component';
import { CreateEventOrganizersComponent } from './pages/create-event/create-event-organizers/create-event-organizers.component';
import { CreateEventSpeakersComponent } from './pages/create-event/create-event-speakers/create-event-speakers.component';
import { CreateEventMediaComponent } from './pages/create-event/create-event-media/create-event-media.component';
import { CreateEventSponsorsComponent } from './pages/create-event/create-event-sponsors/create-event-sponsors.component';
import { SignupEmailComponent } from './pages/user-auth/signup-email/signup-email.component';
import { SignupMoreInfoComponent } from './pages/user-auth/signup-more-info/signup-more-info.component';
import { HappeningNowService } from './services/happening-now/happening-now.service';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'user_events',
    component: UserEventsComponent
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
    path: 'signup_email',
    component: SignupEmailComponent
  },
  {
    path: 'signup_more_info',
    component: SignupMoreInfoComponent
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
    path: 'event_details',
    component: EventPageComponent
  },
  {
    path: 'account',
    children: [
      {
        path: 'user',
        component: UserProfilePageComponent
      },
      {
        path: 'organization',
        component: OrganizationProfilePageComponent
      }
    ]
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
  },
  {
    path: 'edit_event',
    children: [
      {
        path: 'basic_info',
        component: EditBasicInfoComponent
      },
      {
        path: 'schedule',
        component: EditEventSchedulesComponent 
      },
      {
        path: 'more_details',
        component: EditEventDetailsComponent
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
  },
  {
    path: 'create_advanced',
    children: [
      {
        path: 'organizers',
        component: CreateEventOrganizersComponent
      },
      {
        path: 'speakers',
        component: CreateEventSpeakersComponent
      },
      {
        path: 'media',
        component: CreateEventMediaComponent
      },
      {
        path: 'sponsors',
        component: CreateEventSponsorsComponent
      },
    ]
  },
  {
    path: 'events',
    children: [
      {
        path: 'learn-more',
        component: LearnMoreComponent
      },
      {
        path: 'live',
        component: HappeningNowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
