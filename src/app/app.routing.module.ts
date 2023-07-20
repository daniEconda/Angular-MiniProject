import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { DataResolverService } from "./resolvers/data.resolver.service";
import { PagenotFoundComponent } from "./pagenot-found/pagenot-found.component";

const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'contact-reactive', loadChildren:()=> 
        import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule) 
    },

    {
        path: 'contact-template/:id', component: ContactComponent, 
        resolve: { departments: DataResolverService} 
    },

    {path: 'home', component: HomeComponent },

    { path: '**', component: PagenotFoundComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class  AppRoutingModule {}