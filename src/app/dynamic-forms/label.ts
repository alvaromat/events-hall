import { QuestionBase } from './question-base';

export class Label extends QuestionBase<string> {
  controlType = 'label';

  constructor(options: {} = {}) {
    super(options);
  }
}
