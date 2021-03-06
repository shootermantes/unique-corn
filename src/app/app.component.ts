import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GiphyService } from './services/giphy.service';
import { TrendingService } from './services/trending.service';
import { QuoteService } from './services/quote.service';

import { SplashPage } from '../pages/splash/splash';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [GiphyService, TrendingService, QuoteService]
})
export class MyApp {
  rootPage:any = SplashPage; // App enters and starts by first loading up the SplashPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


