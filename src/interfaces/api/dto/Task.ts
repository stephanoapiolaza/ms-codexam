import {
  IsDefined, IsNotEmpty, Min, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import Answer from './Answer';

export default class Task {
  @IsDefined()
  @IsNotEmpty({ message: 'Task key can not be empty' })
  key: String;

  summary: String;

  type: String;

  @Type(() => Answer)
  @ValidateNested()
  @Min(1)
  answers: Answer[];
}
