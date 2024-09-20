import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {
    console.log('Constructor: component instance created');
  }

  lgOut(){
    this.router.navigate(['login']);
  }

  Value = 0;
  onIncrement(){
    this.Value++;
    if(this.Value == 10){
      this.Value = 0;
      this.router.navigate(['login']);
    }

  }

  onDecrement(){
    this.Value--;
    if(this.Value == -10){
      this.Value = 0;
      this.router.navigate(['login']);
    }
  }




}
