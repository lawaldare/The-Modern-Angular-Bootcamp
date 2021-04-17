import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  term: string = "";

  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  onSearch(value: string): void {
    this.term = value;
  }

  onFormSubmit() {
    this.submitted.emit(this.term);
  }

}
