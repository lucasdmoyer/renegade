import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

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
    {
      title: 'Insurance firms',
      url: '/lessons/insurance',
      icon: 'calculator'
    },
    {
      title: 'Swaps',
      url: '/lessons/swaps',
      icon: 'calculator'
    },
    {
      title: 'Financial Markets',
      url: '/lessons/financial-markets',
      icon: 'calculator'
    },
    {
      title: 'Mortgage and Securitization',
      url: '/lessons/mortgage-securitization',
      icon: 'calculator'
    },
    {
      title: 'Types of Options',
      url: '/lessons/options-mechanics',
      icon: 'calculator'
    },
    {
      title: 'Interest Rate Risk',
      url: '/lessons/interest-rate-risk',
      icon: 'calculator'
    },
    {
      title: 'Volatility Smile',
      url: '/lessons/volatility-smile',
      icon: 'calculator'
    },
    {
      title: 'Credit Risk',
      url: '/lessons/credit-risk',
      icon: 'calculator'
    },
    {
      title: 'Valuation',
      url: '/lessons/valuation',
      icon: 'calculator'
    },
    {
      title: 'Product Management',
      url: '/lessons/marketing/product-management',
      icon: 'calculator'
    },
    {
      title: 'Organization Buying Behavior',
      url: '/lessons/marketing/organization-buying-behavior',
      icon: 'calculator'
    },
    {
      title: 'Marketing Research',
      url: '/lessons/marketing/marketing-research',
      icon: 'calculator'
    },
    {
      title: 'The Corporation',
      url: '/lessons/corporation',
      icon: 'calculator'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
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
