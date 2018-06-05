import { Component, Input, OnInit } from '@angular/core';
import { Module } from '../module';
import { ModuleQuestionsService } from '../module-questions.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {
  @Input() module: Module;
  questions;

  constructor(private questionsService: ModuleQuestionsService) {}

  ngOnInit() {
    if (this.module.isValid()) {
      this.questions = this.questionsService.getQuestions(this.module);
    }
  }

  typeChanged(change: MatSelectChange) {
    if (this.module.isValid()) {
      this.questions = this.questionsService.getQuestions(this.module);
    }
  }

  saveConfiguration(configuration: any) {
    this.module.configuration = configuration;
  }
}
