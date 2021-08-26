import {
  ArrayNotEmpty, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import Answer from './Answer';

export default class Task {
  key: String;

  summary: String;

  type: String;

  @Type(() => Answer)
  @ValidateNested()
  @ArrayNotEmpty()
  answers: Answer[];
}
