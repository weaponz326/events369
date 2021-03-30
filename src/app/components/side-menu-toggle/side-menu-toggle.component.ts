import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-side-menu-toggle',
  templateUrl: './side-menu-toggle.component.html',
  styleUrls: ['./side-menu-toggle.component.scss']
})
export class SideMenuToggleComponent implements OnInit {
  _x = this;
  constructor() {
    var  _x = this._x
    // console.log(_x.side)
   }

  ngOnInit(): void {
    // $('button').click(function(){alert('Wass up!'); });
  }

  toggleSideMenu() {
    
    $('#side_bar').toggleClass('visible');
  }

}
