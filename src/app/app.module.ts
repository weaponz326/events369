import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/user-auth/login-page/login-page.component';
import { SignupPageComponent } from './pages/user-auth/signup-page/signup-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/event-details/location/location.component';
import { HeaderComponent } from './components/event-details/header/header.component';
import { OrganizersComponent } from './components/event-details/organizers/organizers.component';
import { PricingComponent } from './components/event-details/pricing/pricing.component';
import { ScheduleComponent } from './components/event-details/schedule/schedule.component';
import { SpeakersComponent } from './components/event-details/speakers/speakers.component';
import { SponsorsComponent } from './components/event-details/sponsors/sponsors.component';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';

import { BasicInfoComponent } from './components/event-details/basic-info/basic-info.component';
import { BannerComponent } from './components/event-details/banner/banner.component';
import { EventFooterComponent } from './components/event-details/event-footer/event-footer.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { EventCategoriesComponent } from './components/event-categories/event-categories.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CreateBasicInfoComponent } from './pages/create-event/create-basic-info/create-basic-info.component';
import { CreateEventDetailsComponent } from './pages/create-event/create-event-details/create-event-details.component';
import { CreateEventSchedulesComponent } from './pages/create-event/create-event-schedules/create-event-schedules.component';
import { CreateEventTicketingComponent } from './pages/create-event/create-event-ticketing/create-event-ticketing.component';
import { CreateEventPublishComponent } from './pages/create-event/create-event-publish/create-event-publish.component';
import { EditEventPageComponent } from './pages/edit-event/edit-event-page/edit-event-page.component';
import { EmailConfirmedComponent } from './pages/user-auth/email-confirmed/email-confirmed.component';
import { EmailInvalidComponent } from './pages/user-auth/email-invalid/email-invalid.component';
import { PhoneAuthenticationComponent } from './pages/user-auth/phone-authentication/phone-authentication.component';
import { RecoveryEmailComponent } from './pages/user-auth/recovery-email/recovery-email.component';
import { PasswordResetComponent } from './pages/user-auth/password-reset/password-reset.component';
import { ResetInvalidComponent } from './pages/user-auth/reset-invalid/reset-invalid.component';
import { ResetConfirmedComponent } from './pages/user-auth/reset-confirmed/reset-confirmed.component';
import { UserProfilePageComponent } from './pages/profile/user-profile-page/user-profile-page.component';
import { OrganizationProfilePageComponent } from './pages/profile/organization-profile-page/organization-profile-page.component';
import { AccountSideMenuComponent } from './components/account-side-menu/account-side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DiscoverPageComponent,
    SettingsPageComponent,
    AccountPageComponent,
    EventPageComponent,
    NavbarComponent,
    FooterComponent,
    LocationComponent,
    HeaderComponent,
    OrganizersComponent,
    PricingComponent,
    ScheduleComponent,
    SpeakersComponent,
    SponsorsComponent,
    BasicInfoComponent,
    BannerComponent,
    EventFooterComponent,
    AdBannerComponent,
    LiveEventsComponent,
    EventCategoriesComponent,
    EventsListComponent,
    CreateBasicInfoComponent,
    CreateEventDetailsComponent,
    CreateEventSchedulesComponent,
    CreateEventTicketingComponent,
    CreateEventPublishComponent,
    EditEventPageComponent,
    LoadingButtonComponent,
    EmailConfirmedComponent,
    EmailInvalidComponent,
    PhoneAuthenticationComponent,
    RecoveryEmailComponent,
    PasswordResetComponent,
    ResetInvalidComponent,
    ResetConfirmedComponent,
    UserProfilePageComponent,
    OrganizationProfilePageComponent,
    AccountSideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
