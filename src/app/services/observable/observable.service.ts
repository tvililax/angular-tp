import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class ObservablesService {

  constructor() {}

  protected userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public getUserInfo(): Observable<any> { return this.userInfo };

  protected postList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public getPostList(): Observable<any> { return this.postList };

  public setObservableData = (type: string, data: any) => {

    switch(type){ 
      case 'user':
      this.userInfo.next(data);
      break;

      case 'posts':
      this.postList.next(data);
      break;

      default:
      break;
    };

  };

}
