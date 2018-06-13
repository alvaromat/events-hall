import { Injectable } from '@angular/core';
import { TextboxQuestion } from '../dynamic-forms/question-textbox';
import { Module } from './module';
import { Label } from '../dynamic-forms/label';

@Injectable()
export class ModuleQuestionsService {

  getQuestions(module: Module) {
    const methodForThisModule = this.getMethodName(module);
    if (this[methodForThisModule]) {
      return this[methodForThisModule](module);
    } else {
      console.error(`ModuleQuestionsService: Could not get questions for module ${module.type}`
      );
    }
  }

  getMethodName(module: Module): string {
    let methodName = module.type;
    // Capitalize
    methodName = methodName[0].toUpperCase() + methodName.slice(1);
    // Add sugar
    return `get${methodName}Questions`;
  }

  getTwitterQuestions(module: Module) {
    const questions = [
      new Label({
        label: 'twitter.info_label',
        value: 'twitter.info_value'
      }),
      new TextboxQuestion({
        key: 'items',
        label: 'twitter.items_label',
        value: module.configuration['items'] || '',
        required: true
      }),
      new TextboxQuestion({
        key: 'refreshTime',
        label: 'twitter.refresh_label',
        value: module.configuration['refreshTime'] || 60,
        type: 'number',
        required: true
      })
    ];

    return questions;
  }
}
