import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgModel, FormsModule, NgForm} from '@angular/forms';//for ngModule 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookaneventComponent } from './bookanevent/bookanevent.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ClientfeedbackComponent } from './clientfeedback/clientfeedback.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './client.service';
import { AuthService } from './auth.service';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { ListEventsDescComponent } from './list-events-desc/list-events-desc.component';
import { ListVenueCityComponent } from './list-venue-city/list-venue-city.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { ListFoodTypeComponent } from './list-food-type/list-food-type.component';
import { ListFoodSubMenuComponent } from './list-food-sub-menu/list-food-sub-menu.component';
import { EventsComponent } from './events/events.component';
import { InsertMgrComponent } from './insert-mgr/insert-mgr.component';
import { EditMgrComponent } from './edit-mgr/edit-mgr.component';
import { AddAddrofmgrComponent } from './add-addrofmgr/add-addrofmgr.component';
import { EditEventDescComponent } from './edit-event-desc/edit-event-desc.component';
import { DeleteEventDescComponent } from './delete-event-desc/delete-event-desc.component';
import { InsertEventDescComponent } from './insert-event-desc/insert-event-desc.component';
import { InsertFoodTypeComponent } from './insert-food-type/insert-food-type.component';
import { EditFoodTypeComponent } from './edit-food-type/edit-food-type.component';
import { DeleteFoodTypeComponent } from './delete-food-type/delete-food-type.component';
import { InsertFoodSubMenuComponent } from './insert-food-sub-menu/insert-food-sub-menu.component';
import { DeleteFoodSubMenuComponent } from './delete-food-sub-menu/delete-food-sub-menu.component';
import { EditFoodSubMenuComponent } from './edit-food-sub-menu/edit-food-sub-menu.component';
import { DeleteLocationComponent } from './delete-location/delete-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { InsertLocationComponent } from './insert-location/insert-location.component';
import { InsertVenueComponent } from './insert-venue/insert-venue.component';
import { DeleteVenueComponent } from './delete-venue/delete-venue.component';

// const parentModuleRoutes : Routes = [
//   {
//     path:'',component:HomeComponent,
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'about-us',component:AboutUsComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'contact-us',component:ContactUsComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'events',component:EventsComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'feedback',component:FeedbackComponent}]
//   },
//   { 
//     path:'home',component:HomeComponent,children:[{path:'portfolio',component:PortfolioComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'mydetails',component:MydetailsComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'login',component:LoginComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'register',component:RegisterComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'clientfeedback',component:ClientfeedbackComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'bookanevent',component:BookaneventComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'bookappointment',component:BookappointmentComponent}]
//   },
//   {
//     path:'home',component:HomeComponent,children:[{path:'paymentdetails',component:PaymentdetailsComponent}]
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PortfolioComponent,
    FeedbackComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    BookaneventComponent,
    MydetailsComponent,
    BookappointmentComponent,
    ClientfeedbackComponent,
    PaymentdetailsComponent,
    ListUsersComponent,
    ListEventsComponent,
    ListEventsDescComponent,
    ListVenueCityComponent,
    ListLocationComponent,
    ListFoodTypeComponent,
    ListFoodSubMenuComponent,
    EventsComponent,
    InsertMgrComponent,
    EditMgrComponent,
    AddAddrofmgrComponent,
    EditEventDescComponent,
    DeleteEventDescComponent,
    InsertEventDescComponent,
    InsertFoodTypeComponent,
    EditFoodTypeComponent,
    DeleteFoodTypeComponent,
    InsertFoodSubMenuComponent,
    DeleteFoodSubMenuComponent,
    EditFoodSubMenuComponent,
    DeleteLocationComponent,
    EditLocationComponent,
    InsertLocationComponent,
    InsertVenueComponent,
    DeleteVenueComponent
  ],
  imports: [
    FormsModule, //for ngModule 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  //  RouterModule.forRoot(parentModuleRoutes)
    RouterModule.forRoot([
      {path:"",component :HomeComponent},
      {path:"home",component :HomeComponent},
      {path:"about-us",component :AboutUsComponent},
      {path:"contact-us",component :ContactUsComponent},
      {path:"events",component :EventsComponent},
      {path:"feedback",component :FeedbackComponent},
      {path:"portfolio",component :PortfolioComponent},
      {path:"login",component :LoginComponent},
      {path:"register",component :RegisterComponent},
      {path:"mydetails",component :MydetailsComponent},
      {path:"paymentdetails",component :PaymentdetailsComponent},
      {path:"bookanevent",component :BookaneventComponent},
      {path:"bookappointment",component :BookappointmentComponent},
      {path:"clientfeedback",component :RegisterComponent},
      {path:"list-users",component :ListUsersComponent},
      {path:"list-events",component :ListEventsComponent},
      {path:"list-events-desc",component :ListEventsDescComponent},
      {path:"list-food-type",component :ListFoodTypeComponent},
      {path:"list-food-sub-menu",component :ListFoodSubMenuComponent},
      {path:"list-location",component :ListLocationComponent},
      {path:"list-venue-city",component :ListVenueCityComponent},
      {path:"insert-mgr",component :InsertMgrComponent},
      {path:"edit-mgr/:userId",component :EditMgrComponent},
      {path:"add-addrofmgr",component :AddAddrofmgrComponent},
      {path:"edit-event-desc/:eventDescId",component :EditEventDescComponent},
      {path:"delete-event-desc/:eventDescId",component :DeleteEventDescComponent},
      {path:"insert-event-desc",component :InsertEventDescComponent},
      {path:"insert-food-type",component :InsertFoodTypeComponent},
      {path:"edit-food-type/:foodId",component :EditFoodTypeComponent},
      {path:"delete-food-type/:foodId",component :DeleteFoodTypeComponent},
      {path:"insert-food-sub-menu",component :InsertFoodSubMenuComponent},
      {path:"insert-location",component :InsertLocationComponent},
      {path:"insert-venue",component :InsertVenueComponent},
      {path:"edit-food-sub-menu/:foodSubMenuId",component :EditFoodSubMenuComponent},
      {path:"edit-location/:locationId",component :EditLocationComponent},
      {path:"delete-food-sub-menu/:foodSubMenuId",component :DeleteFoodSubMenuComponent},
      {path:"delete-location/:locationId",component :DeleteLocationComponent},
      {path:"delete-venue/:venueCityId",component :DeleteVenueComponent}
    ])
  ],
  exports:[RouterModule],
  providers: [
    ClientService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
