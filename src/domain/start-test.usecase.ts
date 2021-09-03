import * as fs from 'fs';
import { parse } from 'yaml';
import logger from '../common/config/logger';
import Assessment from '../interfaces/api/dto/Assessment';
import Task from '../interfaces/api/dto/Task';

/**
 * Allow to upload code to retrieve the output
 *
 * @param {*} req
 * @param {*} res
 */
const startTestUseCase = (assessmentKey: string) : Assessment => {
  try {
    const fileToChange = '/Users/usuario/Desktop/workspace/ms-codexam/boilerplate/front/task.yml';
    const fileContents = fs.readFileSync(fileToChange, 'utf8');
    const properties: any = parse(fileContents);
    return new Assessment(assessmentKey, properties.duration, [new Task(properties.key, properties.name, properties.description, 'code')]);
  } catch (error) {
    logger.error(`Has ocurred an error to start test ${error}`);
    throw new Error('Uncontrolled error, check the stdout');
  }
};

export default startTestUseCase;
