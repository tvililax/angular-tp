/* 
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';

  import { CrudService } from "./services/crud/crud.service";

  import { ObservablesService } from "./services/observable/observable.service";
//

/* 
Componant configuration
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `
  })
//


/* 
Componant class definition
*/
  export class AppComponent implements OnInit {
    
    constructor(
        private CrudService: CrudService
    ){}

    ngOnInit(){}
  }
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
};
  