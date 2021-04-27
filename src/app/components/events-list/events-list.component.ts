import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { UsersFavoritesService } from 'src/app/services/users-favorites/users-favorites.service';
import moment from 'moment';
import { OwlCarousel } from 'ngx-owl-carousel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  categories: any;
  allEvents: any;
  categoryEvents: any[] = [];
  slideConfig: any;

  userFavorites: any = []
  userID: string = '';
  sliderOptions: any;

  @ViewChild('allSlider') allSlider: OwlCarousel | undefined;

  constructor(
    private router: Router,
    private eventsService: EventsService,
    private userFavoriteService: UsersFavoritesService
    ) { 
      this.getAllEvents();
    }

  ngOnInit(): void {
    var user_id: any =  sessionStorage.getItem('user_id')
    // user_id = JSON.parse(user_id)
    console.log(user_id)
    this.userID = user_id;
   
    this.getCategories();
    this.getUsersFavorites()    

    this.sliderOptions = {
      items: 5,
      margin: 15,
      dots: false,      
      responsive:{        
        450: { items:2 },
        600: { items:3 },
        900: { items:5 }
      }
    };
  }

  toCamelCase(sentenceCase: any) {
    var out = "";
    sentenceCase.split(" ").forEach(function (el: any, idx: any) {
        var add = el.toLowerCase();
        out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    });
    // TODO: leak
    // console.log(out);
    return out;
  }

  formatTabPaneId(category: any){
    let camelCase = this.toCamelCase(category);
    let id = '#' + camelCase;
    // console.log(id);
    return id;
  }

  allSliderNext(){
    this.allSlider?.trigger('next.owl.carousel');
  }

  allSliderPrev(){
    this.allSlider?.trigger('prev.owl.carousel');
  }

  gotoPreview(eventId: any) {
    sessionStorage.setItem('preview_event_id', eventId);
    this.router.navigateByUrl('/event_details');
  }
  
  getAllEvents(): void {
    this.eventsService.getAllEvents().then(
      res => {
        console.log(res);
        this.allEvents = res.events.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getCategories(): void {
    this.eventsService.getCategories().then(
      res => {
        console.log(res);
        this.categories = res.categories;

        this.getCategoryEvents();
      },
      err => {
        console.log(err);
      }
    );
  }

  getCategoryEvents(): void {
    for(let i=0; i<this.categories.length; i++) {
      var categoryId = this.categories[i].id;
      this.eventsService.getCategoryEvents(categoryId).then(
        res => {
          console.log(res);
          this.categoryEvents[i] = res.event.data;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getUsersFavorites (){
    this.userID = ((this.userID == null)? '20' : this.userID)
    this.userFavoriteService.getUserFavorites(this.userID).then(
      res => {
        console.log(res);
        this.userFavorites = res.favourites.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getEventStartDateFormatted(date: any) {
    return moment(date).format('ddd, MMM D, YYYY h:mm A');
  }

}
