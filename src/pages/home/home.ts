import { Component, ViewChild } from '@angular/core';
import { NavController , Tabs, IonicPage, NavParams} from 'ionic-angular';
import firebase from 'firebase';
import {SignupPage} from "../signup/signup";
import {LoginPage} from "../login/login";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home = HomePage;
  about = AboutPage;
  contact = ContactPage;

  constructor(public navCtrl: NavController) {




  }

  logoutUser(): Promise<void> {
    this.navCtrl.push(LoginPage);
    return firebase.auth().signOut();
  }

}
