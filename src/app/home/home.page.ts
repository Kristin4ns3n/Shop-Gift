import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonIcon,
  IonThumbnail, IonImg, IonCard, IonLabel, IonText, IonSearchbar, IonButtons, IonButton, IonBadge
} from '@ionic/angular/standalone';

import { ApiService } from '../services/api/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,  
  imports: [
    /*    God, I hate this. Why can't Ionic have normal tags as HTML?   */
    IonBadge,     IonButton,     IonButtons,
    IonSearchbar, IonText,       IonLabel,
    IonCard,      IonImg,        IonIcon,
    IonCol,       IonRow,        IonThumbnail,
    IonHeader,    IonToolbar,    IonTitle,
    IonContent,   RouterLink 
  ],  
})
  
export class HomePage {

  items: any[] = [];
  allItems: any[] = [];                 /* Which also iniatialize to an empy array */
  query!: string;                       /* query! == it is not null */

  //Call the 'services/api/api.service.ts' to the Home Page
  //You can inject it to the constructor()
  private api = inject(ApiService);

  constructor() { }

  /* What the hell is ngOnInit() ? -- It is something to start */
  ngOnInit() {
    console.log('ngoninit homepage');
    this.getItems();
  }
  //Create a function to get the items that are in: /services/api/api.service.ts
  getItems() {
    this.allItems = this.api.items;     /* allItems (which is the new variable created) will get the info of api.items */
                                        /* allItems have the gifts items (our products) that are available throw the api services */
    
    /* There will be a Search Bar as well */
    this.items = [...this.allItems];
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);

    this.query = event.detail.value.toLowerCase();
    this.querySearch();                 /* querySearch is a function */
  }

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  /* Basically, it searchs the items == item.name */
  searchItems() {
    this.items = this.api.items.filter((item) => 
      item.name.toLowerCase().include(this.query)
    );
  }

}

