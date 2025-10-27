import { Component, OnInit } from '@angular/core';
import { NavController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { AvatarService } from 'src/app/services/avatar.service';

interface Trip {
  Driver_name: string;
  Driver_phone: string;
  Rider_name: string;
  Rider_phone: string;
  pickup: string;
  dropoff: string;
  price: number;
  reason?: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  isLoading = false;
  hasData = false;
  segmentModel = "default";

  tripHistory: Trip[] = [];
  cancelledHistory: Trip[] = [];
  
  displayedTripHistory: Trip[] = [];
  displayedCancelledHistory: Trip[] = [];

  private pageSize = 10;
  private currentTripPage = 0;
  private currentCancelledPage = 0;

  skeletOns: {}[] = [{}, {}, {}, {}];
  hideSkeleton = true;
  hasNoData = false;

  constructor(
    private nav: NavController,
    private chatService: AvatarService
  ) {}

  ngOnInit() {
    this.loadTripHistory();
    this.loadCancelledHistory();
  }

  loadTripHistory() {
    this.isLoading = true;
    this.chatService.getTrips().subscribe(
      (data: Trip[]) => {
        this.tripHistory = data;
        this.displayedTripHistory = this.tripHistory.slice(0, this.pageSize);
        this.hasData = this.tripHistory.length > 0;
        this.hasNoData = !this.hasData;
        this.isLoading = false;
        this.hideSkeleton = false;
      },
      (error) => {
        console.error('Error loading trip history:', error);
        this.isLoading = false;
        this.hideSkeleton = false;
      }
    );
  }

  loadCancelledHistory() {
    this.isLoading = true;
    this.chatService.getCancelledTrips().subscribe(
      (data: Trip[]) => {
        this.cancelledHistory = data;
        this.displayedCancelledHistory = this.cancelledHistory.slice(0, this.pageSize);
        this.hasData = this.hasData || this.cancelledHistory.length > 0;
        this.hasNoData = !this.hasData;
        this.isLoading = false;
        this.hideSkeleton = false;
      },
      (error) => {
        console.error('Error loading cancelled history:', error);
        this.isLoading = false;
        this.hideSkeleton = false;
      }
    );
  }

  loadMoreTrips(event: InfiniteScrollCustomEvent) {
    this.currentTripPage++;
    const nextItems = this.tripHistory.slice(
      this.currentTripPage * this.pageSize,
      (this.currentTripPage + 1) * this.pageSize
    );
    this.displayedTripHistory.push(...nextItems);
    event.target.complete();

    if (this.displayedTripHistory.length >= this.tripHistory.length) {
      event.target.disabled = true;
    }
  }

  loadMoreCancelledTrips(event: InfiniteScrollCustomEvent) {
    this.currentCancelledPage++;
    const nextItems = this.cancelledHistory.slice(
      this.currentCancelledPage * this.pageSize,
      (this.currentCancelledPage + 1) * this.pageSize
    );
    this.displayedCancelledHistory.push(...nextItems);
    event.target.complete();

    if (this.displayedCancelledHistory.length >= this.cancelledHistory.length) {
      event.target.disabled = true;
    }
  }

  applyFilter(event: any) {
    const filterValue = event.target.value.toLowerCase();
    if (this.segmentModel === 'default') {
      this.displayedTripHistory = this.tripHistory.filter(trip =>
        trip.Driver_name.toLowerCase().includes(filterValue) ||
        trip.Rider_name.toLowerCase().includes(filterValue) ||
        trip.pickup.toLowerCase().includes(filterValue) ||
        trip.dropoff.toLowerCase().includes(filterValue)
      );
    } else {
      this.displayedCancelledHistory = this.cancelledHistory.filter(trip =>
        trip.Driver_name.toLowerCase().includes(filterValue) ||
        trip.Rider_name.toLowerCase().includes(filterValue) ||
        trip.pickup.toLowerCase().includes(filterValue) ||
        trip.dropoff.toLowerCase().includes(filterValue)
      );
    }
  }

  goBack() {
    this.nav.pop();
  }
}
