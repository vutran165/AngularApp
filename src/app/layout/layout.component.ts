import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
  
})
export class LayoutComponent implements OnInit {

  public menuState:string = 'out';
   
  faAlignLeft = faAlignLeft;

  sideBarIsOpened = false;

  // toggleSidebar()
  // {
  //   this.menuState = (this.menuState === 'out' ? 'in' : 'out');
  //   console.log(this.menuState);
  // }

  toggleSidebar(shouldOpen: boolean)
  {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }


  constructor() { }

  ngOnInit() {
  }

}
