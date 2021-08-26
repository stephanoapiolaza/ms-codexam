import { Response, Request, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { StatusCodes } from 'http-status-codes';
import today from './date.helper';

const getConstraints = (data: any) : any => {
  let result : string[] = [];
  if (data.children === undefined || data.children.length === 0) {
    return data.constraints;
  }
  data.children.forEach((element: any) => {
    if (!Array.isArray(element.children)) {
      result.push(element.constraints);
    } else {
      result.push(element.constraints);
      result = result.concat(getConstraints(element));
    }
  });
  return result;
};

const flatten = (data: any) => data.reduce((acc: any, curVal: any) => acc.concat(curVal), []);

const avoidDuplicate = (data: any) => data
  .filter((item: any, index: any) => data.indexOf(item) === index);

const notificationError = (error: any) => {
  const timestamp = today();
  return ({
    notifications:
      [...error.map((element: any) => ({ message: element, timestamp }))],
  });
};

const validationHelper = (dtoClass: any) => (req: Request, res: Response, next: NextFunction) => {
  const output: any = plainToClass(dtoClass, req.body);
  const optionValidate = { validationError: { target: false } };
  validate(output, optionValidate).then((errors) => {
    if (errors.length > 0) {
      const constraints = flatten(errors.map((element) => getConstraints(element)))
        .map((element: any) => Object.keys({ ...element }).map((prop) => element[prop]).join())
        .filter((element: any) => element !== undefined && element !== '');
      res.status(StatusCodes.BAD_REQUEST).send(notificationError(avoidDuplicate(constraints)));
    } else {
      res.locals.input = output;
      next();
    }
  });
};

export default validationHelper;
