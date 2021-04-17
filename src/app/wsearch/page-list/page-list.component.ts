import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  @Input() pages = [];

  constructor() { }

  ngOnInit(): void {

    // console.log(this.pages)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.pages.currentValue)
  }

}
