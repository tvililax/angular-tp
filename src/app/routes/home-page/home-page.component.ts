import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { NewsService } from '../../services/news/news.service';

@Component({

    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styles: []
    
})

export class HomePageComponent implements OnInit {

    /* variables pour sources */
    public mediaSelected: any;
    public sources: any;
    public listMedias: any;
    public keyword: string;

    constructor(
        private CrudService: CrudService,
        private newsService: NewsService
    ) {}

    getUserInfo = (email: String ) => {
    // Use CrudService to get user infos
        this.CrudService.readOneItem('users', `email=${email}`)
        .then( data => {
            console.log('SUCCES request', data);
            if (data.length < 1) { // si on ne recupere pas d'user
                console.log("no data")
            }
        })

        .catch( error => {
            console.log('ERROR request', error);
        });

    };

    ngOnInit(){ 

        // initialiser une valeur à notre objet UserInfo
        // this.getUserInfo('Sincere@april.biz');

        // recuprer toutes les sources medias dispo
        this.newsService.getAllMedias().subscribe( sources => { 

            this.sources = sources;
            console.log(this.sources);

            if (localStorage.getItem('mediaSelected')) { // si le Local Storage contient une source
                this.mediaSelected = localStorage.getItem('mediaSelected');
                this.search(this.mediaSelected); // alors on execute la requete
            }

        });

    }

    // fonction de recherche
    search(query = null) {

        if (query) {

            this.mediaSelected = query; // parametre = id de la source
            localStorage.setItem('mediaSelected', query); // on stocke dans Local Storage la source selectionnee

        } else {

            localStorage.setItem('mediaSelected', this.mediaSelected);

        }

        if (this.keyword) { // si un mot cle est entre

            localStorage.setItem('keyword', this.keyword); // on stocke le mot cle

        } else {

            localStorage.removeItem('keyword');

        }

        //appel a la fonction getByMedia avec 2 parametres
        //on recupere les articles du media et mot cle entre
        this.newsService.getByMedia(this.mediaSelected, this.keyword).subscribe( sources => { 

            this.listMedias = sources;
            console.log(sources);

        });
    }

}
