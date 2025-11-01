import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NavController, MenuController, Platform } from '@ionic/angular';
import { MapService } from '../services/map.service';
import { AvatarService } from '../services/avatar.service';
import { Auth } from '@angular/fire/auth';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  @ViewChild('earningsChart') earningsChartRef: ElementRef;
  @ViewChild('driversChart') driversChartRef: ElementRef;
  @ViewChild('ridersChart') ridersChartRef: ElementRef;
  @ViewChild('tripsChart') tripsChartRef: ElementRef;

  earnings: number = 0;
  numDrivers: number = 0;
  numRiders: number = 0;
  numTrips: number = 0;
  coordinates: Position;
  LatLng: { lat: number; lng: number };

  showMap: boolean = true;
  isMobile: boolean = false;

  private resizeObserver: ResizeObserver;
  private isDragging = false;
  private startX: number;
  private startWidth: number;

  private platformSubscription: any;

  constructor(
    private auth: Auth,
    private menuCtrl: MenuController,
    public map: MapService,
    private database: AvatarService,
    public nav: NavController,
    private platform: Platform
  ) {
    this.checkPlatformSize();
  }

  async ngOnInit() {
    this.platformSubscription = this.platform.resize.subscribe(() => {
      this.checkPlatformSize();
    });

    try {
      // Check if running on mobile
      if (this.platform.is('capacitor')) {
        // Request permissions explicitly for mobile
        const permResult = await Geolocation.requestPermissions();
        if (permResult.location !== 'granted') {
          console.error('Location permission not granted');
          // Set default coordinates if permission denied
          this.coordinates = {
            coords: {
              latitude: 0,
              longitude: 0,
              accuracy: 0,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null
            },
            timestamp: 0
          };
        } else {
          this.coordinates = await Geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000 // 10 second timeout
          });
        }
      } else {
        // Web browser handling
        this.coordinates = await Geolocation.getCurrentPosition({ 
          enableHighAccuracy: true 
        });
      }

      this.LatLng = {
        lat: this.coordinates.coords.latitude || 0,
        lng: this.coordinates.coords.longitude || 0
      };

      this.menuCtrl.enable(true);

      this.database.getEarnings().subscribe((d) => {
        this.earnings = d.Earnings;
        this.updateChart(this.earningsChartRef, [this.earnings], 'Earnings');
      });

      this.database.getDrivers().subscribe((d) => {
        this.numDrivers = d.length;
        this.updateChart(this.driversChartRef, [this.numDrivers], 'Drivers');
        this.updateDriverMarkers(d);
      });

      this.database.getRiders().subscribe((d) => {
        this.numRiders = d.length;
        this.updateChart(this.ridersChartRef, [this.numRiders], 'Riders');
      });

      // Assuming you have a method to get trips data
      this.database.getTrips().subscribe((d) => {
        this.numTrips = d.length;
        this.updateChart(this.tripsChartRef, [this.numTrips], 'Trips');
      });

    } catch (e) {
      console.error('Error in ngOnInit:', e);
      // Set default coordinates if there's an error
      this.coordinates = {
        coords: {
          latitude: 0,
          longitude: 0,
          accuracy: 0,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        },
        timestamp: 0
      };
      this.LatLng = { lat: 0, lng: 0 };
    }
  }

  async ngAfterViewInit() {
    try {
      if (this.mapRef && this.mapRef.nativeElement) {
        await this.map.createMap(this.mapRef.nativeElement, this.coordinates);
        this.setupMapResize();
      } else {
        console.error('Map reference not found');
      }
    } catch (e) {
      console.error('Error creating map:', e);
    }
  }

  updateChart(chartRef: ElementRef, data: number[], label: string) {
    const ctx = chartRef.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Current'],
        datasets: [{
          label: label,
          data: data,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  async updateDriverMarkers(drivers) {
    for (let driver of drivers) {
      // Validate that lat and lng are valid numbers
      const lat = parseFloat(driver.Driver_lat);
      const lng = parseFloat(driver.Driver_lng);
      
      // Skip this driver if coordinates are invalid
      if (isNaN(lat) || isNaN(lng) || lat === 0 && lng === 0) {
        console.warn('Invalid coordinates for driver:', driver.Driver_name, 'lat:', driver.Driver_lat, 'lng:', driver.Driver_lng);
        continue;
      }

      const markerLatLng = {
        lat: lat,
        lng: lng
      };
      
      try {
        await this.map.newMap.addMarker({
          coordinate: markerLatLng,
          iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
          title: driver.Driver_name || 'Driver',
        });
      } catch (error) {
        console.error('Error adding marker for driver:', driver.Driver_name, error);
      }
    }
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }

  toggleMap() {
    this.showMap = !this.showMap;
  }

  private checkPlatformSize() {
    this.isMobile = this.platform.width() < 768;
    this.showMap = !this.isMobile;
  }

  private setupMapResize() {
    const mapElement = this.mapRef?.nativeElement;
    if (!mapElement) return;

    const resizeHandle = mapElement.querySelector('.dashboard-map::after');
    if (!resizeHandle) return;

    const handleMouseDown = (e: MouseEvent) => {
      this.isDragging = true;
      this.startX = e.clientX;
      this.startWidth = mapElement.offsetWidth;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!this.isDragging) return;
      const delta = e.clientX - this.startX;
      const newWidth = Math.max(200, Math.min(600, this.startWidth + delta));
      mapElement.style.width = `${newWidth}px`;
    };

    const handleMouseUp = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    resizeHandle.addEventListener('mousedown', handleMouseDown);
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.platformSubscription) {
      this.platformSubscription.unsubscribe();
    }
  }
}
