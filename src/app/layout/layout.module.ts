import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutCommonService } from './layout-common.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule,
  ],
  providers: [LayoutCommonService],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],

})
export class LayoutModule { }
