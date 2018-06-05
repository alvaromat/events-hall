import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {

  private sidenav: MatSidenav;

  set Sidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open(): Promise<void> {
    if (this.sidenav) {
      return this.sidenav.open();
    }
  }

  public close(): Promise<void> {
    if (this.sidenav) {
      return this.sidenav.close();
    }
  }
}
