import { Routes } from '@angular/router';
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { ConnectedPageComponent } from "./routes/connected-page/connected-page.component";

export const AppRouterModule: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'connected',
        component: ConnectedPageComponent
    }
];
