import { Component, OnInit, Input } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';


@Component({
  selector: 'app-create-event-side-menu',
  templateUrl: './create-event-side-menu.component.html',
  styleUrls: ['./create-event-side-menu.component.scss']
})
export class CreateEventSideMenuComponent implements OnInit {

  @Input() currentPage: any;

  dark_theme: boolean = false

  constructor(
    private themeSwitcher: ThemeSwitcherService
  ) { }

  ngOnInit(): void {
  }

  

  switchTheme() {
    
    if(!this.dark_theme) {
      console.log(document.body.setAttribute('class', 'dark-theme'))
      this.dark_theme = true;

      
    } else {
      console.log(document.body.removeAttribute('class'))
      this.dark_theme = false;

    }
    
    
  
  }

}
