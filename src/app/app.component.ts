import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Financial Statements',
      url: '/lessons/balance-sheet',
      icon: 'calculator'
    },
    {
      title: 'Simple Quant Model',
      url: '/lessons/simple-quant-model',
      icon: 'calculator'
    },
    {
      title: 'Derivatives',
      url: '/lessons/derivatives',
      icon: 'calculator'
    },
    {
      title: 'Macro Economics',
      url: '/lessons/macro-economics',
      icon: 'calculator'
    },
    {
      title: 'Financial Crisis Timeline',
      url: '/lessons/fin-crisis-timeline',
      icon: 'calculator'
    },
    {
      title: 'How to Price Forward and Future Contracts',
      url: '/lessons/forward-future-pricing',
      icon: 'calculator'
    },
    {
      title: 'Commercial Banks',
      url: '/lessons/commercial-banks',
      icon: 'calculator'
    },
    {
      title: 'OBS Activities',
      url: '/lessons/off-balance-sheet',
      icon: 'calculator'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
