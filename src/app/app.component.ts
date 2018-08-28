import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      console.log("helloooo");
    });

    firebase.initializeApp({
      apiKey: 'AIzaSyBnh-Ze_X9rRm9M2OwPY1fFATnirKpUwFY',
      authDomain: 'reeltime-21e30.firebaseapp.com',
      databaseURL: 'https://reeltime-21e30.firebaseio.com',
      storageBucket: 'reeltime-21e30.appspot.com',
      messagingSenderId: '782304977892',
    });

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {

      if (!user) {
        //console.log('helloooo');
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        this.rootPage = TabsPage;
        unsubscribe();
      }
    });

  }
}


