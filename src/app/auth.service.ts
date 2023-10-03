import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {

 
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  async AuthLogin(provider : GoogleAuthProvider) {
    try {
      const result = await this.afAuth
        .signInWithPopup(provider).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "  " + errorMessage);
        });;
      console.log('You have been successfully logged in!');
    }
    catch (error) {
      console.log(error);
    }
  }

  signOutClicked(){
    this.afAuth.signOut();
  }

}
