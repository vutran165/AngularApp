import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LayoutCommonService } from 'src/app/layout/layout-common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
  
})
export class SidebarComponent implements OnInit {

  @Input() header: HeaderComponent; 

   //this new approach - using service
   @HostBinding('class.is-open') @Input()
   isOpen = false;
  
   constructor(private service: LayoutCommonService) {
    
   }

  ngOnInit() {
    this.service.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

  }

}
