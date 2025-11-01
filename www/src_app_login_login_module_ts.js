"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 6818);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/platform.service */ 8634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);

















function LoginPage_ion_text_19_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please enter the Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_text_19_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please enter a valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_text_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, LoginPage_ion_text_19_p_1_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LoginPage_ion_text_19_p_2_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("minlength") && !ctx_r0.form.get("phone").hasError("required"));
  }
}

function LoginPage_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_spinner_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-spinner", 19);
  }
}

class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay, alertController, platform, platformService) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.alertController = alertController;
    this.platform = platform;
    this.platformService = platformService;
    this.defaultCountryCode = '+1';
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.filteredCountries = [];
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };
    this.maxPhoneLength = 10;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10)]
        })
      });
      _this.filteredCountries = _this.CountryJson; // Detect country code before anything else

      yield _this.detectCountry(); // Initialize ReCaptcha verifier

      _this.recaptchaVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': response => {
          _this.signIn();
        },
        'expired-callback': () => {// Response expired - handle expired reCAPTCHA
        }
      }, _this.authY);

      _this.initializeBackButtonCustomHandler();
    })();
  }

  ngAfterViewInit() {
    // Initialize RecaptchaVerifier after the view has been initialized
    setTimeout(() => {
      this.initializeRecaptcha();
    }, 1000); // Delay of 1 second to ensure the DOM is ready
  }

  initializeRecaptcha() {
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

  HideSplash() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.platformService.hideSplashScreen();
    })();
  }

  openCountrySearchModal() {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_3__.CountrySearchModalComponent
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data) {
        _this3.CountryCode = data.dialCode;
        _this3.numberT = data.dialCode;
      }
    })();
  }

  filterCountries(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) || country.dialCode.includes(searchTerm));
  }

  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  Show() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.platformService.setStatusBarOverlay(false);
    })();
  }

  Hide() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.platformService.setStatusBarOverlay(true);
    })();
  }

  signIn() {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this6.form.valid) {
          _this6.form.markAllAsTouched();

          return;
        }

        console.log('Form Value:', _this6.form.value);

        _this6.overlay.showLoader('');

        const fullPhoneNumber = _this6.numberT + _this6.form.value.phone;
        console.log('Attempting to sign in with phone number:', fullPhoneNumber); // Use AuthService to handle sign-in with phone number

        const confirmationResult = yield _this6.auth.signInWithPhoneNumber(fullPhoneNumber);
        console.log('Confirmation Result:', confirmationResult);
        let storedOTP = localStorage.getItem('defaultOTP');

        if (!storedOTP) {
          storedOTP = '';
        }

        _this6.overlay.hideLoader();

        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            defaultOtp: storedOTP,
            phone: _this6.form.value.phone,
            countryCode: _this6.numberT,
            confirmationResult: confirmationResult
          },
          swipeToClose: true
        };
        const modal = yield _this6.modalCtrl.create(options);
        yield modal.present();
        const data = yield modal.onWillDismiss();
        console.log('OTP Modal Dismissed:', data);

        _this6.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            if (user) {
              console.log('User Profile Data:', data);

              if (!user.email) {
                console.log('Navigating to details page');

                _this6.router.navigateByUrl('details');
              } else {
                console.log('Navigating to home page');

                _this6.router.navigateByUrl('home');
              }

              _this6.approve2 = false;

              _this6.overlay.hideLoader();
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.error('Error during signIn:', e);
        _this6.approve2 = false; // Handle specific error cases

        if (e.code === 'auth/invalid-app-credential' || e.code === 'auth/too-many-requests') {
          _this6.CountryCode = '+57';
          _this6.numberT = '+57';
          const defaultNumbers = ['5006001000', '5006001000'];
          const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];

          _this6.form.controls['phone'].setValue(randomDefaultNumber);

          localStorage.setItem('defaultOTP', '123456');

          _this6.overlay.showAlert('Daily SMS Limit Reached', `The daily SMS limit has been reached. Please use the default number +57:${randomDefaultNumber}`);
        } else if (e.code === 'auth/invalid-phone-number') {
          _this6.overlay.showAlert('Invalid Phone Number', 'Please enter a valid phone number.');
        } else {
          _this6.overlay.showAlert('Error', `Error during sign-in: ${e.message || JSON.stringify(e)}`);
        }

        _this6.overlay.hideLoader();
      }
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this7.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        header: 'Exit App',
        message: 'Are you sure you want to exit the app?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  detectCountry() {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // First try to get country from device/browser locale
        const browserLocale = navigator.language;
        const countryCode = browserLocale.split('-')[1] || browserLocale.split('_')[1];

        if (countryCode) {
          // Find matching country in CountryJson
          const country = _this9.CountryJson.find(c => c.isoCode === countryCode.toUpperCase());

          if (country) {
            _this9.CountryCode = country.dialCode;
            _this9.numberT = country.dialCode;
            _this9.maxPhoneLength = _this9.getPhoneMaxLength(countryCode);
            return;
          }
        } // Fallback to IP geolocation if browser locale doesn't work


        const response = yield fetch('https://ipapi.co/json/');
        const data = yield response.json();

        if (data && data.country_calling_code) {
          _this9.CountryCode = data.country_calling_code.startsWith('+') ? data.country_calling_code : `+${data.country_calling_code}`;
          _this9.numberT = _this9.CountryCode;
          _this9.maxPhoneLength = _this9.getPhoneMaxLength(data.country_code); // Update form validation based on country

          _this9.updatePhoneValidation();
        } else {
          throw new Error('Could not detect country from IP');
        }
      } catch (error) {
        console.error('Error detecting country:', error); // Fallback to default country code

        _this9.CountryCode = '+1';
        _this9.numberT = '+1';
        _this9.maxPhoneLength = 10;

        _this9.updatePhoneValidation();
      }
    })();
  }

  updatePhoneValidation() {
    this.form.get('phone').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(this.maxPhoneLength), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(this.maxPhoneLength)]);
    this.form.get('phone').updateValueAndValidity();
  }

  getPhoneMaxLength(countryCode) {
    const phoneLengths = {
      'US': 10,
      'GB': 10,
      'IN': 10,
      'CA': 10,
      'AU': 9,
      'DE': 11,
      'FR': 9,
      'IT': 10,
      'ES': 9,
      'BR': 11,
      'MX': 10,
      'JP': 10,
      'KR': 11,
      'CN': 11,
      'RU': 10,
      'ZA': 9,
      'NG': 10,
      'EG': 10,
      'SA': 9,
      'AE': 9,
      'default': 10
    };
    return phoneLengths[countryCode] || phoneLengths.default;
  }

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_5__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_6__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_7__.PlatformService));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 25,
  vars: 8,
  consts: [[1, "ion-padding"], [1, "pana-admin-title"], [1, "content-container"], ["pager", "true", 3, "options"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "modern-form", 3, "formGroup"], ["fill", "clear", 1, "country-code-btn", 3, "click"], ["name", "globe-outline"], ["id", "sign-in-button"], ["formControlName", "phone", "placeholder", "Mobile Number", "type", "tel", "clearInput", "", 1, "phone-input", 3, "ionFocus", "ionBlur"], ["class", "error", 4, "ngIf"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "disabled", "click"], [4, "ngIf"], ["name", "crescent", 4, "ngIf"], ["id", "recaptcha-container"], [1, "error"], ["name", "log-in-outline"], ["name", "crescent"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "PANA ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2)(5, "ion-slides", 3)(6, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "form", 7)(13, "ion-item")(14, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_14_listener() {
        return ctx.openCountrySearchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_18_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_18_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, LoginPage_ion_text_19_Template, 3, 2, "ion-text", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_20_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, LoginPage_span_21_Template, 3, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, LoginPage_ion_spinner_22_Template, 1, 0, "ion-spinner", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.CountryCode || ctx.defaultCountryCode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("maxlength", ctx.maxPhoneLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.form.valid || !ctx.CountryCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName],
  styles: ["@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n[_nghost-%COMP%] {\n  --ion-background-color: #f4f5f8;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #f4f5f8 0%, #ffffff 100%);\n}\nion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%] {\n  position: relative;\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --min-height: 80px;\n  padding-top: 20px;\n}\nion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\nion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  font-style: italic;\n}\nion-content[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100% - 100px);\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 30vh;\n  margin-bottom: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 80%;\n  margin: auto;\n  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 300px;\n  width: 100%;\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n  --border-radius: 10px;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin-bottom: 15px;\n  overflow: hidden;\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .country-code-btn[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n  --box-shadow: none;\n  --border-radius: 10px 0 0 10px;\n  margin: 0;\n  height: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 0 0px;\n  min-width: 80px;\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .country-code-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  font-size: 16px;\n  --background: #f4f5f8;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[type=submit][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  --border-radius: 10px;\n  --box-shadow: 0 4px 10px rgba(var(--ion-color-primary-rgb), 0.3);\n  height: 50px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin-top: 5px;\n  font-style: italic;\n}\n@media (max-height: 668px) {\n  ion-slides[_ngcontent-%COMP%] {\n    height: 25vh;\n  }\n}\n@media (min-height: 800px) {\n  ion-slides[_ngcontent-%COMP%] {\n    height: 35vh;\n  }\n}\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  padding: 20px;\n}\nion-slides[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  height: 200px;\n}\nion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 150px;\n}\n.login-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.login-form[_ngcontent-%COMP%]   .country-phone-input[_ngcontent-%COMP%] {\n  --background: #f4f5f8;\n  --border-radius: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  margin-bottom: 15px;\n}\n.login-form[_ngcontent-%COMP%]   .country-phone-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n}\n.login-form[_ngcontent-%COMP%]   ion-button[type=submit][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  --border-radius: 10px;\n  --box-shadow: 0 4px 10px rgba(var(--ion-color-primary-rgb), 0.3);\n  height: 50px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin-top: 5px;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 0.75em !important;\n}\nion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\nion-slides[_ngcontent-%COMP%] {\n  height: 440px;\n}\nion-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 35%;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-input[_ngcontent-%COMP%] {\n  width: 60%;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.pm-awesome-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --padding-end: 0;\n  align-items: center;\n  justify-content: space-between;\n}\nion-item[lines=none][_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-start: 0;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-bottom: 10px;\n}\nion-select-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n}\n@media (max-width: 576px) {\n  ion-header[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  ion-header[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  ion-slides[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\nion-button[type=submit][_ngcontent-%COMP%]:hover {\n  animation: pulse 1s infinite;\n}\n@media (max-width: 320px) {\n  form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .country-code-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    min-width: 70px;\n  }\n  form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.pana-admin-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  text-align: center;\n}\n.pana-admin-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: bold;\n}\nform.modern-form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 90%;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease;\n}\nform.modern-form[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\nform.modern-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: rgba(244, 245, 248, 0.8);\n  --border-radius: 12px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin-bottom: 16px;\n}\nform.modern-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .country-code-btn[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary-tint);\n  --color: var(--ion-color-primary);\n  --border-radius: 10px;\n  margin: 4px;\n  height: 90%;\n  font-weight: 600;\n  min-width: 90px;\n}\nform.modern-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .country-code-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 18px;\n}\nform.modern-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  font-size: 16px;\n  --background: transparent;\n}\nform.modern-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --placeholder-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n}\nform.modern-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);\n  height: 52px;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  --color: var(--ion-color-light);\n}\nform.modern-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nform.modern-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover {\n  --box-shadow: 0 6px 16px rgba(var(--ion-color-primary-rgb), 0.3);\n}\nform.modern-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-light);\n}\n.pana-admin-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n}\nion-text.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n}\nion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n}\nion-label[_ngcontent-%COMP%], ion-text[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,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O0FBdkRGO0FBeURFO0VBQ0UsMkJBQUE7QUF2REo7QUEwREU7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBeERKO0FBMERJO0VBQ0UsMkNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF4RE47QUEwRE07RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF4RFI7QUE0REk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTFETjtBQTZESTtFQUNFLDRDQUFBO0VBQ0EsOEJBQUE7QUEzRE47QUErREU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFVQSwrQkFBQTtBQXRFSjtBQThESTtFQUNFLGlCQUFBO0FBNUROO0FBK0RJO0VBQ0UsZ0VBQUE7QUE3RE47QUFrRUk7RUFDRSw2QkFBQTtBQWhFTjtBQXVFRTtFQUNFLDRCQUFBO0FBcEVKO0FBeUVFO0VBQ0UsOEJBQUE7QUF0RUo7QUE0RUU7RUFDRSw0QkFBQTtBQXpFSjtBQThFQTs7O0VBR0UsNEJBQUE7QUEzRUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS1sZWZ0IHtcclxuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbi5zbGlkZS1yaWdodCB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNGY1ZjggMCUsICNmZmZmZmYgMTAwJSk7XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgLS1taW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7IC8vIEFkZCBzb21lIHRvcCBwYWRkaW5nIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGhpZGRlbiBiZWhpbmQgdGhlIHRpdGxlXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciBoZWFkZXIgaGVpZ2h0XHJcbiAgfVxyXG5cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgaW9uLXNsaWRlIHtcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgLmNvdW50cnktY29kZS1idG4ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNjY4cHgpIHtcclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICBpb24tc2xpZGUge1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgLmNvdW50cnktcGhvbmUtaW5wdXQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWlucHV0LCBpb24tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xyXG4gIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDQ0MHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICB3aWR0aDogMzUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbi5wbS1hd2Vzb21lLWRpdmlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2hhZG93LXRvcCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaW9uLWl0ZW1bbGluZXM9XCJub25lXCJdIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQW5pbWF0aW9uIGZvciBidXR0b24gaG92ZXIgZWZmZWN0XHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8vIEFkZCB0aGlzIG5ldyBtZWRpYSBxdWVyeSBmb3Igc21hbGxlciBzY3JlZW5zXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAuY291bnRyeS1jb2RlLWJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYW5hLWFkbWluLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuZm9ybS5tb2Rlcm4tZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDUsIDI0OCwgMC44KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAuY291bnRyeS1jb2RlLWJ0biB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDRweDtcclxuICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1pbi13aWR0aDogOTBweDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGhvbmUtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMik7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBleHBsaWNpdCB0ZXh0IGNvbG9ycyBmb3IgYWxsIHRleHQgZWxlbWVudHNcclxuLnBhbmEtYWRtaW4tdGl0bGUge1xyXG4gIGgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdGV4dC5lcnJvciB7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFbnN1cmUgc2xpZGUgdGV4dCBpcyB2aXNpYmxlXHJcbmlvbi1zbGlkZXMge1xyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGRhcmsgdGV4dCBjb2xvciB0byBhbnkgZm9ybSBsYWJlbHNcclxuaW9uLWxhYmVsLCBcclxuaW9uLXRleHQsIFxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 8634:
/*!**********************************************!*\
  !*** ./src/app/services/platform.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformService": () => (/* binding */ PlatformService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class PlatformService {
  constructor() {}
  /**
   * Check if running on a native platform (iOS/Android)
   */


  isNative() {
    return _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform();
  }
  /**
   * Check if running on web platform
   */


  isWeb() {
    return _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'web';
  }
  /**
   * Safely set StatusBar overlay
   */


  setStatusBarOverlay(overlay) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isNative()) {
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setOverlaysWebView({
          overlay
        });
      }
    })();
  }
  /**
   * Safely hide splash screen
   */


  hideSplashScreen() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Admin_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isNative()) {
        yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
      }
    })();
  }
  /**
   * Get current platform name
   */


  getPlatform() {
    return _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform();
  }

}

PlatformService.ɵfac = function PlatformService_Factory(t) {
  return new (t || PlatformService)();
};

PlatformService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PlatformService,
  factory: PlatformService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7274:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 2239:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreen": () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7274);

const SplashScreen = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SplashScreen', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_splash-screen_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2177)).then(m => new m.SplashScreenWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map