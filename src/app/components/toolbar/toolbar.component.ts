import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  quit(): void {
    this.electronService.remote.app.quit();
  }

}
