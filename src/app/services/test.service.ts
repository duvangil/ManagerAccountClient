import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TestService {

    private option: RequestOptions;
    constructor(private _http: Http) {
     }

     Login() {
        const endPoint = 'http://manageraccount.azurewebsites.net/api/account/login';
        const jsonBody = {
            useremail: 'esteban@gmail.com',
            UserPassword: '4321'
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(endPoint, jsonBody, { headers: headers });
      }
}
