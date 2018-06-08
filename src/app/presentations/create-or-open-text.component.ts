import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../providers/sidenav.service';

@Component({
  selector: 'app-create-or-open-text',
  template: `
  <div>
    <p>Create a new presentation or open an existing one using the sidebar.</p>
    <button mat-raised-button (click)="openSidenav()">Open sidebar</button>
  </div>
  `,
  styles: [
    `
      div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    `
  ]
})
export class CreateOrOpenTextComponent implements OnInit {
  constructor(private sidenav: SidenavService) {}

  ngOnInit() {}

  openSidenav() {
    this.sidenav.open();
  }
}
