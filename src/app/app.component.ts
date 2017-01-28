import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {BackandService} from '../providers/backand-service'
import { HomePage } from '../pages/home/home';
import {AnunciosPage} from '../pages/anuncios/anuncios'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = AnunciosPage;

  constructor(platform: Platform , private backandService:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      backandService.setIsMobile(platform.is('mobile'));						
      backandService.setAppName('babyliz2017');						
      backandService.setAnonymousToken('f5b32139-8aee-41bf-a107-47da8e991e9f');
      backandService.useAnonymousAuth();
    });
  }
}
