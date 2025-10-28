import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.page.html',
  styleUrls: ['./payout.page.scss'],
})
export class PayoutPage implements OnInit {
  skeletOns: {}[];
  hideSkeleton: boolean;
  drivers: any;
  hasNoData: boolean;
  filteredRecords: any[] = [];
  currentPage = 0;
  pageSize = 5;
  
  constructor(
    private chatService: AvatarService,
    public loadingController: LoadingController
  ) { }

  async ionViewDidEnter() {
    this.skeletOns = [{}, {}, {}, {}];
    this.hideSkeleton = true;
    this.drivers = this.chatService.getDrivers();

    this.drivers.subscribe((d) => {
      this.filteredRecords = [];
      d.forEach(element => {
        if (element.Approved === true) {
          this.filteredRecords.push(element);
        }
      });
      
      if (d.length === 0) {
        this.hasNoData = true;
        this.hideSkeleton = false;
      } else {
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
    });
  }

  applyFilter(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredRecords = this.filteredRecords.filter((item: any) =>
      item.Driver_name.toLowerCase().includes(query) ||
      item.Driver_phone.toLowerCase().includes(query) ||
      item.Driver_email.toLowerCase().includes(query)
    );
    this.currentPage = 0;
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }

  async gotoDocs(e) {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.chatService.DriverUpdateEarnings(e.Earnings + 100, e.Driver_id);
    loading.dismiss();
  }

  ngOnInit() {}
}
