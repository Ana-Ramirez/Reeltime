import { Component } from '@angular/core';
import {
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  AlertController,
  NavParams } from 'ionic-angular';


import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email-validator';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  //public loading: Loading;
  constructor(
    public navCtrl: NavController,
    //public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  loginUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email,
        this.loginForm.value.password)
      console.log('hello1');
      this.navCtrl.setRoot(TabsPage);
      console.log('hello2');
        // .then( authData => {
        //   this.loading.dismiss().then( () => {
        //
        //   });
        //   this.navCtrl.setRoot(TabsPage);
        // }, error => {
        //   this.loading.dismiss().then( () => {
        //     let alert = this.alertCtrl.create({
        //       message: error.message,
        //       buttons: [
        //         {
        //           text: "Ok",
        //           role: 'cancel'
        //         }
        //       ]
        //     });
        //     alert.present();
        //   });
        // });
      // this.loading = this.loadingCtrl.create();
      //       // this.loading.present();
    }
  }


  goToSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }



}
