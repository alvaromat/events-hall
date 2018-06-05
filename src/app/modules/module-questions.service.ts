import { Injectable } from '@angular/core';
import { QuestionBase } from '../dynamic-forms/question-base';
import { TextboxQuestion } from '../dynamic-forms/question-textbox';
import { Module } from './module';

@Injectable()
export class ModuleQuestionsService {
  getQuestions(module: Module) {
    const methodForThisModule = this.getMethodName(module);
    if (this[methodForThisModule]) {
      return this[methodForThisModule](module);
    } else {
      console.error(
        `ModuleQuestionsService: Could not get questions for module ${module.type}`
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
    let itemsValue = '';

    module.configuration['items'].forEach(element => {
      const firstItem = itemsValue.length === 0;
      itemsValue = firstItem ? element : `${itemsValue} ${element}`;
    });

    const questions = [
      new TextboxQuestion({
        key: 'items',
        label: 'Hashtags or users to spy on',
        value: itemsValue,
        required: true
      })
    ];

    return questions;
  }
}
