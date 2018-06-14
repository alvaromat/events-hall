import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-search-operators-table',
  templateUrl: './search-operators-table.component.html'
})
export class SearchOperatorsTableComponent  {

  constructor(public dialog: MatDialog) { }

}
