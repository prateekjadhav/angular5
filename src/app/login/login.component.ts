import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginserviceService, private http: HttpClient) { }
  is_submited = false;
  formdata;
  showdate;
  config;
  
  ngOnInit() {
    //this.showdate = this.loginService.showTodayDate();

    //this.showdate = this.loginService.getConfig();
    // this.loginService.getConfig().subscribe(response => {
    //   this.config = JSON.stringify(response);
    //   console.log(response);
    // });

    // this.loginService.getConfig().then(response => {
    //   this.config = JSON.stringify(response);
    //   console.log(response);
    // });



    // this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
    //   this.config = data;
    //   console.log(this.config);
    // });

    this.formdata = new FormGroup({
      username: new FormControl("light.and.colour@icloud.com"),
      password: new FormControl("education")
   });

   
  }

  onSubmit(data) { 
    this.is_submited = true;
    // this.loginService.getLoginDetail(data).then(response => {
    //   this.config = JSON.stringify(response);
    //   console.log(response);
    // });

    this.loginService.getLoginDetail(data).subscribe(response => {
      this.config = JSON.stringify(response);
      console.log(response);
    });
   }

}
