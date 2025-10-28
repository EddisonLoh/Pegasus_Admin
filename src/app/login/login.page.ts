import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, ModalOptions, NavController, Platform } from '@ionic/angular';
import { OtpComponent } from '../otp/otp.component';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { OverlayService } from '../services/overlay.service';
import { Auth, RecaptchaVerifier } from '@angular/fire/auth';
import { StatusBar } from '@capacitor/status-bar';
import { AvatarService } from '../services/avatar.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { CountrySearchModalComponent } from '../country-search-modal/country-search-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  form: FormGroup;
  CountryCode: string;
  defaultCountryCode: string = '+1';
  CountryJson = environment.CountryJson;
  flag: any = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
  filteredCountries = [];
  user: any;
  approve: boolean;
  approve2: boolean;
  recaptchaVerifier: RecaptchaVerifier;

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoplay: true
  };

  numberT: string;
  backButtonSubscription: any;

  maxPhoneLength: number = 10;

  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService,
    private router: Router,
    private nav: NavController,
    private authY: Auth,
    private avatar: AvatarService,
    private overlay: OverlayService,
    private alertController: AlertController,
    private platform: Platform
  ) {
  }

  async ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
    });

    this.filteredCountries = this.CountryJson;
    
    // Detect country code before anything else
    await this.detectCountry();

    // Initialize ReCaptcha verifier
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        this.signIn();
      },
      'expired-callback': () => {
        // Response expired - handle expired reCAPTCHA
      }
    }, this.authY);
    
    this.initializeBackButtonCustomHandler();
  }

  ngAfterViewInit() {
    // Initialize RecaptchaVerifier after the view has been initialized
    setTimeout(() => {
      this.initializeRecaptcha();
    }, 1000); // Delay of 1 second to ensure the DOM is ready
  }

  private initializeRecaptcha() {
    const element = document.getElementById('sign-in-button');
    if (element) {
      try {
        this.auth.recaptcha();
      } catch (error) {
        console.error('Error initializing reCAPTCHA:', error);
      }
    } else {
      console.error('sign-in-button element not found');
    }
  }

  async HideSplash() {
    await SplashScreen.hide();
  }

  async openCountrySearchModal() {
    const modal = await this.modalCtrl.create({
      component: CountrySearchModalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.CountryCode = data.dialCode;
      this.numberT = data.dialCode;
    }
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.dialCode.includes(searchTerm)
    );
  }

  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  async Show() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }

  async Hide() {
    await StatusBar.setOverlaysWebView({ overlay: true });
  }

  async signIn() {
      try {
        if (!this.form.valid) {
          this.form.markAllAsTouched();
          return;
        }
        console.log('Form Value:', this.form.value);
        this.overlay.showLoader('');
  
        const fullPhoneNumber = this.numberT + this.form.value.phone;
        console.log('Attempting to sign in with phone number:', fullPhoneNumber);
  
        // Use AuthService to handle sign-in with phone number
        const confirmationResult = await this.auth.signInWithPhoneNumber(fullPhoneNumber);
  
        console.log('Confirmation Result:', confirmationResult);
        
        let storedOTP = localStorage.getItem('defaultOTP');
        if (!storedOTP){
          storedOTP = '';
        }

        this.overlay.hideLoader();
  
        const options: ModalOptions = {
          component: OtpComponent,
          componentProps: {
            defaultOtp: storedOTP,
            phone: this.form.value.phone,
            countryCode: this.numberT,
            confirmationResult: confirmationResult
          },
          swipeToClose: true
        };
  
        const modal = await this.modalCtrl.create(options);
        await modal.present();
        const data: any = await modal.onWillDismiss();
        console.log('OTP Modal Dismissed:', data);
  
        this.authY.onAuthStateChanged(async (user) => {
          if (user) {
              console.log('User Profile Data:', data);
              if (!user.email) {
                console.log('Navigating to details page');
                this.router.navigateByUrl('details');
              } else {
                console.log('Navigating to home page');
                this.router.navigateByUrl('home');
              }
              this.approve2 = false;
              this.overlay.hideLoader();
          }
        });
      } catch (e) {
        console.error('Error during signIn:', e);
        this.approve2 = false;
        
        // Handle specific error cases
        if (e.code === 'auth/invalid-app-credential' || e.code === 'auth/too-many-requests') {
          this.CountryCode = '+57';
          this.numberT = '+57';
          const defaultNumbers = ['5006001000', '5006001000'];
          const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];
          this.form.controls['phone'].setValue(randomDefaultNumber);
          localStorage.setItem('defaultOTP', '123456');
          this.overlay.showAlert('Daily SMS Limit Reached', `The daily SMS limit has been reached. Please use the default number +57:${randomDefaultNumber}`);
        } else if (e.code === 'auth/invalid-phone-number') {
          this.overlay.showAlert('Invalid Phone Number', 'Please enter a valid phone number.');
        } else {
          this.overlay.showAlert('Error', `Error during sign-in: ${e.message || JSON.stringify(e)}`);
        }
        
        this.overlay.hideLoader();
      }
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  async handleBackButton() {
    try {
        await this.showExitConfirmation();
    } catch (error) {
      console.error('Error handling back button:', error);
    }
  }

  async showExitConfirmation() {
    const alert = await this.alertController.create({
      header: 'Exit App',
      message: 'Are you sure you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  async detectCountry() {
    try {
      // First try to get country from device/browser locale
      const browserLocale = navigator.language;
      const countryCode = browserLocale.split('-')[1] || browserLocale.split('_')[1];
      
      if (countryCode) {
        // Find matching country in CountryJson
        const country = this.CountryJson.find(c => c.isoCode === countryCode.toUpperCase());
        if (country) {
          this.CountryCode = country.dialCode;
          this.numberT = country.dialCode;
          this.maxPhoneLength = this.getPhoneMaxLength(countryCode);
          return;
        }
      }

      // Fallback to IP geolocation if browser locale doesn't work
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data && data.country_calling_code) {
        this.CountryCode = data.country_calling_code.startsWith('+') ? 
          data.country_calling_code : 
          `+${data.country_calling_code}`;
        this.numberT = this.CountryCode;
        this.maxPhoneLength = this.getPhoneMaxLength(data.country_code);
        
        // Update form validation based on country
        this.updatePhoneValidation();
      } else {
        throw new Error('Could not detect country from IP');
      }
    } catch (error) {
      console.error('Error detecting country:', error);
      // Fallback to default country code
      this.CountryCode = '+1';
      this.numberT = '+1';
      this.maxPhoneLength = 10;
      this.updatePhoneValidation();
    }
  }

  private updatePhoneValidation() {
    this.form.get('phone').setValidators([
      Validators.required,
      Validators.minLength(this.maxPhoneLength),
      Validators.maxLength(this.maxPhoneLength)
    ]);
    this.form.get('phone').updateValueAndValidity();
  }

  private getPhoneMaxLength(countryCode: string): number {
    const phoneLengths = {
      'US': 10, // United States
      'GB': 10, // United Kingdom
      'IN': 10, // India
      'CA': 10, // Canada
      'AU': 9,  // Australia
      'DE': 11, // Germany
      'FR': 9,  // France
      'IT': 10, // Italy
      'ES': 9,  // Spain
      'BR': 11, // Brazil
      'MX': 10, // Mexico
      'JP': 10, // Japan
      'KR': 11, // South Korea
      'CN': 11, // China
      'RU': 10, // Russia
      'ZA': 9,  // South Africa
      'NG': 10, // Nigeria
      'EG': 10, // Egypt
      'SA': 9,  // Saudi Arabia
      'AE': 9,  // UAE
      'default': 10
    };
    return phoneLengths[countryCode] || phoneLengths.default;
  }
}
