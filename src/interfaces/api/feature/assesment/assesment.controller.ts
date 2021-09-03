import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import today from '../../helper/date.helper';
import renderUseCase from '../../../../domain/render.usecase';
import startTestUseCase from '../../../../domain/start-test.usecase';
import Assessment from '../../dto/Assessment';
import Checkout from '../../dto/Checkout';
import CheckoutType from '../../dto/CheckoutType';
import Stdout from '../../dto/Stdout';
import StdoutType from '../../dto/StdoutType';

/**
 * Allow to upload code to retrieve the output
 *
 * @param {*} req
 * @param {*} res
 */
const doReassess = async (req: Request, res: Response) => {
  try {
    const assessment = res.locals.input as Assessment;
    renderUseCase(assessment.tasks[0].answers[0].data);
    const checkout = new Checkout(CheckoutType.WEB, new Stdout(StdoutType.IFRAME, 'http://localhost:9000'));
    return res.status(StatusCodes.OK).json(checkout);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      notifications: [
        {
          message: e.toString(),
          timestamp: today(),
        },
      ],
    });
  }
};

/**
 * Allow to start test to retrieve the tasks to complete
 * @param req
 * @param res
 */
const startTest = async (req: Request, res: Response) => {
  try {
    const assessment = res.locals.input as Assessment;
    return res.status(StatusCodes.CREATED).json(startTestUseCase(assessment.key));
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      notifications: [
        {
          message: e.toString(),
          timestamp: today(),
        },
      ],
    });
  }
};

export { doReassess, startTest };
