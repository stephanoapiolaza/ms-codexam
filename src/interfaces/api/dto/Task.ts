import {
  ArrayNotEmpty, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import Answer from './Answer';

export default class Task {
  key: string;

  summary: string;

  type: string;

  @Type(() => Answer)
  @ValidateNested()
  @ArrayNotEmpty()
  answers: Answer[];
}
