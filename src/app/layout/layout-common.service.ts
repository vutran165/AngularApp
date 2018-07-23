import { Injectable , EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutCommonService {

  public toggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  //this new approach - using service

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}
