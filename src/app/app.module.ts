//importing service
import {GotService} from './got.service';
//importing orderBy pipe
import { OrderModule } from 'ngx-order-pipe';
//importing formsmodule
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
//importing routermodule for routing
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//importing all the components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardViewComponent } from './card-view/card-view.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      //redirecting to home if nothing is suffixed
      {path:'',redirectTo:'home',pathMatch:'full'},
      // using view and redirect paths interchangably in order to click api links and get data using each other view
      {path:'view/:url',component:CardViewComponent},
      {path:'redirect/:url',component:CardViewComponent},
      //if no path is found
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
