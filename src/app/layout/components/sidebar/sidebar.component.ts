import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
  
})
export class SidebarComponent implements OnInit {

  @Input() header: HeaderComponent; 

  constructor() {
    // console.log(this.header);
   }



  ngOnInit() {
  }

}
