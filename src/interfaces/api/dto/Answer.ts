import { IsDefined, IsNotEmpty } from 'class-validator';

export default class Answer {
  @IsDefined({ message: 'Data can not be undefined', groups: ['verify', 'submit'] })
  @IsNotEmpty({ message: 'Data can not be empty', groups: ['verify', 'submit'] })
  data: string;
}
