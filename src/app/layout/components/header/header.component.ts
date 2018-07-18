import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('navInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
    })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
  ])
  ]
})

export class HeaderComponent implements OnInit {

  title = 'app';
  faAlignLeft = faAlignLeft;
  faUser = faUser;

  // public show:boolean = false;
  menuState:string = 'out';
   
  toggleSidebar()
  {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    console.log(this.menuState);
  }


  constructor() { 
    // console.log(this.show);
  }

  ngOnInit() {
    
  }

}
