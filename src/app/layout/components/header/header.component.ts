import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LayoutCommonService } from 'src/app/layout/layout-common.service';
import { state, trigger, style, animate, transition } from '@angular/animations';
import { MAT_CHECKBOX_CLICK_ACTION } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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

export class HeaderComponent implements OnInit {

  title = 'app';
  faAlignLeft = faAlignLeft;
  faUser = faUser;

  public menuState:string = 'out';
  public layoutService: LayoutCommonService;
   
  public toggleSidebar()
  {
    this.menuState = (this.menuState === 'out' ? 'in' : 'out');
    console.log(this.menuState);
  }

  //this new approach-using service
  @HostListener('click')
  click() {
    this.service.toggle();
  } 

  constructor(private service: LayoutCommonService) { 
      
  }

  ngOnInit() {
    
  }

}
