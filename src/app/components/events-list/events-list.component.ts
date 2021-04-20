import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  categories: any;
  allEvents: any;
  categoryEvents: any[] = [];
  thumbsSliderOptions: any;

  constructor(private eventsService: EventsService,) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.getCategories();

    this.thumbsSliderOptions = {
      items: 1,
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

  getAllEvents(): void {
    this.eventsService.getAllEvents().then(
      res => {
        console.log(res);
        this.allEvents = res.events;
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

}
