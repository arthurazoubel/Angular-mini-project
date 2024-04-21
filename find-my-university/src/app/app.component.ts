import { Component, OnInit } from '@angular/core';

export interface userData {
  name: string;
  age: number
}

export interface University {
  id: number;
  universityName: string;
  city: string;
  country: string;
  webPage: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dataToPass: userData = {
    name: 'Arthur',
    age: 36
  }
  
  ngOnInit(): void {
    // this.http.get<University[]>('http://universities.hipolabs.com/search?country=Brazil')
    //   .subscribe( data => {
    //     //console.log(data);
    //     this.universitiesList = data
    //     console.log(this.universitiesList)
    //   })
  }

  // displayingUpdatedList() {
  //   console.log('this is the list with updated values', this.universitiesList)
  // }
}
