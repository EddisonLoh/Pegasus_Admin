import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
    private overlay: OverlayService, private authy: Auth, private auth: AuthService, private avatar: AvatarService, private router: Router
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

  async changeImage() {
    try{
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });
    this.imageURl = image.dataUrl
    this.profileImage = image.dataUrl

  }catch(e){
    this.overlay.showAlert('Error', e)
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
        this.overlay.showAlert('Success', 'Location captured successfully!');
        this.approve2 = true;
        if (this.profileImage && this.currentRole && this.form.value.fullname && this.form.value.lastname && this.form.value.email && this.imageURl) {
        await this.avatar.CreateAdmin(
          this.form.value.fullname + ' ' + this.form.value.lastname,
          this.form.value.email,
          this.authy.currentUser.phoneNumber,
          this.currentRole,
          this.imageURl,
          true,
          this.coordinates
        )
        this.approve2 = false;
        this.router.navigateByUrl('home');
        }else{
          this.overlay.showAlert('Incomplete', "Complete the form")
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
