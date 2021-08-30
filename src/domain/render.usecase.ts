import * as fs from 'fs';
import logger from '../common/config/logger';

/**
 * Allow to upload code to retrieve the output
 *
 * @param {*} req
 * @param {*} res
 */
const render = (newCode: string) : boolean => {
  try {
    const fileToChange = '/Users/usuario/Desktop/workspace/ms-codexam/boilerplate/front/src/App.js';
    fs.writeFileSync(fileToChange, newCode);
    return true;
  } catch (error) {
    logger.error(`Has ocurred an error to render ${error}`);
    throw new Error('Uncontrolled error, check the stdout');
  }
};

export default render;
