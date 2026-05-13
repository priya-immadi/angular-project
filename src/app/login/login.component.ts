import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup("");
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  reqpwd: any;
  checkLogin() {
    this.reqpwd = this.loginForm.value.username.slice(0, 3) + "123"
    if (this.loginForm.value.username == "admin" && this.loginForm.value.password == "123") {
      alert("login success")
      this.router.navigateByUrl("/admin/view")
      localStorage.setItem("adminloggedin", JSON.stringify(this.loginForm.value))
    }
    else if (this.loginForm.value.password == this.reqpwd) {
      alert("success")
      this.router.navigateByUrl("/user/view")
      localStorage.setItem("userloggedin", JSON.stringify(this.loginForm.value))
    }
    else {
      alert("login failed")
    }
  }
}












