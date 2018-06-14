import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchOperatorsTableComponent } from '../search-operators-table/search-operators-table.component';

@Component({
  selector: 'app-twitter-form',
  templateUrl: './twitter-form.component.html',
  styleUrls: ['./twitter-form.component.scss']
})
export class TwitterFormComponent {

  @Input() configuration: any;

  constructor(private dialog: MatDialog) {}

  showOperators() {
    this.dialog.open(SearchOperatorsTableComponent);
  }

}
