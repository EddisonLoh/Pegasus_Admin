import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ModalOptions } from '@ionic/angular';
import { DriverDocumentsComponent } from 'src/app/driver-documents/driver-documents.component';
import { DriverComponent } from 'src/app/driver/driver.component';
import { AvatarService } from 'src/app/services/avatar.service';

interface Driver {
  Approved: boolean;
  Driver_id: string;
  Driver_name: string;
  Driver_phone: string;
  Driver_car: string;
  Driver_carType: string;
  Driver_email: string;
  Driver_plate: string;
  Driver_rating: number;
  Driver_earnings: number;
  Driver_latitude: number;
  Driver_longitude: number;
  Driver_image: string;
  isApproved: boolean;
  Driver_num_rides: number;
  license: string;
  mileage: number;
  onlineState: boolean;
  submissionDate: any;
  Document: boolean;
}

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {
  skeletOns: {}[] = [{}, {}, {}, {}];
  hideSkeleton: boolean = true;
  hasNoData: boolean = false;
  segmentModel = "default";

  records = { data: [] as Driver[] };
  records2 = { data: [] as Driver[] };

  constructor(
    private chatService: AvatarService,
    public modalCtrl: ModalController,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async ionViewDidEnter() {
    this.hideSkeleton = true;
    const drivers = this.chatService.getDrivers();

    drivers.subscribe((d: Driver[]) => {
      this.records.data = [];
      this.records2.data = [];
      
      d.forEach(element => {
        if (element.isApproved||element.Approved) {
          this.records.data.push(element);
        } else {
          this.records2.data.push(element);
        }
      });

      if (d.length === 0) {
        this.hasNoData = true;
      }
      this.hideSkeleton = false;
    });
  }

  applyFilter(event: any) {
    const filterValue = event.target.value.toLowerCase();
    this.records.data = this.records.data.filter(driver => 
      driver.Driver_name.toLowerCase().includes(filterValue) ||
      driver.Driver_phone.toLowerCase().includes(filterValue) ||
      driver.Driver_email.toLowerCase().includes(filterValue)
    );
  }

  applyFilter2(event: any) {
    const filterValue = event.target.value.toLowerCase();
    this.records2.data = this.records2.data.filter(driver => 
      driver.Driver_name.toLowerCase().includes(filterValue) ||
      driver.Driver_phone.toLowerCase().includes(filterValue) ||
      driver.Driver_email.toLowerCase().includes(filterValue)
    );
  }

  async AddDriver() {
    const options: ModalOptions = {
      component: DriverComponent
    };
    const modal = await this.modalCtrl.create(options);
    modal.present();
    await modal.onWillDismiss();
  }

  async EditDriver(item: Driver) {
    const options: ModalOptions = {
      component: DriverComponent,
      componentProps: {
        info: item,
      }
    };
    const modal = await this.modalCtrl.create(options);
    modal.present();
    await modal.onWillDismiss();
  }

  async BlockDriver(element: Driver) {
    await this.chatService.DriverBlock(true, element.Driver_id);
  }

  async UnBlockDriver(element: Driver) {
    await this.chatService.DriverBlock(false, element.Driver_id);
  }

  async gotoDocs(e: Driver) {
    const options: ModalOptions = {
      component: DriverDocumentsComponent,
      componentProps: {
        info: e,
      }
    };
    const modal = await this.modalCtrl.create(options);
    modal.present();
    await modal.onWillDismiss();
  }

  async toggleApproval(driver: Driver) {
    const loading = await this.loadingController.create();
    await loading.present();

    const targetIsApproved = !(driver.isApproved || driver.Approved);
    const action = targetIsApproved ? 'Approved' : 'Disapproved';

    try {
      await this.chatService.UpdateDriverApprove(targetIsApproved, targetIsApproved, driver.Driver_id);

      driver.isApproved = targetIsApproved;
      driver.Approved = targetIsApproved;

      if (targetIsApproved) {
        await (this.chatService as any).notifyDriverStatusUpdate?.(driver.Driver_id, 'approved');
      }

      const alert = await this.alertController.create({
        header: `Driver ${action}`,
        message: `${driver.Driver_name} has been ${action.toLowerCase()} successfully.`,
        buttons: ['OK'],
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'There was an error updating the driver status.',
        buttons: ['OK'],
      });
      await alert.present();
    } finally {
      loading.dismiss();
    }
  }

  ngOnInit() {}
}
