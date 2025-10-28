import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-driver-documents',
  templateUrl: './driver-documents.component.html',
  styleUrls: ['./driver-documents.component.scss'],
})
export class DriverDocumentsComponent implements OnInit {
 @Input() info;
  skeletOns: {}[];
  hideSkeleton: boolean;
  drivers: any;
  hasNoData: boolean;
  segmentModel = "default";
  triphistory: any;
  public rows: any[];
  redy: number = 3;
  cancelledhistory: any;
  records: any;
  constructor(private chatService: AvatarService, public modalCtrl: ModalController, private loadingController: LoadingController, public alertController: AlertController) { }
 
  ngOnInit(): void {
    console.log(this.info);
  }


  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.drivers = (this.chatService.getDocument(this.info.Driver_id))
    this.records = [];
  this.drivers.subscribe((d)=>{
   
    this.records = d;
    console.log(d);
    d.forEach(element => {
    
     console.log(element);
   });
  })

}

closeModal(){
  this.modalCtrl.dismiss();
}


}