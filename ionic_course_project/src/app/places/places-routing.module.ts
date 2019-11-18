import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
import {DiscoverPageModule} from './discover/discover.module';
import {OffersPageModule} from './offers/offers.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            // loadChildren: './discover/discover.module#DiscoverPageModule'
            loadChildren: () => DiscoverPageModule
          },
          {
            path: ':placeId',
            loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule'
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            // loadChildren: './offers/offers.module#OffersPageModule'
            loadChildren: () => OffersPageModule
          },
          {
            path: 'new',
            loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
          },
          {
            path: 'edit/:placeId',
            loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
          },
          {
            path: ':placeId',
            loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
