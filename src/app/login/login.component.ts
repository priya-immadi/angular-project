// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   loginForm: FormGroup = new FormGroup("");
//   constructor(private fb: FormBuilder, private router: Router) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],

//     })
//   }
//   reqpwd: any;
//   checkLogin() {
//     this.reqpwd = this.loginForm.value.username.slice(0, 3) + "123"
//     if (this.loginForm.value.username == "admin" && this.loginForm.value.password == "123") {
//       alert("login success")
//       this.router.navigateByUrl("/admin/view")
//       localStorage.setItem("adminloggedin", JSON.stringify(this.loginForm.value))
//     }
//     else if (this.loginForm.value.password == this.reqpwd) {
//       alert("success")
//       this.router.navigateByUrl("/user/view")
//       localStorage.setItem("userloggedin", JSON.stringify(this.loginForm.value))
//     }
//     else {
//       alert("login failed")
//     }
//   }
// }





import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit { 
  loginForm: FormGroup;
  reqpwd: any;
  
  // Custom popup kanipinchadaniki indicator
  showModal: boolean = true; 

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Page load avvagane popup auto ga kanipisthundi, browser alert block cheyadhu
    this.showModal = true; 
  }

  // Ee function ni custom alert lo unna close button ki call chestham
  closeModal() {
    this.showModal = false;
  }

  checkLogin() {
    // Form submit cheyagane popup automatic ga vellipothundi
    this.showModal = false; 

    this.reqpwd = this.loginForm.value.username.slice(0, 3) + "123";
    
    if (this.loginForm.value.username == "admin" && this.loginForm.value.password == "123") {
      alert("login success");
      this.router.navigateByUrl("/admin/view");
      localStorage.setItem("adminloggedin", JSON.stringify(this.loginForm.value));
    }
    else if (this.loginForm.value.password == this.reqpwd) {
      alert("success");
      this.router.navigateByUrl("/user/view");
      localStorage.setItem("userloggedin", JSON.stringify(this.loginForm.value));
    }
    else {
      alert("login failed");
    }
  }
}










