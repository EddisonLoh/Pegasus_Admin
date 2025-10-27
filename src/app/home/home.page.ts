import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
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
export class HomePage implements OnInit, AfterViewInit {
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

  constructor(
    private auth: Auth,
    private menuCtrl: MenuController,
    public map: MapService,
    private database: AvatarService,
    public nav: NavController
  ) {}

  async ngOnInit() {
    try {
      await Geolocation.checkPermissions();
      this.coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
      
      this.LatLng = {
        lat: this.coordinates.coords.latitude,
        lng: this.coordinates.coords.longitude
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
    }
  }

  async ngAfterViewInit() {
    await this.map.createMap(this.mapRef.nativeElement, this.coordinates);
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
      const markerLatLng = {
        lat: driver.Driver_lat,
        lng: driver.Driver_lng
      };
      await this.map.newMap.addMarker({
        coordinate: markerLatLng,
        iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
        title: driver.Driver_name || 'Driver',
      });
    }
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }
}
