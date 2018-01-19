import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';

@Injectable()
export class ServerService {
constructor(private http: Http) {}
storeServers(servers: any[]) {
    return this.http.post('https://ng-http-demo-bfcd8.firebaseio.com/data.json', servers);
}

getServers() {
    return this.http.get('https://ng-http-demo-bfcd8.firebaseio.com/data.json')
    .map(
        (response: Response) => {
            const data = response.json();
             return data;
        }
    );
}

}