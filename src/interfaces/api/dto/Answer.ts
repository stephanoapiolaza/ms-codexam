import { IsDefined, IsNotEmpty } from 'class-validator';

export default class Answer {
  @IsDefined()
  @IsNotEmpty({ message: 'Data can not be empty' })
  data: string;
}
