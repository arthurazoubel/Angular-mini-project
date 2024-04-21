import { Component, Input } from '@angular/core';
import { University } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})

export class UniversitiesListComponent {
  universitiesList: University[] = []
  errorInSearch: boolean = true
  displayText: string = 'No country provided'

  constructor(private http: HttpClient) {
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
