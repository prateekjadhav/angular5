import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import { Http, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor( private http: HttpClient ) { }
  //configUrl = 'https://api.github.com/users/seeschweiler';
  configUrl = 'http://localhost:4343/test';
  loginUrl = 'http://localhost:4343/api/v1/users/login';
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }

//  getConfig(){
//   return this.http.get(this.configUrl);
//  }

getConfig(){
  //return this.http.get(this.configUrl);
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('authorization', 'kdkljdkl');
    this.http.post(this.configUrl, { headers: headers })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      }
      );
  });
 }

 getLoginDetail(data){
    // return new Promise((resolve, reject) => {
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //   //headers.append('keyword', btoa('llop'));
    //   //headers.append('authorization', 'kdkljdkl');
    //   //var data = {"username":username,"password":password};
    //   this.http.post(this.loginUrl,data)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     }
    //     );
    // });

    return this.http.post(this.loginUrl, data,{headers: new HttpHeaders().set('token', "abcd" ) });
 }

 getFrq(user_id, student_contract_id){
  return this.http.post(this.loginUrl, {"user_id":user_id,"student_contract_id":student_contract_id},{headers: new HttpHeaders().set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjY0NzM5NjYsImRhdGEiOnsidXNlcm5hbWUiOiJsaWdodC5hbmQuY29sb3VyQGljbG91ZC5jb20iLCJ1c2VyX2lkIjoxNjg5NCwidHlwZSI6InN0dWRlbnQifSwiaWF0IjoxNTI2NDcwMzY2fQ.FF5nHIN5VqTnKrmrGrZ7k0ZejbqdbhqqtbIxA2pZ2gI" ) });
}
 
}
