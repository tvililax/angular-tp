import { Component, OnInit } from '@angular/core';
import { ObservablesService } from 'src/app/services/observable/observable.service';

@Component({

    selector: 'app-connected-page',
    templateUrl: './connected-page.component.html',
    styles: []
    
})

export class ConnectedPageComponent implements OnInit {

    public userData: any;
    router: any;
    Router: any;

    constructor(
        private ObservablesService: ObservablesService,
    )
    {
        // Get user data observer
        this.ObservablesService.getUserInfo().subscribe( userDataObserver => {

            if (userDataObserver === null) { 

                this.userData = null 

            } else { 

                if(userDataObserver.length > 0){
                    // Set local storage
                    localStorage.setItem('userEmail', userDataObserver[0].email );

                    // Update userData value
                    this.userData = userDataObserver[0];

                } else {

                    this.userData = null

                }
            }

        })
    }

    ngOnInit(): void {}

}
