import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(
    private CrudService: CrudService,
    private Router: Router
  ) {}

  private getUserInfo = (email: String ) => {
    // Use CrudService to get user infos
    this.CrudService.readOneItem('users', `email=${email}`)
    .then( data => {
        console.log('SUCCES request', data);
    })
    .catch( error => {
        console.log('ERROR request', error);
    });
  };

  ngOnInit(){
    this.getUserInfo('Sincere@april.biz');
  }

}
