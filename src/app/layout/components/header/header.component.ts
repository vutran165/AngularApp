import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'app';
  faAlignLeft = faAlignLeft;
  faUser = faUser;

  public show:boolean = false;
  
  // toggleSidebar(x:boolean){
  //   x = !this.show;
  //   return x;
  // }
  
  
  toggleSidebar(){
    this.show = !this.show;
    console.log(this.show);
  }


  constructor() { 
    console.log(this.show);
  }

  ngOnInit() {
    
  }

}
