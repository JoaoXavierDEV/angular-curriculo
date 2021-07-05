import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  fotoJotaro = 'https://64.media.tumblr.com/d8aa503f421558482c5f56beb257757d/tumblr_odlexcDOUx1u1wv3go1_500.png';
  profilePic = './assets/users/joaojfmx/profile3-1.jpg'
  githubFetc = 'https://api.github.com/user/joaojfmx';


  constructor() { }

  ngOnInit(): void {
    
  }

}
