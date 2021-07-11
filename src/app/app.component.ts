import { Component,NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Router } from '@angular/router';

const { App } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Edonee';
   slug

  constructor(private router: Router, private zone: NgZone) {
    this.initializeApp();
}

initializeApp() {
    App.addListener('appUrlOpen', (data: any) => {
        this.zone.run(() => {
            // Example url: https://beerswift.app/tabs/tab2
            // slug = /tabs/tab2
            // this.slug = data.url
            const slug = data.url.split(".com").pop();
            if (slug.includes('login') ) {
              let token  = slug.split('token=')[1];
              localStorage.setItem('token',token)
                
                this.router.navigate(['/dashboard']);
            }else{
              this.router.navigateByUrl(slug);
            }
            // If no match, do nothing - let regular routing
            // logic take over
        });
    });
}
}
