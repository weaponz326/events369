import { Component, OnInit } from '@angular/core';
import { BannerAdsService } from 'src/app/services/banner-ads/banner-ads.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {

  sliderOptions: any;
  bannerAdsData: any;

  constructor(
    private bannerService: BannerAdsService
  )
  { 
    // this.bannerAdsData = [];
  }

  ngOnInit(): void {
    
    this.getBannerAds();  

    this.sliderOptions = {
      items: 1,
      dots: true,
      margin: 30,
      center: true,
      loop: true,
      autoplay: true
    };

 }

  getBannerAds(): void {
    this.bannerService.getBannerAds().then(
      res => {
        console.log(res);
        this.bannerAdsData = res.banner_ads;
      },
      err => {
        console.log(err);
      }
    );
  }

}
