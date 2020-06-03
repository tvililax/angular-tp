import { Component, OnInit } from '@angular/core';
import { ObservablesService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  /* 
    Declaration
    */
        // Properties
        public userData: any;

        constructor(
            private ObservablesService: ObservablesService
        ){
            // Get user data observer
            this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
                if(userDataObserver === null) { this.userData = null }
                else{ this.userData = userDataObserver[0] }
            })
        }
    //

    ngOnInit(){};

}
