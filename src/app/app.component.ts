import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell';


  constructor(
    public authService: AuthService,
  ) { 

  }
  
}
//    const provider = new GoogleAuthProvider();
//provider.setCustomParameters({prompt: 'select_account'});
//this.auth.signInWithPopup(this.auth,provider);
 //signInWithPopup(this.auth,provider);
