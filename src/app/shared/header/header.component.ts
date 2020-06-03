import { Component, OnInit } from '@angular/core';
import { ObservablesService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})


export class HeaderComponent implements OnInit {

        // Properties
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
        public logout = () => {
            // Delete localstorage
            localStorage.removeItem('userEmail');
        
            // Set user info obserrbale value
            this.ObservablesService.setObservableData('users', null);
            //this.Router.navigateByUrl('/');
            location.reload();

        }
    //

    ngOnInit(){};

}
