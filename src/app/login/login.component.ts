import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _userId: string = '';
  password: string = '';
  textMessage: any = '';
  constructor(private router: Router,  private snackBar: MatSnackBar) {
    console.log('Constructor: component instance created');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open( message, action );
  }

  set userId(value: string) {
    this._userId = value;
    this.textMessage = value; 
  }


  submit(){
    console.log('UserId:', this.userId);
    console.log('Password:', this.password);

    if(this._userId == 'Sai1@gmail.com' && this.password == 'good'){
      this.openSnackBar('Login successful!', 'Close');
      this.router.navigate(['studentEntry']);
    }else {
      this.openSnackBar('Invalid credentials!', 'Close'); 
      // this.navctrl.navigateRoot("inventory-list-details");
      // this.router.navigate(['/about']);
    }
   
  }
  
}
