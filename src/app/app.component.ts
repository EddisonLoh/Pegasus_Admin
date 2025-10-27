import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from './services/avatar.service';
import { AuthService } from './services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'home', color: 'primary' },
    { title: 'All Trips', url: '/history', icon: 'cellular', color: 'primary' },
    { title: 'Drivers', url: '/drivers', icon: 'car', color: 'primary' },
    { title: 'Riders', url: '/customers', icon: 'person', color: 'primary' },
    { title: 'Car Types', url: '/cartypes', icon: 'car-sport', color: 'primary' },
    { title: 'Prices', url: '/prices', icon: 'cash', color: 'primary' },
    { title: 'Documents', url: '/documents', icon: 'document-text', color: 'primary' },
    { title: 'Live Support', url: '/support', icon: 'chatbubbles', color: 'primary' },
    { title: 'Payout', url: '/payout', icon: 'wallet', color: 'primary' },
    { title: 'Rider App', url: '/rider-app', icon: 'phone-portrait', color: 'primary' },
    { title: 'Driver App', url: '/driver-app', icon: 'phone-landscape', color: 'primary' },
  ];

  constructor(
    public avatar: AvatarService,
    public router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  gotoProfile() {
    this.router.navigateByUrl('/profile');
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Logout',
          handler: () => {
            this.performLogout();
          }
        }
      ]
    });

    await alert.present();
  }

  private async performLogout() {
    try {
      await this.authService.logout();
      // The router navigation is now handled in the AuthService
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout error (e.g., show an error message to the user)
    }
  }
}
