import { Component, OnInit } from '@angular/core';
import { CrudService } from "./services/crud/crud.service";
import { ObservablesService } from "./services/observable/observable.service";

@Component({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    `
})

export class AppComponent implements OnInit {

    constructor( private CrudService: CrudService ){}

    async ngOnInit(){
        await this.CrudService.readOneItem('users', `email=${localStorage.getItem('userEmail')}`);
    };

}

export class HeaderComponent implements OnInit {

public userData: any;

constructor( private ObservablesService: ObservablesService ){

    // Get user data observer
    this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
        if(userDataObserver === null) {
            this.userData = null

        } else { 
            this.userData = userDataObserver[0] 
        }

    })

}

ngOnInit(){};

};
