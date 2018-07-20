import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})

export class HeaderComponent implements OnInit {

  title = 'app';
  faAlignLeft = faAlignLeft;
  faUser = faUser;

  // public show:boolean = false;
  public menuState:string = 'out';
   
  toggleSidebar()
  {
    this.menuState = (this.menuState === 'out' ? 'in' : 'out');
    console.log(this.menuState);
  }


  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
