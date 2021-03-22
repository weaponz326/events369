import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventPageComponent } from './pages/event-page/event-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { CreateBasicInfoComponent } from './pages/create-event/create-basic-info/create-basic-info.component';
import { CreateEventSchedulesComponent } from './pages/create-event/create-event-schedules/create-event-schedules.component';
import { CreateEventDetailsComponent } from './pages/create-event/create-event-details/create-event-details.component';
import { CreateEventTicketingComponent } from './pages/create-event/create-event-ticketing/create-event-ticketing.component';
import { CreateEventPublishComponent } from './pages/create-event/create-event-publish/create-event-publish.component';
import { UserProfilePageComponent } from './pages/profile/user-profile-page/user-profile-page.component';
import { OrganizationProfilePageComponent } from './pages/profile/organization-profile-page/organization-profile-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
