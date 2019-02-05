import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Sign Up',
      url: '/home',
      icon: 'person-add'
    },
    {
      title: 'Sign In',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Introduction',
      url: '/introduction',
      icon: 'information-circle'
    },
    {
      title: 'Price List',
      url: '/pricelist',
      icon: 'list-box'
    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'apps'
    }
  ];
  email: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth
  ) {
    this.initializeApp();
    this.afAuth.auth.onAuthStateChanged(
      (user)=>{
        if(user){
          //user is signed in
          //change appPages
          this.appPages = [
            {
              title: 'Introduction',
              url: '/introduction',
              icon: 'information-circle'
            },
            {
              title: 'Make an appointment',
              url: '/notes',
              icon: 'calendar'
            },
            {
              title: 'Price List',
              url: '/pricelist',
              icon: 'list-box'
            },
            {
              title: 'Gallery',
              url: '/gallery',
              icon: 'apps'
            },
            {
              title: 'Sign Out',
              url: '/signout',
              icon: 'log-out'
            }
          ];
          this.email = user.email;
        }
        else{
          //user is not signed in
          this.email = null;
          this.appPages = [
            {
              title: 'Sign Up',
              url: '/home',
              icon: 'person-add'
            },
            {
              title: 'Sign In',
              url: '/login',
              icon: 'log-in'
            },
            {
              title: 'Introduction',
              url: '/introduction',
              icon: 'information-circle'
            },
            {
              title: 'Price List',
              url: '/pricelist',
              icon: 'list-box'
            },
            {
              title: 'Gallery',
              url: '/gallery',
              icon: 'apps'
            },
            
          ];
        }
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
