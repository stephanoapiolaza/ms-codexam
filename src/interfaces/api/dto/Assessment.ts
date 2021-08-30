import {
  ValidateNested, IsNotEmpty, IsDefined, ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

import Task from './Task';

export default class Assessment {
  @IsDefined()
  @IsNotEmpty({ message: 'Assesment key can not be empty' })
  key: string;

  @ValidateNested()
  @Type(() => Task)
  @ArrayNotEmpty()
  tasks: Task[];
}
