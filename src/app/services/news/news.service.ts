import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({

    providedIn: 'root'
    
})

export class NewsService {
    /* pour les calls API */
    httpOptionsJson: object;

    constructor(private http: HttpClient, private router: Router) {

        this.httpOptionsJson = {

            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
            
        };

    }

    getByMedia(media, keyword = '') { /* recuperer un media par un/deux parametre(s) dans l'url de l'api */

        return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${media}&q=${keyword}&apiKey=19f68dbde22e4e04a8b19e7038ec86a4`);

    }

    getAllMedias() { /* recuperer tous les medias dispo */

        return this.http.get(`https://newsapi.org/v2/sources?apiKey=19f68dbde22e4e04a8b19e7038ec86a4`);
    
    }

}
