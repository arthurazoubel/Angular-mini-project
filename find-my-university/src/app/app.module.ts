import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UniversitiesListComponent } from './universities-list/universities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversitiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
