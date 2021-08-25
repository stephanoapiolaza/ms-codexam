import {
  ValidateNested, IsNotEmpty, IsDefined, Min,
} from 'class-validator';
import { Type } from 'class-transformer';

import Task from './Task';

export default class Assessment {
  @IsDefined()
  @IsNotEmpty({ message: 'Assesment key can not be empty' })
  key: String;

  @ValidateNested()
  @Type(() => Task)
  @Min(1)
  tasks: Task[];
}
