import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.scss']
})
export class BeachComponent implements OnInit {

  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1598100931767-979cdc7b0175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1578525254586-74279addf1ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1598100931767-979cdc7b0175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1578525254586-74279addf1ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1598100931767-979cdc7b0175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1578525254586-74279addf1ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1598100931767-979cdc7b0175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1578525254586-74279addf1ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1598100931767-979cdc7b0175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1578525254586-74279addf1ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

}
