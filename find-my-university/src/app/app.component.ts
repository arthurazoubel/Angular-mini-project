import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  

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
