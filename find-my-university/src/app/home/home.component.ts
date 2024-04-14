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
  errorInSearch: boolean = true
  displayText: string = 'No country provided'

  constructor(private http: HttpClient) {
  }

  countryTyped($event:any) {
    this.country = $event.target.value
    if ($event.key === 'Enter' && $event.target.value) {
      this.generateList(this.country)
    }
  }

  generateList(country: string) {
    this.universitiesList = []
    if (country === '') {
      this.errorInSearch = false
      return
    } else {
      this.http.get<any[]>(`http://universities.hipolabs.com/search?country=${country}`)
      .subscribe(data => {
        console.log(data)
        if (!data.length) {
          this.errorInSearch = false
          this.displayText = 'No data for the location selected'
        } else {
          this.errorInSearch = true
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
        }
      })
    }
  }

}
