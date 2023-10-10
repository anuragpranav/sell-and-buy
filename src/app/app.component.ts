import { Component } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'buy-and-sell';

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

   // Sign in with Google
   GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider : GoogleAuthProvider) {
    try {
          await this.afAuth.signInWithPopup(provider).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " :  " + errorMessage);
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
//const provider = new GoogleAuthProvider();
//provider.setCustomParameters({prompt: 'select_account'});
//this.auth.signInWithPopup(this.auth,provider);
 //signInWithPopup(this.auth,provider);
