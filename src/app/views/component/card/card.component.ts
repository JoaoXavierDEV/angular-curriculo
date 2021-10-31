import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  profilePic = './assets/users/joaojfmx/profile3-1.jpg'
  githubFetc = 'https://api.github.com/user/joaojfmx';


  constructor() { }

  ngOnInit(): void {
    
  }

}
