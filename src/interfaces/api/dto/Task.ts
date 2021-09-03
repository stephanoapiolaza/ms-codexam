import {
  ArrayNotEmpty, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import Answer from './Answer';

export default class Task {
  key: string;

  name: string;

  description: string;

  type: string;

  @Type(() => Answer)
  @ValidateNested({ groups: ['verify', 'submit'] })
  @ArrayNotEmpty({ groups: ['verify', 'submit'] })
  answers: Answer[];

  constructor(key: string, name: string, description: string, type: string) {
    this.key = key;
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
