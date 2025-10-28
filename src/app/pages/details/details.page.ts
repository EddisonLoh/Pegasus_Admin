import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';

export interface RoleType {
  id?: string;
  name: string;
  // add other role properties if needed
}

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  form: FormGroup;
  coordinates: any = null;
  approve2: boolean;
  selected: any = 'Select Role';
  roletypes: RoleType[] = [];
  currentRole: any;
  imageURl: any;
  licenseURl: any;
  licenseImage: any;
  profileImage: any;
  constructor(
    private overlay: OverlayService, private authy: Auth, private auth: AuthService, private avatar: AvatarService, private router: Router, private alertController: AlertController
  ) { }

  ngOnInit() {
    this.avatar.getRoles().subscribe({
      next: (roles) => {
        if (roles && roles.length > 0) {
          this.roletypes = roles as RoleType[];
          console.log('Roles loaded:', this.roletypes);
        } else {
          console.log('No roles found');
        }
      },
      error: (error) => {
        console.error('Error fetching roles:', error);
        this.overlay.showAlert('Error', 'Failed to load roles');
      }
    });

    

    this.form = new FormGroup({
      fullname: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
      lastname: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(200)]
      }),
    });
  }
  

  async chooseCarType(event) {
    console.log('Selected role:', event.detail.value);
    this.currentRole = event.detail.value.name;
  }

  async presentImageSourceChoice() {
    const alert = await this.alertController.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getImage(CameraSource.Camera);
          }
        },
        {
          text: 'Photo Library',
          handler: () => {
            this.getImage(CameraSource.Photos);
          }
        },
        {
          text: 'URL',
          handler: () => {
            this.promptForImageURL();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  async promptForImageURL() {
    const alert = await this.alertController.create({
      header: 'Enter Image URL',
      inputs: [
        {
          name: 'imageUrl',
          type: 'url',
          placeholder: 'https://example.com/image.jpg'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: (data) => {
            if (data.imageUrl) {
              this.loadImageFromURL(data.imageUrl);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async getImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: source,
        width: 400 // Limit width to reduce size
      });

      if (image.base64String) {
        this.profileImage = `data:image/${image.format};base64,${image.base64String}`;
        // Handle the image upload to your service here
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }

  async loadImageFromURL(url: string) {
    try {
      // You might want to add validation for the URL here
      this.profileImage = url;
      // Handle the image upload to your service here
    } catch (error) {
      console.error('Error loading image from URL:', error);
    }
  }

  async changeLicense() {
    try{
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });
    this.licenseURl = image.dataUrl
    this.licenseImage = image.dataUrl;
  }catch(e){
    this.overlay.showAlert('Error', e)
  }
  }




  async signIn() {
    try {
      // First get coordinates
      const coordinates = await Geolocation.getCurrentPosition();
      this.coordinates = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
      
      this.overlay.showAlert('Success', 'Location captured successfully!');
      this.approve2 = true;

      // Check form completeness with profileImage instead of imageURl
      if (this.profileImage && 
          this.currentRole && 
          this.form.value.fullname && 
          this.form.value.lastname && 
          this.form.value.email) {
        
        await this.avatar.CreateAdmin(
          this.form.value.fullname + ' ' + this.form.value.lastname,
          this.form.value.email,
          this.authy.currentUser.phoneNumber,
          this.currentRole,
          this.profileImage, // Use profileImage instead of imageURl
          true,
          this.coordinates
        );
        
        this.approve2 = false;
        this.router.navigateByUrl('home');
      } else {
        let missingFields = [];
        if (!this.profileImage) missingFields.push('Profile Image');
        if (!this.currentRole) missingFields.push('Role');
        if (!this.form.value.fullname) missingFields.push('First Name');
        if (!this.form.value.lastname) missingFields.push('Last Name');
        if (!this.form.value.email) missingFields.push('Email');
        
        this.overlay.showAlert(
          'Incomplete Form', 
          `Please complete the following fields: ${missingFields.join(', ')}`
        );
      }
    } catch(e) {
      console.error('Sign in error:', e);
      if (e.message === 'User denied Geolocation') {
        this.overlay.showAlert(
          'Location Permission Required', 
          'Please enable location services to continue. This is required for the registration process.'
        );
      } else {
        const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred';
        this.overlay.showAlert('Error', errorMessage);
      }
    }
  }




}
