import { Component, Input, ViewChild } from '@angular/core';
import { UniversitiesListComponent } from '../universities-list/universities-list.component';
import { HttpClient } from '@angular/common/http';
import { userData, University } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  country: string = ''
  @Input() someName: userData = {name:'', age:0};
  @ViewChild(UniversitiesListComponent) childComponent: UniversitiesListComponent | undefined

  constructor(private http: HttpClient) {
  }

  countryTyped($event:any) {
    this.country = $event.target.value
    if ($event.key === 'Enter' && $event.target.value) {
      this.childComponent?.generateList(this.country)
    }
  }

  callGenerateList(country: string) {
    this.childComponent?.generateList(this.country)
  }
}
