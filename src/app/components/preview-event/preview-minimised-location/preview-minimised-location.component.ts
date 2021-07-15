import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-preview-minimised-location',
  templateUrl: './preview-minimised-location.component.html',
  styleUrls: ['./preview-minimised-location.component.scss']
})
export class PreviewMinimisedLocationComponent implements OnInit {

  @Input() eventContent?: any;
  @Input() hostingContent?: any;

  hosting = '';

  facebookLinkCopied = false;
  youtubeLinkCopied = false;
  zoomLinkCopied = false;
  zoomIdCopied = false;
  zoomPasswordCopied = false;
  meetLinkCopied = false;
  meetPasswordCopied = false;
  teamsLinkCopied = false;
  teamsPasswordCopied = false;

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.hosting = this.eventContent?.hosting;
  }

  openSnackBar() {
    this._snackBar.open('Copied to clipboard', 'x', {
      duration: 3000
    });
  }

  copyFacebookLink(){
    this.facebookLinkCopied = true;
    setTimeout(() => { this.facebookLinkCopied = false }, 3000);
    this.openSnackBar();
  }

  copyYoutubeLink(){
    this.youtubeLinkCopied = true;
    setTimeout(() => { this.youtubeLinkCopied = false }, 3000);
    this.openSnackBar();
  }

  copyZoomLink(){
    this.zoomLinkCopied = true;
    setTimeout(() => { this.zoomLinkCopied = false }, 3000);
    this.openSnackBar();
  }

  copyZoomId(){
    this.zoomIdCopied = true;
    setTimeout(() => { this.zoomIdCopied = false }, 3000);
    this.openSnackBar();
  }

  copyZoomPassword(){
    this.zoomPasswordCopied = true;
    setTimeout(() => { this.zoomPasswordCopied = false }, 3000);
    this.openSnackBar();
  }

  copyMeetLink(){
    this.meetLinkCopied = true;
    setTimeout(() => { this.meetLinkCopied = false }, 3000);
    this.openSnackBar();
  }

  copyMeetPassword(){
    this.meetLinkCopied = true;
    setTimeout(() => { this.meetLinkCopied = false }, 3000);
    this.openSnackBar();
  }

  copyTeamsLink(){
    this.teamsLinkCopied = true;
    setTimeout(() => { this.teamsLinkCopied = false }, 3000);
    this.openSnackBar();
  }

  copyTeamsPassword(){
    this.teamsPasswordCopied = true;
    setTimeout(() => { this.teamsPasswordCopied = false }, 3000);
    this.openSnackBar();
  }

  // // Initialize and add the map
  // initMap(): void {
  //   // The location of event
  //   let latitude = this.eventContent.gps.split(", ")[0];
  //   let longitude = this.eventContent.gps.split(", ")[1];
  //   const location = { lat: latitude, lng: longitude };
  //   console.log(latitude, longitude);

  //   // The map, centered at event
  //   const map = new google.maps.Map(
  //     document.getElementById("map") as HTMLElement,
  //     {
  //       zoom: 4,
  //       center: location,
  //     }
  //   );

  //   // The marker, positioned at event
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: map,
  //   });
  // }

}
