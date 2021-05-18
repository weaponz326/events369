import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.component.html',
  styleUrls: ['./preview-details.component.scss']
})
export class PreviewDetailsComponent implements OnInit {

  @Input() eventContent?: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
