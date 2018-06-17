import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchOperatorsTableComponent } from '../search-operators-table/search-operators-table.component';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-twitter-form',
  templateUrl: './twitter-form.component.html',
  styleUrls: ['./twitter-form.component.scss']
})
export class TwitterFormComponent implements OnInit, OnDestroy {
  @Input() configuration: any;
  @Output() save = new EventEmitter<null>();

  @ViewChild('form') public form: NgForm;

  itemsFormControl = new FormControl('', [Validators.required]);

  refreshFormControl = new FormControl('', [
    Validators.min(5),
    Validators.required
  ]);

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (!this.configuration.refreshTime) {
      this.configuration.refreshTime = 60;
    }
    this.form.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(_ => this.formChanged());
  }

  ngOnDestroy() {
    // Save configuration if it is valid
    this.formChanged();
  }

  showOperators() {
    this.dialog.open(SearchOperatorsTableComponent);
  }

  formChanged() {
    if (this.form.valid) {
      this.save.emit();
    }
  }
}
