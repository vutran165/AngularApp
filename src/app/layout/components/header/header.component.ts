import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // pushRightClass: string = 'push-right';

  // toggleSidebar() {
  //   const dom: any = document.querySelector('body');
  //   return dom.classList.contains(this.pushRightClass);
  // }


  constructor() { }

  ngOnInit() {
  }

}
