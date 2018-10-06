import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  clickedLink: number = 0;
  numberOfClicks: number = 0;

  ngOnInit() {
  }

  linkClicked(linkNumber: number) {
     console.log("link number:::"+linkNumber);
     this.clickedLink = linkNumber;
     this.numberOfClicks++;
  }

}
