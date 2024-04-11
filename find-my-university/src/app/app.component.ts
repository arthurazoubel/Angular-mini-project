import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface University {
  // Define the structure of your data
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
  universitiesList: University[] = []
  country: string = ''
  errorText: string = ''

  constructor(private http: HttpClient) {
  }

  countryTyped($event:any) {
    this.country = $event.target.value
  }

  generateList(country: string) {
    this.universitiesList = []
    this.http.get<any[]>(`http://universities.hipolabs.com/search?country=${country}`)
      .subscribe(data => {
        if (!data.length) {
          this.errorText = 'No returns for that country'
        } else {
          data.map((item, index) => {
            this.universitiesList.push(
              {
                id: index,
                universityName: item.name,
                city: item['state-province'] ?? '(no city provided)',
                country: item.country,
                webPage: item.web_pages[0],
              }
            )
          })
          console.log(this.universitiesList)
        }
      })
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
