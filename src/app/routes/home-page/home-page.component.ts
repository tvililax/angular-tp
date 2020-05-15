import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor() {}

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
