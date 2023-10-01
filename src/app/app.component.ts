import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithPopup, GoogleAuthProvider, getAuth, Auth } from "firebase/auth";

//import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell';

  constructor(
    public auth : AngularFireAuth,
 //  public auth: Auth = getAuth()
  ) { 

    firebase.initializeApp(firebaseConfig);
  }

  signInClicked(): void {
 

    const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
//this.auth.signInWithPopup(this.auth,provider);
 //signInWithPopup(this.auth,provider);

 const auth = getAuth();
 signInWithPopup(auth, provider)

  }

  signOutClicked(): void {
    //this.auth.signOut();
  }
}
