import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HTTP_PROVIDERS } from '@angular/http';
import { HomePage } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import {ContactsProvider} from './providers/contacts/contacts';
import 'rxjs';
@Component({
  templateUrl: 'build/app.html',
  providers: [HTTP_PROVIDERS, ContactsProvider]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Contatos', component: HomePage },
      { title: 'Page dos', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
