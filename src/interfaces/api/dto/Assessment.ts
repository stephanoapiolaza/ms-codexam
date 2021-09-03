import {
  ValidateNested, IsNotEmpty, IsDefined, ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

import Task from './Task';

export default class Assessment {
  @IsDefined({ always: true })
  @IsNotEmpty({ message: 'Assesment key can not be empty', always: true })
  key: string;

  duration: string;

  @ValidateNested({ groups: ['verify', 'submit'] })
  @Type(() => Task)
  @ArrayNotEmpty({ groups: ['verify', 'submit'] })
  tasks: Task[];

  constructor(key: string, duration: string, tasks: Task[]) {
    this.key = key;
    this.duration = duration;
    this.tasks = tasks;
  }
}
