import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FENG TECH';

  name = 'Get Current Url Route Demo';
  currentRoute: string = '';

  constructor(private router: Router){
    console.log(router.url);
    
    //get current root path
    this.router.events.forEach((event) => { 
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute);
      }
    });
  };
}
