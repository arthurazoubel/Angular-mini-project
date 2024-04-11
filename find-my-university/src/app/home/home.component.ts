import { Component } from '@angular/core';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  universitiesList: University[] = []
  country: string = ''
  errorInSearch: string = ''

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
          this.errorInSearch = 'error-display'
        } else {
          this.errorInSearch = 'list-display'
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

}
