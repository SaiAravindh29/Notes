import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  sname : string = '';
  class: string = '';
  dob: string = '';
  phone: Number = 0;

  student = {
    sname: '',
    class: '',
    dob: '',
    phone: null
  };

  constructor(private router: Router,  private snackBar: MatSnackBar, private ApiService: ApiService) {
    console.log('Constructor: component instance created');
  }

  
  lgOut(){
    this.router.navigate(['login']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open( message, action );
  }

  addStudent() {

    this.ApiService.addStudent(this.student).subscribe(response => {
      console.log('Student added:', response);
      // Optionally reset the form or provide user feedback
    }, error => {
      console.error('Error adding student:', error);
    });
  }

  // addStudent(){
  //   console.log('Student Name:', this.sname);
  //   console.log('Class:', this.class);
  //   console.log('DOB:', this.dob);
  //   console.log('Phone:', this.phone);
  //   this.openSnackBar('Student added successfully!', 'Close');
  // }

}
