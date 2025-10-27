import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, collectionData, CollectionReference, doc, docData, DocumentData, Firestore, setDoc, updateDoc, deleteDoc, serverTimestamp, addDoc } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Photo } from '@capacitor/camera';
import { geohashForLocation} from 'geofire-common';
import { Observable } from 'rxjs';
import { Admin } from '../interfaces/admin';
import { Card } from '../interfaces/card';
import { docs } from '../interfaces/docs';
import { Drivers } from '../interfaces/drivers';
import { DriverUpdate } from '../interfaces/driverUpdate';
import { Rider } from '../interfaces/rider';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  
  private driverCollection: CollectionReference<DocumentData>;
  directory: any;
  userUID: string;
  userName: string;
  userEmail: string;
  profile: DocumentData;
  pathM: string;

  constructor(
    private auth: Auth,
    public firestore: Firestore,
    private storage: Storage,
    private router: Router
  ) {
    this.auth.onAuthStateChanged((user)=>{
      if (user){
      this.driverCollection = collection(this.firestore, 'Drivers');

    

     this.getUserProfile(user).subscribe(async (data) => {
      this.profile = data;

      console.log(data);

      if (this.profile){
      if (!this.profile.Access)
      this.router.navigateByUrl('details'); 

      if (this.profile.Driver_name)
      this.userName = this.profile.Driver_name;

      this.pathM = `uploads/${this.profile.uid}/profile.png`;
      }
     })
     
    }else{
      this.userName = "None";
      
    }
  })
  }

   getUserProfile(user) {
    const userDocRef = doc(this.firestore, `Admins/${user.uid}`);
     return docData(userDocRef);
  }

  async createItem(data: any): Promise<void> {
    const itemsCollection = collection(this.firestore, 'items');
    await addDoc(itemsCollection, data);
  }

  async RequestRideWithRiderDetails(user_Loc_coord, user_Des_coord, ID){
    try{
      const loc: Rider = {
        Loc_lat: 5.5096,
        Loc_lng: 7.0391,
        Rider_id: 'syusyugdshgsghdsdssd',
        Rider_name: "Chinedu",
        Rider_phone: 6478947352,
        Rider_imgUrl: "https://avatars.githubusercontent.com/u/7928001?v=4",
        Rider_rating: 3,
        Des_lat: user_Des_coord.lat,
        Des_lng: user_Des_coord.lng,
        Rider_Location: 'Owerri Imo State',
        Rider_Destination: 'Kenville Hotels Amabar',
        Rider_email: 'chndht@gmiail.ccjd',
        countDown: 10,
        cancel: false,
        price: 2230,
        cash: true,
        time: '',
        notificationID: undefined
      };
     
      const userDocRef = doc(this.firestore, 'Drivers', ID)
      await updateDoc(userDocRef, {onlineState: false});
      console.log('deleted current driver ID');
      await setDoc(doc(this.firestore, "Request",  ID), { ...loc});
      console.log('Added New driver ID');
    }catch(e){
      throw new Error(e);
    }
  }


  async RejectRider(){
    try {
      const userDocRef = doc(this.firestore, "Request",  this.auth.currentUser.uid)
      await updateDoc(userDocRef, {
        cancel: true,
        start: false
      });
      this.updateOnlineState(true);
      return true;
    } catch (e) {
      alert(e)
      return null;
    }
  }

  async PickRider(){
    try {
      const userDocRef = doc(this.firestore, "Request",  this.auth.currentUser.uid)
      await updateDoc(userDocRef, {
        start: true,
      });
      // this.updateOnlineState(true);
      return true;
    } catch (e) {
      alert(e)
      return null;
    }
  }


  async EndRide(){
    try {
      const userDocRef = doc(this.firestore, "Request",  this.auth.currentUser.uid)
      await updateDoc(userDocRef, {
        stop: true,
        start: false
      });
      // this.updateOnlineState(true);
      return true;
    } catch (e) {
      alert(e)
      return null;
    }
  }


  async createHistory(user){
      try{
        const loc: Rider = {
          Loc_lat: user.Loc_lat,
          Loc_lng: user.Loc_lng,
          Rider_id: user.Rider_id,
          Rider_name: user.Rider_name,
          Rider_phone: user.Rider_phone,
          Rider_imgUrl: user.Rider_imgUrl,
          Rider_rating: user.Rider_rating,
          Des_lat: user.Des_lat,
          Des_lng: user.Des_lng,
          Rider_Location: user.Rider_Location,
          Rider_Destination: user.Rider_Destination,
          Rider_email: user.Rider_email,
          countDown: 0,
          cancel: false,
          price: user.price,
          cash: user.cash,
          time: serverTimestamp(),
          notificationID: ''
        };
        await setDoc(doc(this.firestore, "Drivers",  `${this.auth.currentUser.uid}/History/${user.Rider_id}`), { ...loc});
        await setDoc(doc(this.firestore, "AllRides",  `${this.auth.currentUser.uid}/customer/${user.Rider_id}`), { ...loc});
      }catch(e){
        alert(e)
      }
    }
  


  //GO offline()

  async goOffline(){
    await deleteDoc(doc(this.firestore, "Drivers", this.auth.currentUser.uid));
  }

//delete the driver that has a request sent to him.
  async deleDriverFromRequest(ID){
    await deleteDoc(doc(this.firestore, "Request", ID))
  }


  async UpdateCountDown(time){
    try {
      const userDocRef = doc(this.firestore, "Request",  this.auth.currentUser.uid)
      await updateDoc(userDocRef, {
        countDown: time,
      });
      return true;
    } catch (e) {
      alert(e)
      return null;
    }
  }


  //Push driver info into the request database
  async PushDriverToRequest(coord, name, email, phone, car, cartype, plate, imageUrl, document){
    try{
    const loc: Drivers = {
      geohash: geohashForLocation([coord.coords.latitude, coord.coords.longitude]),
      Driver_lat: coord.coords.latitude,
      Driver_lng: coord.coords.longitude,
      Driver_id: this.auth.currentUser.uid,
      Driver_name: name,
      Driver_car: car,
      Driver_imgUrl: imageUrl,
      Driver_rating: 0,
      distance: 0,
      duration: 0,
      seats: 1,
      start: false,
      stop: false,
      intransit: false,
      cancel: false,
      Driver_cartype: cartype,
      Driver_plate: plate,
      Driver_num_rides: 0,
      Document: document,
      Driver_email: email,
      Driver_phone: phone,
      onlineState: false,
      Earnings: 0,
      Approved: false
    };
    await updateDoc(doc(this.firestore, "Request",  this.auth.currentUser.uid), { ...loc});
  }catch(e){
    throw new Error(e);
  }
   
    console.log('done')
  }


   ///create a new driver and publish info to database
   async CreateAdmin(name, email, phone, role, imageUrl, state, coordinates: any){
    try{
    const loc: Admin = {
      name: name,
      email: email,
      phone: phone,
      imageUrl: imageUrl,
      role: role,
      Access: state
    };
    await setDoc(doc(this.firestore, "Admins",  this.auth.currentUser.uid), { ...loc});
  }catch(e){
    throw new Error(e);
  }
  }


   ///create a new driver and publish info to database
   async UpdateDriver(coord, name, email, phone, car, cartype, plate, imageUrl, document, id){
    try{
    const loc: DriverUpdate = {
      geohash: geohashForLocation([coord.coords.latitude, coord.coords.longitude]),
      Driver_lat: coord.coords.latitude,
      Driver_lng: coord.coords.longitude,
      Driver_id: id,
      Driver_name: name,
      Driver_car: car,
      Driver_imgUrl: imageUrl,
      Driver_rating: 0,
      distance: 0,
      duration: 0,
      seats: 1,
      start: false,
      stop: false,
      intransit: false,
      cancel: false,
      Driver_cartype: cartype,
      Driver_plate: plate,
      Driver_num_rides: 0,
      Document: document,
      Driver_email: email,
      Driver_phone: phone,
    };
    await updateDoc(doc(this.firestore, "Drivers",  id), { ...loc});
  }catch(e){
    throw new Error(e);
  }
  }


  ///create a new driver and publish info to database
  async CreateNewDriver(coord, name, email, phone, car, cartype, plate, imageUrl, document){
    try{
    const loc: Drivers = {
      geohash: geohashForLocation([coord.coords.latitude, coord.coords.longitude]),
      Driver_lat: coord.coords.latitude,
      Driver_lng: coord.coords.longitude,
      Driver_id: this.auth.currentUser.uid,
      Driver_name: name,
      Driver_car: car,
      Driver_imgUrl: imageUrl,
      Driver_rating: 0,
      distance: 0,
      duration: 0,
      seats: 1,
      start: false,
      stop: false,
      intransit: false,
      cancel: false,
      Driver_cartype: cartype,
      Driver_plate: plate,
      Driver_num_rides: 0,
      Document: document,
      Driver_email: email,
      Driver_phone: phone,
      onlineState: false,
      Earnings: 0,
      Approved: false
    };
    await setDoc(doc(this.firestore, "Drivers",  this.auth.currentUser.uid), { ...loc});
  }catch(e){
    throw new Error(e);
  }
  }


     getDriver() {
      return collectionData(this.driverCollection, {
        idField: 'id',
      }) as Observable<Drivers[]>;
     }


    update(pokemon: Drivers) {
      const pokemonDocumentReference = doc(
        this.firestore,
        `pokemon/${pokemon.Driver_id}`
      );
      return updateDoc(pokemonDocumentReference, { ...pokemon });
    }


    async uploadImage(cameraFile: Photo, uid) {
   
      const storageRef = ref(this.storage, this.pathM);
  
      try {
        await uploadString(storageRef, cameraFile.base64String, 'base64');
  
        const imageUrl = await getDownloadURL(storageRef);
  
        const userDocRef = doc(this.firestore, `Drivers/${uid}`);
        await setDoc(userDocRef, {
          imageUrl,
        });
        return true;
      } catch (e) {
        console.log(e);
        return null;
      }
    }
  

  async uploadCartype(cameraFile: Photo, uid) {
   
    const storageRef = ref(this.storage, `uploads/${uid}/profile.png`);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      const imageUrl = await getDownloadURL(storageRef);

      const userDocRef = doc(this.firestore, `Cartypes/${uid}`);
      await updateDoc(userDocRef, {
        image:imageUrl,
        id: uid
      });
      return true;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
 
   getMessage(uid) {
    const userDocRef = collection(this.firestore, `Messages/${uid}/messages`);
    return collectionData(userDocRef);
  }

  getDocument(uid) {
    const userDocRef = collection(this.firestore, `Drivers/${uid}/Documents`);
    return collectionData(userDocRef);
  }

  getMessages() {
    return collectionData(collection(this.firestore, `Messages`));
  }


  getCancelledTrips() {
    const userDocRef = collection(this.firestore, `CancelledRides`);
    return collectionData(userDocRef);
  }

  getCards() {
    const userDocRef = collection(this.firestore, `Drivers/${this.auth.currentUser.uid}/Cards`);
    return collectionData(userDocRef);
  }

  getEarnings() {
    const userDocRef = doc(this.firestore, `Drivers/${this.auth.currentUser.uid}`);
    return docData(userDocRef);
  }

  getCartypes() {
    const userDocRef = collection(this.firestore, `Cartypes`);
    return collectionData(userDocRef);
  }

  getPrices() {
    const userDocRef = collection(this.firestore, `prices`);
    return collectionData(userDocRef);
  }

  getDocuments() {
    const userDocRef = collection(this.firestore, `Documents`);
    return collectionData(userDocRef);
  }

  getRoles() {
    const rolesRef = collection(this.firestore, 'Roles');
    return collectionData(rolesRef);
  }

  getRequests() {
    const userDocRef = doc(this.firestore,  `Request/${this.auth.currentUser.uid}`);
    return docData(userDocRef);
  }

  getDrivers(): Observable<any[]> {
    const driversRef = collection(this.firestore, 'Drivers');
    return collectionData(driversRef);
  }

  getTrips(): Observable<any[]> {
    const tripsRef = collection(this.firestore, 'Request');
    return collectionData(tripsRef);
  }

  getActiveRides(): Observable<any[]> {
    const activeRidesRef = collection(this.firestore, 'Request');
    return collectionData(activeRidesRef);
  }

  getCancelledRides(): Observable<any[]> {
    const cancelledRidesRef = collection(this.firestore, 'CancelledRides');
    return collectionData(cancelledRidesRef);
  }

  getPayments(): Observable<any[]> {
    const paymentsRef = collection(this.firestore, 'Payments');
    return collectionData(paymentsRef);
  }

  getAllBlogs(): Observable<any[]> {
    const blogsRef = collection(this.firestore, 'Blogs');
    return collectionData(blogsRef);
  }

  getAllDocuments(): Observable<any[]> {
    const documentsRef = collection(this.firestore, 'Documents');
    return collectionData(documentsRef);
  }

  getAllCarTypes(): Observable<any[]> {
    const carTypesRef = collection(this.firestore, 'Cartypes');
    return collectionData(carTypesRef);
  }

  getAllPrices(): Observable<any[]> {
    const pricesRef = collection(this.firestore, 'prices');
        return collectionData(pricesRef);
  }


  getRiders() {
    const userDocRef = collection(this.firestore, `Riders`);
    return collectionData(userDocRef);
  }

async addChatMessage(msg, uid) {
  return await addDoc(collection(this.firestore, `Messages/${uid}/messages`), {
    msg: msg,
    from: this.auth.currentUser.uid,
    createdAt: serverTimestamp(),
    myMsg: false,
    fromName: this.profile.name
  });
}

async createDocument(name, type, id, image, text) {
  try {
    const loc: docs = {
      name: name,
      type: type,
      id: id,
      image: image,
      text: text
    };
    await setDoc(doc(this.firestore, "Drivers",  `${this.auth.currentUser.uid}/Documents/${name}`), { ...loc});
    return true;
  } catch (e) {
    // alert(e)
    return null;
  }

}


async createUser(name, email, img, phone, uid) {
  try {
    const loc: Rider = {
      Loc_lat: 0,
      Loc_lng: 0,
      Rider_id: uid,
      Rider_name: name,
      Rider_phone: phone,
      Rider_imgUrl: img,
      Rider_rating: 0,
      Des_lat: 0,
      Des_lng: 0,
      Rider_Location: '',
      Rider_Destination: '',
      Rider_email: email,
      countDown: 0,
      cancel: false,
      price: 0,
      cash: true,
      notificationID: '',
      time: ''
    };
    await setDoc(doc(this.firestore, "Riders",  uid), { ...loc});
    return true;
  } catch (e) {
    return null;
  }
}


getDocs() {
  const userDocRef = collection(this.firestore, `Drivers/${this.auth.currentUser.uid}/Documents`);
  return collectionData(userDocRef);
}

async updateMessageInfo(uid){
  return await updateDoc(doc(this.firestore, `Messages/${uid}`),
  {
    new: false
  }
  )
}

async PriceSave(name, amt) {
  return await addDoc(collection(this.firestore, `prices`), {
     name: name,
     amount: amt,
  });
}


async DocumentUpdate(name, amt, uid, s) {
  const userDocRef = doc(this.firestore, `Documents/${uid}`)
  return await updateDoc(userDocRef, {
     name: name,
     amount: amt,
     type: s,
     id: uid
  });
}

async CustomerBlock(value, uid) {
  return await updateDoc(doc(this.firestore, `Riders/${uid}`), {
     Block: value,
  });
}


async DriverBlock(value, uid) {
  return await updateDoc(doc(this.firestore, `Drivers/${uid}`), {
     Block: value,
  });
}

async UpdateDriverApprove(value, uid) {
  return await updateDoc(doc(this.firestore, `Drivers/${uid}`), {
     Approved: value,
  });
}


async DriverUpdateEarnings(amt, uid) {
  return await updateDoc(doc(this.firestore, `Drivers/${uid}`), {
     Earnings: amt,
  });
}

async DocumentSave(name, amt, s) {
  return await addDoc(collection(this.firestore, `Documents`), {
     name: name,
     amount: amt,
     type: s
  });
}


async PriceUpdate(name, amt, uid) {
  const userDocRef = doc(this.firestore, `prices/${uid}`)
  return await updateDoc(userDocRef, {
     name: name,
     amount: amt,
     id: uid
  });
}



async CartypeSave(name, surcharge, mileage) {
  return await addDoc(collection(this.firestore, `Cartypes`), {
     name: name,
     surcharge: surcharge,
     mileage: mileage
  });
}

async CartypeUpdate(uid, name, surcharge, mileage) {
  const userDocRef = doc(this.firestore, `Cartypes/${uid}`)
  return await updateDoc(userDocRef, {
     name: name,
     surcharge: surcharge,
     mileage: mileage
  });
}


async CartypeDelete(uid) {
  const userDocRef = doc(this.firestore, `Cartypes/${uid}`)
  await deleteDoc(userDocRef);
}

async DocumentDelete(uid) {
  const userDocRef = doc(this.firestore, `Documents/${uid}`)
  await deleteDoc(userDocRef);
}

async PriceDelete(uid) {
  const userDocRef = doc(this.firestore, `prices/${uid}`)
  await deleteDoc(userDocRef);
}


async createCard(name, number, type, id) {
  try {
    const loc: Card = {
      name: name,
      number: number,
      type: type,
      id: id,
      selected: true
    };
    await setDoc(doc(this.firestore, "Drivers",  `${this.auth.currentUser.uid}/Cards/${name}`), { ...loc});
    return true;
  } catch (e) {
    alert(e)
    return null;
  }
  
}

async updateCArd(name, number, type, id, state) {
  try {
    const loc: Card = {
      name: name,
      number: number,
      type: type,
      id: id,
      selected: state
    };
    await updateDoc(doc(this.firestore, "Drivers",  `${this.profile.Rider_id}/Cards/${name}`), { ...loc});
    return true;
  } catch (e) {
    alert(e)
    return null;
  }

}


async updateOnlineState(state) {
  try {
    const userDocRef = doc(this.firestore, 'Drivers', `/${this.auth.currentUser.uid}/`)
    await updateDoc(userDocRef, {
      onlineState: state,
    });
    return true;
  } catch (e) {
    alert(e)
    return null;
  }
}


async updateEarnings(value) {
  try {
    const userDocRef = doc(this.firestore, 'Drivers', `/${this.auth.currentUser.uid}/`)
    await updateDoc(userDocRef, {
      Earnings: value,
    });
    return true;
  } catch (e) {
    alert(e)
    return null;
  }
}

}