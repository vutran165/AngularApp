import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('navInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
    })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
  ])
  ],
})
export class LayoutComponent implements OnInit {

  public menuState:string = 'out';
   
  faAlignLeft = faAlignLeft;

  toggleSidebar()
  {
    this.menuState = (this.menuState === 'out' ? 'in' : 'out');
    console.log(this.menuState);
  }


  constructor() { }

  ngOnInit() {
  }

}
