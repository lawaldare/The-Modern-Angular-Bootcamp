import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wsearch-home',
  templateUrl: './wsearch-home.component.html',
  styleUrls: ['./wsearch-home.component.scss']
})
export class WsearchHomeComponent implements OnInit {


  pages = [];

  constructor(private wSearch: WikipediaService) { }

  ngOnInit(): void {
  }


  onTerm(term: string): void {
    this.wSearch.search(term).subscribe((data: any) => {
      this.pages = data.query.search;
    }, error => {
      console.log(error.error.message);
    })
  }

}
