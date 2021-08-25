import { Response, Request, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

const validationHelper = (dtoClass: any) => (req: Request, res: Response, next: NextFunction) => {
  const output: any = plainToClass(dtoClass, req.body);
  const optionValidate = { skipMissingProperties: true, validationError: { target: false } };
  validate(output, optionValidate).then((errors) => {
    if (errors.length > 0) {
      // eslint-disable-next-line no-console
      console.log(`inside error are ${errors}`);
      let errorTexts : any = [];
      errors.forEach((errorItem) => {
        errorTexts = errorTexts.concat(errorItem.constraints);
      });
      res.status(400).send(errorTexts);
    } else {
      res.locals.input = output;
      next();
    }
  });
};

export default validationHelper;
