import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Mark', age: 31, job: 'Product Manager', employed: true }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a Job?' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
