import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  let testpullresponse:any;
 constructor(private _router: Router){

 }
 routeToLink(data: any) {
  if (!data.hasOwnProperty('children') && data.routerLink) {
    this._router.navigate([data.routerLink]);
  }
}

}
