import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule { }
